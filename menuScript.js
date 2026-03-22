//wait till the the dom has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page Loaded');
    loadMenuData(); //loading the menu items when the page loads
});

//array to store all the categories
let fullCategories = [];

function loadMenuData() {
    fetch('menuData.xml')
        .then(response => response.text()) //parsing the response as plain text
        .then(data => {
            console.log('XML Data Loaded:', data);//logging the loaded xml data
            const parser = new DOMParser();//creating a DOM parser instance to handle xml
            const xmlDoc = parser.parseFromString(data, 'application/xml');//converting XML text into DOM objects
            const categories = xmlDoc.getElementsByTagName('category');//extracting categories from xml


            fullCategories = Array.from(categories);
            displayMenu(categories); //rendering all the items initially
        })
        .catch(error => console.error('error loading XML'));//log error if fails

}

//function to display the items dynamically
function displayMenu(categories) {
    const menuContainer = document.getElementById('menuDisplay'); //slecting the menu display container
    menuContainer.innerHTML = ''; //clearing prev content
    console.log(' Rendered Categories:', categories);

    Array.from(categories).forEach(category => {
        const categoryName = category.getAttribute('name'); //getting category name attribute
        console.log("Appending category:", categoryName);//logging the category name
        const items = category.getElementsByTagName('item');//extract all the items within category

        // Create a wrapper for the category
        const categoryWrapper = document.createElement('div');
        categoryWrapper.classList.add('category-wrapper'); //adding a class for styling

        // Create and append the category title
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = categoryName; //setting the category title text
        categoryTitle.style.margin = '20px 0';
        categoryTitle.classList.add('categoryTitle'); //class for styling
        categoryWrapper.appendChild(categoryTitle); //adding the title to the category wrapper

        // Create and append the card container after loading
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('cardContainer');//adding a class for styling

        //loop through each item within the category
        Array.from(items).forEach(item => {
            const name = item.getElementsByTagName('name')[0].textContent;//getting item name
            const image = item.getElementsByTagName('image')[0].textContent;//gettig the image source
            const description = item.getElementsByTagName('description')[0].textContent;//getting the description
            const price = item.getElementsByTagName('price')[0].textContent;//getting the price

            console.log("Item name:", name);
            console.log("Item price:", price);

            // Create and appending the 'item' element to get all itmes to page
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('card');
            itemDiv.setAttribute('data-popular',item.getElementsByTagName('popular')[0].textContent);//storing the popularity as attribute
            itemDiv.setAttribute('data-type', item.getElementsByTagName('type')[0].textContent.toLowerCase());//storing type as attribute
            itemDiv.innerHTML = `
                <img src="${image}" alt="${name}">
                <div class="textCont">
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <p>Price: Rs. ${price}</p> 
                </div>
            `;
            cardContainer.appendChild(itemDiv);//append the item card to the container
        });

        categoryWrapper.appendChild(cardContainer);//add the cont to the wrapper
        menuContainer.appendChild(categoryWrapper);//add the wrapper to the menu
    });
}





function applyFilter(filter) {
    const allItems = document.querySelectorAll('.card'); // Select all menu item cards

    allItems.forEach(item => {
        const category = item.closest('.category-wrapper').querySelector('.categoryTitle').textContent.toLowerCase();//getting the category name
        const price = parseInt(item.querySelector('.textCont p:nth-of-type(2)').textContent.replace('Price: Rs. ', '').trim());//get item price
        const type = item.getAttribute('data-type');//veg and non veg attribute
        const popular = item.getAttribute('data-popular') ==='true';//check if item is popular

        let shouldDisplay = false; // Default: hide the item

        // Filtering logic based on the user clicked filter
        switch (filter) {
            case 'all':
                shouldDisplay = true;
                break;
            case 'pop': // Popular items
                shouldDisplay = popular;
                break;
            case 'app': // Appetizers category
                shouldDisplay = category.includes('appetizers');
                break;
            case 'main': // Mains category
                shouldDisplay = category.includes('mains');
                break;
            case 'bev': // Beverages category
                shouldDisplay = category.includes('beverages');
                break;
            case 'des': // Desserts category
                shouldDisplay = category.includes('desserts');
                break;
            case 'veg': // Vegetarian items
                shouldDisplay = type ==='vegetarian';
                break;
            case 'non': // Non-Vegetarian items
                shouldDisplay = type ==='non-vegetarian';
                break;
            case 'bel': // Price below Rs.1000
                shouldDisplay = price < 1000;
                break;
            case 'ab': // Price above Rs.2500
                shouldDisplay = price > 2500;
                break;
        }

        // Show or hide the menu item based on filtering logic
        item.style.display = shouldDisplay ? 'block' : 'none';
    });

    //to hide the cat titles if there are no cards in that given filter
    document.querySelectorAll('.category-wrapper').forEach(categoryWrapper =>{
        const cards=categoryWrapper.querySelectorAll('.card');//getting all the cards in that category
        const anyVisible=Array.from(cards).some(card=>card.style.display==='block');//checking to see if any cards are there

        //showing or hiding the category based on card visibility
        categoryWrapper.style.display=anyVisible ? 'block':'none';
    });

}





// Attaching event listeners to the filter buttons
document.querySelectorAll('.menuFilters .btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('onclick').match(/'(.*?)'/)[1]; // Extracting the filtering values from onclick action
        applyFilter(filter); // Applying the selected filter for the page

        // Remove the 'active' class from all buttons, to extract
        document.querySelectorAll('.menuFilters .btn').forEach(btn => {
            btn.classList.remove('active'); //removing the active class for styling
        });

        // Add the 'active' class to the clicked button to be highlighted
        button.classList.add('active');//highlight the slected button
    });
});
