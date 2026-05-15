# 🍽️ RAFALE - Upscale French Restaurant Website

A beautifully designed, fully accessible client-side restaurant website for **RAFALE**, an upscale French dining establishment. Built with **modern web technologies** and **WCAG compliance** at its core.

---

## 🎯 What It Does

**RAFALE** is a complete restaurant experience brought online:

- 🏠 **Stunning Home Page** - Hero section with immersive video, restaurant story, and featured dishes
- 📋 **Dynamic Menu System** - Browse appetizers, mains, desserts, and beverages with intelligent filtering
- 🛒 **Online Ordering** - Add items to cart, fill delivery details, calculate totals in real-time
- 🖼️ **Gallery** - Showcase restaurant ambiance and dining moments
- 📝 **About & Contact** - Learn the restaurant's story and get in touch
- ♿ **Accessibility First** - WCAG compliant with semantic HTML, ARIA labels, and keyboard navigation

---

## ✨ Key Features

### 🎨 Pages
- **Home.html** - Hero section, restaurant introduction, featured dishes, gallery preview, footer
- **Menu.html** - Interactive menu with XML data source, category-based filtering
- **OnlineOrder.html** - Full-featured ordering form with live price calculation
- **About.html** - Restaurant history and philosophy
- **Contact.html** - Get in touch section
- **Gallery.html** - Visual showcase of the restaurant
- **ThankYou.html** - Order confirmation page

### 🔍 Smart Filtering
Filter menu items by:
- **Category** (Appetizers, Mains, Desserts, Beverages)
- **Popularity** (Popular items only)
- **Dietary** (Vegetarian / Non-Vegetarian)
- **Price Range** (Below Rs.1000 / Above Rs.2500)

### 🛍️ Online Ordering
- Choose dishes and adjust quantities
- Enter personal details (name, email, phone)
- Select pickup or home delivery
- Add delivery address and date
- Special requests field
- Live total calculation
- Terms & conditions acceptance

### ♿ Accessibility
- **WCAG Compliance** - Following Web Content Accessibility Guidelines
- **Semantic HTML** - Proper heading hierarchy, form labels, fieldsets
- **ARIA Labels** - Social links and interactive elements properly labeled
- **Keyboard Navigation** - Full keyboard support for all interactions
- **Responsive Design** - Mobile, tablet, and desktop friendly
- **Font Family** - Typography optimized for readability

---

## 🛠️ Technology Stack

| Language | Purpose | % |
|----------|---------|---|
| **HTML5** | Structure & Semantic markup | 52.8% |
| **CSS3** | Responsive styling & layouts | 27.1% |
| **JavaScript** | Dynamic interactions & filtering | 20.1% |

### Additional Resources
- **XML** - Menu data stored in `menuData.xml`
- **Font Awesome** - Icon library for social links
- **Google Fonts** - Cinzel Decorative & Raleway typefaces
- **No Framework** - Pure vanilla HTML, CSS, JavaScript

---

## 📂 Project Structure

```
├── Home.html                 # Landing page
├── Menu.html                 # Menu with filters
├── OnlineOrder.html          # Order placement form
├── About.html                # Restaurant story
├── Contact.html              # Contact form
├── Gallery.html              # Image gallery
├── thankYou.html             # Order confirmation
│
├── menuData.xml              # Menu items data source
│
├── mainStyles.css            # Shared styles (nav, footer)
├── homeStyle.css             # Home page styling
├── menuStyle.css             # Menu page styling
├── onlineStyle.css           # Order form styling
├── aboutStyle.css            # About page styling
├── contactStyles.css         # Contact page styling
├── galleryStyles.css         # Gallery styling
│
├── menuScript.js             # Menu filtering logic
├── onlineOrderScript.js      # Order form handling
└── contactScript.js          # Contact form validation
```

---

## 💡 How It Works

### Menu Filtering
The menu system loads dish data from `menuData.xml` and dynamically displays items. Click filter buttons to see:
- All items from a specific category
- Only vegetarian or non-vegetarian dishes
- Items within a certain price range
- Popular recommendations

### Online Ordering
1. Select dishes and set quantities (price updates live)
2. Fill in your name, email, and phone number
3. Choose pickup or home delivery
4. Add delivery address and preferred date
5. Include any special requests
6. Review total price
7. Accept terms and submit

---

## 🎯 Design Philosophy

✅ **User-Centric** - Intuitive navigation and clear calls-to-action  
✅ **Accessible** - WCAG compliance ensures everyone can enjoy it  
✅ **Responsive** - Works beautifully on all devices  
✅ **Performance** - Pure client-side, no backend required  
✅ **Elegant** - French upscale aesthetic with modern design  
✅ **Functional** - Complete restaurant experience online  

---

## 📱 Menu Items Showcase

### Appetizers 🥘
Classic French Onion Soup, Niçoise Salad, Tomato Confit, Bouillabaisse, Gougères

### Mains 🍖
Lobster Thermidor, Chicken Dijon, Quiche Lorraine, Salmon Rillette, Ratatouille, Herb Crusted Salmon

### Desserts 🍰
Profiteroles, Tarte Tatin, Poached Pear, Crème Brûlée, Chocolate Souffle

### Beverages ☕
Lavender Tea, Hibiscus Tea, Fresh Pressed Juice, Americano, Café au Lait

---

## 🌐 Restaurant Info

**Name:** RAFALE (An Upscale French Restaurant)  
**Location:** No 29, Galle Road, Colombo 03  
**Phone:** 0112-112929  
**Email:** rafale@gmail.com  

**Hours:**
- Tuesday - Sunday: 11:00 AM - 9:00 PM
- Monday: 11:00 AM - 2:00 PM

**Follow Us:** Facebook | Instagram | WhatsApp | Pinterest | LinkedIn | X

---

## 🎓 Learning Outcomes

This project demonstrates:
- Clean, semantic HTML5 structure
- Advanced CSS3 layouts (Flexbox, Grid)
- Vanilla JavaScript for DOM manipulation
- XML data parsing and rendering
- Form validation and handling
- Responsive design principles
- WCAG accessibility standards
- UX/UI best practices

---

**Welcome to RAFALE. An exquisite dining experience. 🍽️✨**
