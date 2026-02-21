// Enhanced Grocery Store System with 90+ Products and AUTO-EXCEL EXPORT

// ============================================
// ENHANCED PRODUCTS DATA WITH DETAILS
// ============================================

const products = [
// 🍎 Fruits (15 items) - WITH DETAILS
{
id: 0,
name: "Apple",
price: 1.5,
stock: 25,
category: "Fruits",
image: "images/products/apple.jpg",
details: {
type: "Red Delicious",
weight: "1 kg pack",
origin: "Northern Areas, Pakistan",
season: "Available all year",
storage: "Cool dry place (1-2 weeks)",
nutrition: {
calories: "52 kcal",
carbs: "14g",
fiber: "2.4g",
vitaminC: "14% DV"
},
benefits: [
"Rich in antioxidants",
"Good for heart health",
"Helps in digestion",
"Boosts immunity"
],
usage: ["Eat raw", "Make juice", "Salads", "Pies", "Smoothies"],
rating: 4.2
}
},
{
id: 1,
name: "Banana",
price: 0.5,
stock: 30,
category: "Fruits",
image: "images/products/banana.jpg",
details: {
type: "Cavendish",
weight: "1 dozen",
origin: "Sindh, Pakistan",
season: "Year-round",
storage: "Room temperature (3-5 days)",
nutrition: {
calories: "89 kcal",
carbs: "23g",
fiber: "2.6g",
vitaminC: "12% DV"
},
benefits: [
"Rich in potassium",
"Natural energy booster",
"Good for digestion",
"Heart healthy"
],
usage: ["Eat raw", "Smoothies", "Baking", "Pancakes"],
rating: 4.5
}
},
{
id: 2,
name: "Orange",
price: 0.8,
stock: 20,
category: "Fruits",
image: "images/products/orange.jpg",
details: {
type: "Kinnow",
weight: "1 kg",
origin: "Punjab, Pakistan",
season: "Winter season",
storage: "Cool place (1 week)",
nutrition: {
calories: "47 kcal",
carbs: "12g",
fiber: "2.4g",
vitaminC: "88% DV"
},
benefits: [
"High in Vitamin C",
"Boosts immunity",
"Good for skin",
"Antioxidant rich"
],
usage: ["Eat raw", "Juice", "Salads", "Desserts"],
rating: 4.3
}
},
{
id: 3,
name: "Grapes",
price: 2.5,
stock: 15,
category: "Fruits",
image: "images/products/grapes.jpg",
details: {
type: "Green Seedless",
weight: "500g pack",
origin: "Balochistan, Pakistan",
season: "Summer season",
storage: "Refrigerate (3-5 days)",
nutrition: {
calories: "69 kcal",
carbs: "18g",
fiber: "0.9g",
vitaminC: "18% DV"
},
benefits: [
"Rich in antioxidants",
"Good for blood pressure",
"Anti-inflammatory",
"Promotes heart health"
],
usage: ["Eat raw", "Fruit salads", "Juice", "Desserts"],
rating: 4.4
}
},
{
id: 4,
name: "Strawberry",
price: 3.0,
stock: 12,
category: "Fruits",
image: "images/products/strawberries.jpg",
details: {
type: "Fresh Local",
weight: "250g box",
origin: "Murree, Pakistan",
season: "Spring season",
storage: "Refrigerate (2-3 days)",
nutrition: {
calories: "32 kcal",
carbs: "7.7g",
fiber: "2.0g",
vitaminC: "149% DV"
},
benefits: [
"Very high in Vitamin C",
"Anti-aging properties",
"Good for skin",
"Boosts immunity"
],
usage: ["Eat raw", "Smoothies", "Desserts", "Toppings"],
rating: 4.6
}
},
{
id: 5,
name: "Mango",
price: 1.2,
stock: 18,
category: "Fruits",
image: "images/products/Mango.jpg",
details: {
type: "Sindhri",
weight: "1 kg",
origin: "Sindh, Pakistan",
season: "Summer season",
storage: "Room temperature",
nutrition: {
calories: "60 kcal",
carbs: "15g",
fiber: "1.6g",
vitaminC: "67% DV"
},
benefits: [
"King of fruits",
"Rich in Vitamin A & C",
"Good for eyesight",
"Boosts immunity"
],
usage: ["Eat raw", "Juice", "Shakes", "Desserts"],
rating: 4.8
}
},
{
id: 6,
name: "Pineapple",
price: 2.8,
stock: 10,
category: "Fruits",
image: "images/products/pineapple.jpg",
details: {
type: "Fresh Imported",
weight: "1 piece",
origin: "Philippines",
season: "Year-round",
storage: "Room temperature",
nutrition: {
calories: "50 kcal",
carbs: "13g",
fiber: "1.4g",
vitaminC: "131% DV"
},
benefits: [
"Rich in bromelain enzyme",
"Aids digestion",
"Anti-inflammatory",
"Boosts immunity"
],
usage: ["Eat raw", "Juice", "Salads", "Grilled"],
rating: 4.3
}
},
{
id: 7,
name: "Watermelon",
price: 4.5,
stock: 8,
category: "Fruits",
image: "images/products/watermelon.jpg",
details: {
type: "Seedless",
weight: "3-4 kg",
origin: "Punjab, Pakistan",
season: "Summer season",
storage: "Cool place",
nutrition: {
calories: "30 kcal",
carbs: "8g",
fiber: "0.4g",
vitaminC: "10% DV"
},
benefits: [
"92% water content",
"Excellent hydration",
"Low in calories",
"Good for kidneys"
],
usage: ["Eat raw", "Juice", "Salads", "Smoothies"],
rating: 4.5
}
},
{
id: 8,
name: "Kiwi",
price: 1.0,
stock: 15,
category: "Fruits",
image: "images/products/kiwi.jpg",
details: {
type: "Green Kiwi",
weight: "100g each",
origin: "New Zealand",
season: "Year-round",
storage: "Room temperature",
nutrition: {
calories: "61 kcal",
carbs: "15g",
fiber: "3.0g",
vitaminC: "155% DV"
},
benefits: [
"Extremely high in Vitamin C",
"Rich in fiber",
"Good for digestion",
"Boosts immunity"
],
usage: ["Eat raw", "Fruit salads", "Smoothies", "Toppings"],
rating: 4.4
}
},
{
id: 9,
name: "Peach",
price: 1.8,
stock: 14,
category: "Fruits",
image: "images/products/peach.jpg",
details: {
type: "Fresh Local",
weight: "1 kg",
origin: "Swat, Pakistan",
season: "Summer season",
storage: "Room temperature",
nutrition: {
calories: "39 kcal",
carbs: "10g",
fiber: "1.5g",
vitaminC: "11% DV"
},
benefits: [
"Rich in antioxidants",
"Good for skin",
"Anti-inflammatory",
"Promotes heart health"
],
usage: ["Eat raw", "Desserts", "Salads", "Preserves"],
rating: 4.2
}
},
{
id: 10,
name: "Pear",
price: 1.3,
stock: 16,
category: "Fruits",
image: "images/products/pear.jpg",
details: {
type: "Asian Pear",
weight: "1 kg",
origin: "Northern Pakistan",
season: "Autumn season",
storage: "Cool dry place",
nutrition: {
calories: "57 kcal",
carbs: "15g",
fiber: "3.1g",
vitaminC: "7% DV"
},
benefits: [
"High in fiber",
"Good for digestion",
"Low glycemic index",
"Heart healthy"
],
usage: ["Eat raw", "Salads", "Baking", "Desserts"],
rating: 4.1
}
},
{
id: 11,
name: "Cherry",
price: 4.0,
stock: 10,
category: "Fruits",
image: "images/products/cherry.jpg",
details: {
type: "Sweet Cherry",
weight: "500g pack",
origin: "Kashmir, Pakistan",
season: "Summer season",
storage: "Refrigerate",
nutrition: {
calories: "50 kcal",
carbs: "12g",
fiber: "1.6g",
vitaminC: "16% DV"
},
benefits: [
"Anti-inflammatory",
"Rich in antioxidants",
"Good for sleep",
"Promotes heart health"
],
usage: ["Eat raw", "Desserts", "Toppings", "Preserves"],
rating: 4.6
}
},
{
id: 12,
name: "Blueberry",
price: 3.5,
stock: 12,
category: "Fruits",
image: "images/products/blueberry.jpg",
details: {
type: "Fresh Imported",
weight: "125g box",
origin: "USA",
season: "Year-round",
storage: "Refrigerate",
nutrition: {
calories: "57 kcal",
carbs: "14g",
fiber: "2.4g",
vitaminC: "16% DV"
},
benefits: [
"Superfood",
"Very high in antioxidants",
"Good for brain",
"Anti-aging"
],
usage: ["Eat raw", "Smoothies", "Yogurt", "Baking"],
rating: 4.7
}
},
{
id: 13,
name: "Raspberry",
price: 3.8,
stock: 11,
category: "Fruits",
image: "images/products/raspberry.jpg",
details: {
type: "Fresh Imported",
weight: "125g box",
origin: "Chile",
season: "Year-round",
storage: "Refrigerate",
nutrition: {
calories: "52 kcal",
carbs: "12g",
fiber: "6.5g",
vitaminC: "43% DV"
},
benefits: [
"Very high in fiber",
"Rich in antioxidants",
"Good for weight loss",
"Anti-inflammatory"
],
usage: ["Eat raw", "Desserts", "Smoothies", "Toppings"],
rating: 4.5
}
},
{
id: 14,
name: "Lemon",
price: 0.6,
stock: 22,
category: "Fruits",
image: "images/products/lemon.jpg",
details: {
type: "Local Fresh",
weight: "1 kg",
origin: "Pakistan",
season: "Year-round",
storage: "Room temperature",
nutrition: {
calories: "29 kcal",
carbs: "9g",
fiber: "2.8g",
vitaminC: "88% DV"
},
benefits: [
"Rich in Vitamin C",
"Detoxifying",
"Good for skin",
"Aids digestion"
],
usage: ["Juice", "Cooking", "Drinks", "Cleaning"],
rating: 4.3
}
},

// 🥦 Vegetables (20 items) - WITH DEFAULT DETAILS
{ id: 15, name: "Carrot", price: 0.8, stock: 25, category: "Vegetables", image: "images/products/carrot.jpg" },
{ id: 16, name: "Broccoli", price: 1.2, stock: 18, category: "Vegetables", image: "images/products/broccoli.jpg" },
{ id: 17, name: "Tomato", price: 0.7, stock: 30, category: "Vegetables", image: "images/products/tomato.jpg" },
{ id: 18, name: "Potato", price: 0.5, stock: 40, category: "Vegetables", image: "images/products/potato.jpg" },
{ id: 19, name: "Onion", price: 0.6, stock: 35, category: "Vegetables", image: "images/products/onion.jpg" },
{ id: 20, name: "Spinach", price: 1.5, stock: 15, category: "Vegetables", image: "images/products/spinach.jpg" },
{ id: 21, name: "Lettuce", price: 1.0, stock: 20, category: "Vegetables", image: "images/products/lettuce.jpg" },
{ id: 22, name: "Cucumber", price: 0.9, stock: 22, category: "Vegetables", image: "images/products/cucumber.jpg" },
{ id: 23, name: "Bell Pepper", price: 1.1, stock: 18, category: "Vegetables", image: "images/products/bell pepper.jpg" },
{ id: 24, name: "Garlic", price: 0.4, stock: 30, category: "Vegetables", image: "images/products/garlic.jpg" },
{ id: 25, name: "Ginger", price: 0.8, stock: 25, category: "Vegetables", image: "images/products/ginger.jpg" },
{ id: 26, name: "Cabbage", price: 1.3, stock: 16, category: "Vegetables", image: "images/products/cabbage.jpg" },
{ id: 27, name: "Cauliflower", price: 1.6, stock: 14, category: "Vegetables", image: "images/products/cauliflower.jpg" },
{ id: 28, name: "Eggplant", price: 1.4, stock: 12, category: "Vegetables", image: "images/products/eggplant.jpg" },
{ id: 29, name: "Zucchini", price: 1.2, stock: 17, category: "Vegetables", image: "images/products/zucchini.jpg" },
{ id: 30, name: "Mushroom", price: 2.0, stock: 13, category: "Vegetables", image: "images/products/mushroom.jpg" },
{ id: 31, name: "Corn", price: 0.9, stock: 20, category: "Vegetables", image: "images/products/corn.jpg" },
{ id: 32, name: "Peas", price: 1.1, stock: 18, category: "Vegetables", image: "images/products/peas.jpg" },
{ id: 33, name: "Green Beans", price: 1.3, stock: 16, category: "Vegetables", image: "images/products/green beans.jpg" },
{ id: 34, name: "Radish", price: 0.7, stock: 22, category: "Vegetables", image: "images/products/radish.jpg" },

// 🥛 Dairy & Eggs (10 items)
{ id: 35, name: "Milk", price: 2.0, stock: 20, category: "Dairy", image: "images/products/milk.jpg" },
{ id: 36, name: "Eggs", price: 3.0, stock: 25, category: "Dairy", image: "images/products/eggs.jpg" },
{ id: 37, name: "Butter", price: 2.5, stock: 18, category: "Dairy", image: "images/products/butter.jpg" },
{ id: 38, name: "Cheese", price: 4.0, stock: 15, category: "Dairy", image: "images/products/cheese.jpg" },
{ id: 39, name: "Yogurt", price: 1.5, stock: 22, category: "Dairy", image: "images/products/yogurt.jpg" },
{ id: 40, name: "Cream", price: 2.2, stock: 16, category: "Dairy", image: "images/products/cream.jpg" },
{ id: 41, name: "Cheddar Cheese", price: 4.5, stock: 12, category: "Dairy", image: "images/products/Cheddar Cheese.jpg" },
{ id: 42, name: "Mozzarella", price: 3.8, stock: 14, category: "Dairy", image: "images/products/mozzarella.jpg" },
{ id: 43, name: "Sour Cream", price: 1.8, stock: 17, category: "Dairy", image: "images/products/Sour Cream.jpg" },
{ id: 44, name: "Cottage Cheese", price: 2.8, stock: 13, category: "Dairy", image: "images/products/Cottage Cheese.jpg" },

// 🍞 Bakery (10 items)
{ id: 45, name: "White Bread", price: 1.2, stock: 20, category: "Bakery", image: "images/products/White Bread.jpg" },
{ id: 46, name: "Whole Wheat Bread", price: 1.5, stock: 18, category: "Bakery", image: "images/products/Whole Wheat Bread.jpg" },
{ id: 47, name: "Baguette", price: 2.0, stock: 12, category: "Bakery", image: "images/products/Baguette.jpg" },
{ id: 48, name: "Croissant", price: 1.8, stock: 15, category: "Bakery", image: "images/products/croissant.jpg" },
{ id: 49, name: "Muffin", price: 2.5, stock: 14, category: "Bakery", image: "images/products/muffin.jpg" },
{ id: 50, name: "Bagel", price: 1.3, stock: 16, category: "Bakery", image: "images/products/Bagel.jpg" },
{ id: 51, name: "Donut", price: 1.0, stock: 20, category: "Bakery", image: "images/products/donut.jpg" },
{ id: 52, name: "Cake", price: 12.0, stock: 8, category: "Bakery", image: "images/products/cake.jpg" },
{ id: 53, name: "Cookies", price: 3.5, stock: 15, category: "Bakery", image: "images/products/cookies.jpg" },
{ id: 54, name: "Pie", price: 8.0, stock: 10, category: "Bakery", image: "images/products/pie.jpg" },

// 🥩 Meat & Poultry (10 items)
{ id: 55, name: "Chicken Breast", price: 6.5, stock: 12, category: "Meat", image: "images/products/Chicken Breast.jpg" },
{ id: 56, name: "Beef Steak", price: 12.0, stock: 8, category: "Meat", image: "images/products/Beef Steak.jpg" },
{ id: 57, name: "Ground Beef", price: 8.0, stock: 10, category: "Meat", image: "images/products/Ground Beef.jpg" },
{ id: 58, name: "Pork Chops", price: 7.5, stock: 9, category: "Meat", image: "images/products/Pork Chops.jpg" },
{ id: 59, name: "Bacon", price: 5.5, stock: 15, category: "Meat", image: "images/products/Bacon.jpg" },
{ id: 60, name: "Sausages", price: 4.5, stock: 18, category: "Meat", image: "images/products/sausages.jpg" },
{ id: 61, name: "Turkey", price: 9.0, stock: 6, category: "Meat", image: "images/products/turkey.jpg" },
{ id: 62, name: "Ham", price: 6.8, stock: 11, category: "Meat", image: "images/products/ham.jpg" },
{ id: 63, name: "Salmon", price: 10.0, stock: 7, category: "Meat", image: "images/products/salmon.jpg" },
{ id: 64, name: "Shrimp", price: 14.0, stock: 5, category: "Meat", image: "images/products/shrimp.jpg" },

// 🍚 Grains & Pasta (8 items)
{ id: 65, name: "White Rice", price: 1.2, stock: 25, category: "Grains", image: "images/products/White Rice.jpg" },
{ id: 66, name: "Brown Rice", price: 1.8, stock: 20, category: "Grains", image: "images/products/Brown Rice.jpg" },
{ id: 67, name: "Pasta", price: 1.5, stock: 22, category: "Grains", image: "images/products/pasta.jpg" },
{ id: 68, name: "Spaghetti", price: 1.3, stock: 18, category: "Grains", image: "images/products/spaghetti.jpg" },
{ id: 69, name: "Oats", price: 2.0, stock: 16, category: "Grains", image: "images/products/oats.jpg" },
{ id: 70, name: "Quinoa", price: 4.5, stock: 12, category: "Grains", image: "images/products/quinoa.jpg" },
{ id: 71, name: "Cereal", price: 3.5, stock: 15, category: "Grains", image: "images/products/cereal.jpg" },
{ id: 72, name: "Flour", price: 1.8, stock: 20, category: "Grains", image: "images/products/flour.jpg" },

// 🥤 Beverages (10 items)
{ id: 73, name: "Orange Juice", price: 3.0, stock: 15, category: "Beverages", image: "images/products/Orange Juice.jpg" },
{ id: 74, name: "Apple Juice", price: 2.8, stock: 16, category: "Beverages", image: "images/products/Apple Juice.jpg" },
{ id: 75, name: "Coffee", price: 5.0, stock: 12, category: "Beverages", image: "images/products/coffee.jpg" },
{ id: 76, name: "Tea", price: 4.0, stock: 18, category: "Beverages", image: "images/products/tea.jpg" },
{ id: 77, name: "Soda", price: 1.5, stock: 25, category: "Beverages", image: "images/products/soda.jpg" },
{ id: 78, name: "Water", price: 0.8, stock: 30, category: "Beverages", image: "images/products/water.jpg" },
{ id: 79, name: "Energy Drink", price: 2.5, stock: 20, category: "Beverages", image: "images/products/Energy Drink.jpg" },
{ id: 80, name: "Sports Drink", price: 2.2, stock: 18, category: "Beverages", image: "images/products/Sports Drink.jpg" },
{ id: 81, name: "Wine", price: 15.0, stock: 8, category: "Beverages", image: "images/products/wine.jpg" },
{ id: 82, name: "Beer", price: 12.0, stock: 10, category: "Beverages", image: "images/products/beer.jpg" },

// 🍫 Snacks & Sweets (8 items)
{ id: 83, name: "Chocolate Bar", price: 1.5, stock: 25, category: "Snacks", image: "images/products/Chocolate Bar.jpg" },
{ id: 84, name: "Chips", price: 2.0, stock: 22, category: "Snacks", image: "images/products/chips.jpg" },
{ id: 85, name: "Popcorn", price: 1.8, stock: 18, category: "Snacks", image: "images/products/popcorn.jpg" },
{ id: 86, name: "Nuts", price: 3.5, stock: 15, category: "Snacks", image: "images/products/nuts.jpg" },
{ id: 87, name: "Candy", price: 1.2, stock: 30, category: "Snacks", image: "images/products/candy.jpg" },
{ id: 88, name: "Ice Cream", price: 4.5, stock: 12, category: "Snacks", image: "images/products/Ice Cream.jpg" },
{ id: 89, name: "Crackers", price: 2.2, stock: 20, category: "Snacks", image: "images/products/crackers.jpg" },
{ id: 90, name: "Granola Bar", price: 1.8, stock: 24, category: "Snacks", image: "images/products/Granola Bar.jpg" }
];

// Global Variables
let salesData = Array(products.length).fill().map(() => Array(7).fill(0));
let cart = [];
let currentDay = 0;
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let currentCategory = 'all';
let currentSearchTerm = '';
let customerName = '';
let salesHistory = [];
let autoExportEnabled = true; // AUTO-EXPORT ENABLED BY DEFAULT
let currentProductId = null; // For product detail modal

// ============================================
// SCREEN LAYOUT FIX FUNCTION
// ============================================

function fixScreenLayoutForDesktop() {
const screenWidth = window.innerWidth;
const sidebar = document.getElementById('sidebar');

if (!sidebar) return;

// Desktop mode (769px se zyada width)
if (screenWidth > 768) {
// Sidebar ko normal position par lao
sidebar.style.position = 'relative';
sidebar.style.bottom = 'auto';
sidebar.style.width = '280px';
sidebar.style.height = 'auto';
sidebar.style.display = 'block';
sidebar.style.flexDirection = 'column';
sidebar.style.justifyContent = 'flex-start';
sidebar.style.padding = '25px';
sidebar.style.borderRadius = '15px';
sidebar.style.background = 'rgba(255, 255, 255, 0.95)';
sidebar.style.backdropFilter = 'blur(10px)';
sidebar.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
sidebar.style.marginBottom = '25px';
sidebar.style.overflow = 'visible';

// Menu buttons ko fix karo
document.querySelectorAll('.menu-btn').forEach(btn => {
btn.style.width = '100%';
btn.style.padding = '18px';
btn.style.margin = '12px 0';
btn.style.textAlign = 'left';
btn.style.flexDirection = 'row';
btn.style.justifyContent = 'flex-start';
btn.style.gap = '10px';
btn.style.height = 'auto';
btn.style.minHeight = 'auto';
btn.style.maxWidth = 'none';
});

// Main content ko fix karo
const mainContent = document.querySelector('.main-content');
if (mainContent) {
mainContent.style.marginBottom = '0';
mainContent.style.flexDirection = 'row';
}
}
}

// ============================================
// PRODUCT DETAIL MODAL FUNCTIONS
// ============================================

function showProductDetail(productId) {
const product = products[productId];
if (!product) return;

currentProductId = productId;

// Set basic information
document.getElementById('detailProductName').textContent = product.name;
document.getElementById('detailProductCategory').textContent = product.category;
document.getElementById('detailProductPrice').textContent = `$${product.price.toFixed(2)}`;
document.getElementById('detailProductStock').textContent = `In Stock: ${product.stock} units`;
document.getElementById('detailProductImage').src = product.image;

// Set specifications
const details = product.details || getDefaultDetails(product);
document.getElementById('detailType').textContent = details.type;
document.getElementById('detailWeight').textContent = details.weight;
document.getElementById('detailOrigin').textContent = details.origin;
document.getElementById('detailSeason').textContent = details.season;
document.getElementById('detailStorage').textContent = details.storage;

// Set nutrition
document.getElementById('detailCalories').textContent = details.nutrition.calories;
document.getElementById('detailCarbs').textContent = details.nutrition.carbs;
document.getElementById('detailFiber').textContent = details.nutrition.fiber;
document.getElementById('detailVitaminC').textContent = details.nutrition.vitaminC;

// Set benefits
const benefitsList = document.getElementById('detailBenefits');
benefitsList.innerHTML = '';
details.benefits.forEach(benefit => {
const li = document.createElement('li');
li.textContent = benefit;
benefitsList.appendChild(li);
});

// Set usage
const usageContainer = document.getElementById('detailUsage');
usageContainer.innerHTML = '';
details.usage.forEach(use => {
const tag = document.createElement('span');
tag.className = 'usage-tag';
tag.textContent = use;
usageContainer.appendChild(tag);
});

// Set rating
const starsContainer = document.getElementById('detailStars');
starsContainer.innerHTML = '';
const rating = details.rating || 4.0;
const fullStars = Math.floor(rating);
const hasHalfStar = rating % 1 >= 0.5;

for (let i = 0; i < 5; i++) {
const star = document.createElement('span');
if (i < fullStars) {
star.textContent = '★';
} else if (i === fullStars && hasHalfStar) {
star.textContent = '½';
} else {
star.textContent = '☆';
}
starsContainer.appendChild(star);
}

document.getElementById('detailRatingText').textContent = `${rating.toFixed(1)}/5.0`;

// Reset quantity
document.getElementById('detailQuantity').value = 1;

// Show modal
document.getElementById('productDetailModal').style.display = 'block';

// Setup tab switching
setupDetailTabs();
}

function getDefaultDetails(product) {
// Default details for products without specific details
return {
type: "Standard Quality",
weight: "1 kg",
origin: "Pakistan",
season: "Available all year",
storage: "Cool dry place",
nutrition: {
calories: "50-100 kcal",
carbs: "10-20g",
fiber: "2-3g",
vitaminC: "10-20% DV"
},
benefits: [
"Fresh and natural",
"Good for health",
"Rich in nutrients"
],
usage: ["Eat raw", "Cooking", "Various recipes"],
rating: 4.0
};
}

function setupDetailTabs() {
const tabs = document.querySelectorAll('.detail-tab');
const contents = document.querySelectorAll('.detail-content');

tabs.forEach(tab => {
tab.addEventListener('click', function() {
const tabId = this.getAttribute('data-tab');

// Remove active class from all tabs and contents
tabs.forEach(t => t.classList.remove('active'));
contents.forEach(c => c.classList.remove('active'));

// Add active class to clicked tab and corresponding content
this.classList.add('active');
document.getElementById(`${tabId}-content`).classList.add('active');
});
});
}

function closeProductDetail() {
document.getElementById('productDetailModal').style.display = 'none';
currentProductId = null;
}

// ============================================
// MOBILE MENU FUNCTIONS
// ============================================

function updateMobileCartBadge() {
const cartBadge = document.getElementById('cartBadge');
if (cartBadge) {
const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
cartBadge.textContent = totalItems > 9 ? '9+' : totalItems.toString();
cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
}
}

function setupMobileMenu() {
const screenWidth = window.innerWidth;
const sidebar = document.getElementById('sidebar');

if (screenWidth <= 768 && sidebar) {
// Mobile mode
sidebar.classList.add('mobile-visible');
updateMobileCartBadge();
} else if (sidebar) {
// Desktop mode - mobile classes hatao
sidebar.classList.remove('mobile-visible');
}
}

function preventPullToRefresh() {
let touchStartY = 0;

document.addEventListener('touchstart', function(e) {
touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchmove', function(e) {
const touchY = e.touches[0].clientY;
const touchDiff = touchY - touchStartY;

if (touchDiff > 0 && window.scrollY === 0) {
e.preventDefault();
}
}, { passive: false });
}

// ============================================
// INITIALIZE THE APPLICATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
initializeApp();
});

function initializeApp() {
// Detect mobile device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
console.log("Mobile device detected - applying mobile optimizations");
}

// Screen layout fix call karo
fixScreenLayoutForDesktop();

loadProducts();
updateCartDisplay();
updateSalesReport();
updateInventoryDisplay();
setupEventListeners();
setupFormHandlers();
setupCustomerName();
addExportSettings();
showDataStats();
setupMobileMenu();
setupContactForm();

// Window resize par layout fix
window.addEventListener('resize', function() {
fixScreenLayoutForDesktop();
setupMobileMenu();
});

// Mobile-specific initialization
if (isMobile) {
preventPullToRefresh();
}

// Product detail modal event listeners
setupProductDetailEvents();
}

function setupProductDetailEvents() {
// Add to cart from detail modal
const detailAddToCartBtn = document.getElementById('detailAddToCart');
if (detailAddToCartBtn) {
detailAddToCartBtn.addEventListener('click', function() {
if (currentProductId !== null) {
const quantity = parseInt(document.getElementById('detailQuantity').value) || 1;
const product = products[currentProductId];

if (quantity > product.stock) {
showNotification(`Not enough stock! Only ${product.stock} available.`, 'error');
return;
}

addItemToCart(currentProductId, quantity);
showNotification(`✅ ${quantity} x ${product.name} added to cart!`, 'success');
closeProductDetail();
}
});
}

// Close modal when clicking outside
const productDetailModal = document.getElementById('productDetailModal');
if (productDetailModal) {
productDetailModal.addEventListener('click', function(event) {
if (event.target === this) {
closeProductDetail();
}
});
}
}

// ============================================
// EVENT LISTENERS SETUP
// ============================================

function setupEventListeners() {
// Search functionality
const searchInput = document.getElementById('searchInput');
if (searchInput) {
searchInput.addEventListener('input', function(e) {
currentSearchTerm = e.target.value.toLowerCase();
loadProducts(currentCategory);
});

searchInput.addEventListener('change', function(e) {
currentSearchTerm = e.target.value.toLowerCase();
loadProducts(currentCategory);
});
}

// Menu buttons
document.querySelectorAll('.menu-btn').forEach(btn => {
btn.addEventListener('click', function(e) {
e.preventDefault();
const sectionId = this.getAttribute('data-section');
if (sectionId) {
showSection(sectionId);
}
});
});

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
btn.addEventListener('click', function(e) {
e.preventDefault();
const category = this.getAttribute('data-category') || 'all';
filterProducts(category);
});
});

// Add data-category attributes to filter buttons
document.querySelectorAll('.category-filter .filter-btn').forEach((btn, index) => {
const categories = ['all', 'Fruits', 'Vegetables', 'Dairy', 'Bakery', 'Meat', 'Grains', 'Beverages', 'Snacks'];
if (categories[index]) {
btn.setAttribute('data-category', categories[index]);
}
});

// Add to cart button
const addToCartBtn = document.getElementById('addToCartBtn');
if (addToCartBtn) {
addToCartBtn.addEventListener('click', addToCart);
}

// Cart action buttons
document.querySelectorAll('[data-action]').forEach(btn => {
const action = btn.getAttribute('data-action');
btn.addEventListener('click', function() {
if (action === 'checkout') {
showSection('checkout');
} else if (action === 'clear') {
clearCart();
}
});
});

// Payment method toggle
const paymentMethod = document.getElementById('paymentMethod');
if (paymentMethod) {
paymentMethod.addEventListener('change', togglePaymentOptions);
}

// Calculate change
const cashAmount = document.getElementById('cashAmount');
if (cashAmount) {
cashAmount.addEventListener('input', calculateChange);
cashAmount.addEventListener('change', calculateChange);
}

// Process payment
const processPaymentBtn = document.getElementById('processPaymentBtn');
if (processPaymentBtn) {
processPaymentBtn.addEventListener('click', processPayment);
}

// Sales day select
const daySelect = document.getElementById('daySelect');
if (daySelect) {
daySelect.addEventListener('change', updateSalesReport);
}

// Chart button
const chartBtn = document.getElementById('chartBtn');
if (chartBtn) {
chartBtn.addEventListener('click', generateSalesChart);
}

// Customer sales button
const customerSalesBtn = document.getElementById('customerSalesBtn');
if (customerSalesBtn) {
customerSalesBtn.addEventListener('click', viewCustomerSales);
}

// Export all sales button
const exportAllSalesBtn = document.getElementById('exportAllSalesBtn');
if (exportAllSalesBtn) {
exportAllSalesBtn.addEventListener('click', exportAllSalesHistory);
}

// Backup data button
const backupDataBtn = document.getElementById('backupDataBtn');
if (backupDataBtn) {
backupDataBtn.addEventListener('click', backupAllData);
}

// Inventory buttons
const lowStockBtn = document.getElementById('lowStockBtn');
if (lowStockBtn) {
lowStockBtn.addEventListener('click', checkLowStock);
}

const restockAllBtn = document.getElementById('restockAllBtn');
if (restockAllBtn) {
restockAllBtn.addEventListener('click', restockAll);
}

// Print receipt button
const printReceiptBtn = document.getElementById('printReceiptBtn');
if (printReceiptBtn) {
printReceiptBtn.addEventListener('click', printReceipt);
}

// Export button in receipt modal
const exportExcelBtn = document.getElementById('exportExcelBtn');
if (exportExcelBtn) {
exportExcelBtn.addEventListener('click', exportCurrentPurchase);
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
const receiptModal = document.getElementById('receiptModal');
const successModal = document.getElementById('successModal');

if (event.target === receiptModal) {
closeReceipt();
}
if (event.target === successModal) {
closeSuccessModal();
}
});
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

function showSection(sectionId) {
// Hide all sections
document.querySelectorAll('.section').forEach(section => {
section.classList.remove('active');
});

// Remove active class from all menu buttons
document.querySelectorAll('.menu-btn').forEach(btn => {
btn.classList.remove('active');
});

// Show selected section
const targetSection = document.getElementById(sectionId);
if (targetSection) {
targetSection.classList.add('active');

// Activate corresponding button
const activeBtn = document.querySelector(`.menu-btn[data-section="${sectionId}"]`);
if (activeBtn) {
activeBtn.classList.add('active');
}

// Scroll to top on mobile
if (window.innerWidth <= 768) {
window.scrollTo(0, 0);
}

// Show warning when going to checkout without customer name
if (sectionId === 'checkout') {
const nameWarning = document.getElementById('nameWarning');
const customerNameInput = document.getElementById('customerName');
const hasCustomerName = (customerName && customerName.trim() !== '') ||
(customerNameInput && customerNameInput.value.trim() !== '');

if (!hasCustomerName && nameWarning) {
nameWarning.style.display = 'block';
} else if (nameWarning) {
nameWarning.style.display = 'none';
}

if (customerNameInput && (!customerName || customerName.trim() === '')) {
customerNameInput.focus();
}
}

// Update relevant displays
if (sectionId === 'cart' || sectionId === 'checkout') {
updateCartDisplay();
} else if (sectionId === 'sales') {
updateSalesReport();
showDataStats();
} else if (sectionId === 'inventory') {
updateInventoryDisplay();
}
}
}

// ============================================
// PRODUCT MANAGEMENT
// ============================================

function filterProducts(category) {
currentCategory = category;

document.querySelectorAll('.filter-btn').forEach(btn => {
btn.classList.remove('active');
if (btn.getAttribute('data-category') === category) {
btn.classList.add('active');
}
});

loadProducts(category);
}

function loadProducts(category = 'all') {
let filteredProducts = products;

if (category !== 'all') {
filteredProducts = filteredProducts.filter(product => product.category === category);
}

if (currentSearchTerm) {
filteredProducts = filteredProducts.filter(product =>
product.name.toLowerCase().includes(currentSearchTerm) ||
product.category.toLowerCase().includes(currentSearchTerm)
);
}

displayProducts(filteredProducts);
updateProductDropdown(filteredProducts);
}

function displayProducts(productsToDisplay) {
const productsGrid = document.getElementById('productsGrid');

if (!productsGrid) return;

if (productsToDisplay.length === 0) {
productsGrid.innerHTML = `
<div class="no-products">
<h3>No products found</h3>
<p>Try adjusting your search or filter criteria</p>
</div>
`;
return;
}

productsGrid.innerHTML = '';

productsToDisplay.forEach(product => {
const productCard = document.createElement('div');
productCard.className = 'product-card';
productCard.setAttribute('data-product-id', product.id);

productCard.innerHTML = `
<div class="image-container">
<img src="${product.image}" alt="${product.name}" class="product-image"
onerror="this.onerror=null; this.src='https://via.placeholder.com/200x150/007bff/ffffff?text=${encodeURIComponent(product.name)}'; this.classList.add('no-image')">
<div class="image-overlay">View Details</div>
</div>
<h3>${product.name}</h3>
<div class="product-category">${product.category}</div>
<div class="product-price">$${product.price.toFixed(2)}</div>
<div class="product-stock">Stock: ${product.stock}</div>
<button class="quick-add-btn" data-quick-add="${product.id}">Quick Add</button>
`;

productsGrid.appendChild(productCard);
});

// Add event listeners to quick add buttons
document.querySelectorAll('.quick-add-btn').forEach(btn => {
const productId = btn.getAttribute('data-quick-add');
btn.addEventListener('click', (e) => {
e.stopPropagation();
quickAddToCart(parseInt(productId));
});
});

// Add click event to product cards for detail view
document.querySelectorAll('.product-card').forEach(card => {
card.addEventListener('click', function(e) {
// Only trigger if not clicking on quick add button
if (!e.target.classList.contains('quick-add-btn') && !e.target.closest('.quick-add-btn')) {
const productId = this.getAttribute('data-product-id');
showProductDetail(parseInt(productId));
}
});
});

// Add click event to image overlay
document.querySelectorAll('.image-overlay').forEach(overlay => {
overlay.addEventListener('click', function(e) {
e.stopPropagation();
const card = this.closest('.product-card');
if (card) {
const productId = card.getAttribute('data-product-id');
showProductDetail(parseInt(productId));
}
});
});
}

function updateProductDropdown(productsToDisplay) {
const productSelect = document.getElementById('productSelect');
if (!productSelect) return;

productSelect.innerHTML = '<option value="">Select a Product</option>';

productsToDisplay.forEach(product => {
const option = document.createElement('option');
option.value = product.id;
option.textContent = `${product.name} - $${product.price.toFixed(2)}`;
productSelect.appendChild(option);
});
}

// ============================================
// CART MANAGEMENT
// ============================================

function quickAddToCart(productId) {
const product = products[productId];
const quantity = 1;

if (!product) return;

if (quantity > product.stock) {
showNotification(`Not enough stock! Only ${product.stock} available.`, 'error');
return;
}

addItemToCart(productId, quantity);
showNotification(`✅ ${quantity} x ${product.name} added to cart!`, 'success');
}

function addToCart() {
const productSelect = document.getElementById('productSelect');
const quantityInput = document.getElementById('quantityInput');

if (!productSelect || !quantityInput) return;

const productId = parseInt(productSelect.value);
const quantity = parseInt(quantityInput.value);

if (isNaN(productId)) {
showNotification('Please select a product!', 'error');
return;
}

if (isNaN(quantity) || quantity <= 0) {
showNotification('Please enter a valid quantity!', 'error');
return;
}

const product = products[productId];

if (!product) return;

if (quantity > product.stock) {
showNotification(`Not enough stock! Only ${product.stock} available.`, 'error');
return;
}

addItemToCart(productId, quantity);
showNotification(`✅ ${quantity} x ${product.name} added to cart!`, 'success');

productSelect.value = '';
quantityInput.value = '1';
}

function addItemToCart(productId, quantity) {
const existingItem = cart.find(item => item.productId === productId);

if (existingItem) {
existingItem.quantity += quantity;
} else {
cart.push({
productId: productId,
quantity: quantity
});
}

products[productId].stock -= quantity;
salesData[productId][currentDay] += quantity;

updateCartDisplay();
loadProducts(currentCategory);
updateMobileCartBadge();

saveToLocalStorage();
}

function updateCartDisplay() {
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

if (!cartItems || !cartTotal) return;

cartItems.innerHTML = '';
let total = 0;

if (cart.length === 0) {
cartItems.innerHTML = `
<div class="empty-cart">
<h3>🛒 Your cart is empty</h3>
<p>Add some products to get started!</p>
</div>
`;
cartTotal.textContent = '0.00';
updateCheckoutDisplay();
updateMobileCartBadge();
return;
}

cart.forEach((item, index) => {
const product = products[item.productId];
const itemTotal = product.price * item.quantity;
total += itemTotal;

const cartItem = document.createElement('div');
cartItem.className = 'cart-item';
cartItem.setAttribute('data-cart-index', index);
cartItem.innerHTML = `
<div class="item-info">
<strong>${product.name}</strong>
<span>${item.quantity} x $${product.price.toFixed(2)}</span>
</div>
<div class="item-actions">
<span class="item-total">$${itemTotal.toFixed(2)}</span>
<button class="qty-btn minus" data-action="decrease" data-index="${index}">-</button>
<span class="qty-display">${item.quantity}</span>
<button class="qty-btn plus" data-action="increase" data-index="${index}">+</button>
<button class="remove-btn" data-action="remove" data-index="${index}">🗑️</button>
</div>
`;
cartItems.appendChild(cartItem);
});

cartTotal.textContent = total.toFixed(2);
updateCheckoutDisplay();
updateMobileCartBadge();

document.querySelectorAll('.qty-btn, .remove-btn').forEach(btn => {
const action = btn.getAttribute('data-action');
const index = parseInt(btn.getAttribute('data-index'));

btn.addEventListener('click', () => handleCartAction(action, index));
});
}

function handleCartAction(action, index) {
const item = cart[index];
if (!item) return;

switch(action) {
case 'increase':
updateQuantity(index, item.quantity + 1);
break;
case 'decrease':
updateQuantity(index, item.quantity - 1);
break;
case 'remove':
removeFromCart(index);
break;
}
}

function updateQuantity(index, newQuantity) {
if (newQuantity <= 0) {
removeFromCart(index);
return;
}

const item = cart[index];
const product = products[item.productId];
const quantityDifference = newQuantity - item.quantity;

if (quantityDifference > product.stock) {
showNotification(`Not enough stock! Only ${product.stock} available.`, 'error');
return;
}

product.stock -= quantityDifference;
salesData[product.id][currentDay] += quantityDifference;

item.quantity = newQuantity;
updateCartDisplay();
loadProducts(currentCategory);
saveToLocalStorage();
}

function removeFromCart(index) {
const item = cart[index];
const product = products[item.productId];

product.stock += item.quantity;
salesData[product.id][currentDay] -= item.quantity;

cart.splice(index, 1);
updateCartDisplay();
loadProducts(currentCategory);
showNotification('Item removed from cart', 'info');
saveToLocalStorage();
}

function clearCart() {
if (cart.length === 0) {
showNotification('Cart is already empty!', 'info');
return;
}

cart.forEach(item => {
const product = products[item.productId];
product.stock += item.quantity;
salesData[product.id][currentDay] -= item.quantity;
});

cart = [];
updateCartDisplay();
loadProducts(currentCategory);
showNotification('Cart cleared successfully!', 'success');
saveToLocalStorage();
}

// ============================================
// CHECKOUT SYSTEM
// ============================================

function updateCheckoutDisplay() {
const checkoutItems = document.getElementById('checkoutItems');
const subtotalElement = document.getElementById('subtotal');
const discountElement = document.getElementById('discount');
const finalTotalElement = document.getElementById('finalTotal');

if (!checkoutItems || !subtotalElement || !discountElement || !finalTotalElement) return;

checkoutItems.innerHTML = '';
let subtotal = 0;

cart.forEach(item => {
const product = products[item.productId];
const itemTotal = product.price * item.quantity;
subtotal += itemTotal;

const itemElement = document.createElement('div');
itemElement.className = 'cart-item';
itemElement.innerHTML = `
<span>${product.name} (${item.quantity} x $${product.price.toFixed(2)})</span>
<span>$${itemTotal.toFixed(2)}</span>
`;
checkoutItems.appendChild(itemElement);
});

const discount = calculateDiscount(subtotal);
const finalTotal = subtotal - discount;

subtotalElement.textContent = subtotal.toFixed(2);
discountElement.textContent = discount.toFixed(2);
finalTotalElement.textContent = finalTotal.toFixed(2);

calculateChange();
}

function calculateDiscount(total) {
if (total > 50) return total * 0.15;
if (total > 25) return total * 0.10;
if (total > 15) return total * 0.05;
return 0;
}

function togglePaymentOptions() {
const paymentMethod = document.getElementById('paymentMethod');
if (!paymentMethod) return;

const method = paymentMethod.value;

document.getElementById('cashPayment').style.display = 'none';
document.getElementById('cardPayment').style.display = 'none';
document.getElementById('mobilePayment').style.display = 'none';

const selectedOption = document.getElementById(method + 'Payment');
if (selectedOption) {
selectedOption.style.display = 'block';
}
}

function calculateChange() {
const cashAmount = document.getElementById('cashAmount');
const finalTotal = document.getElementById('finalTotal');
const changeAmount = document.getElementById('changeAmount');

if (!cashAmount || !finalTotal || !changeAmount) return;

const cash = parseFloat(cashAmount.value) || 0;
const total = parseFloat(finalTotal.textContent) || 0;
const change = cash - total;

changeAmount.textContent = Math.max(0, change).toFixed(2);
}

function processPayment() {
if (cart.length === 0) {
showNotification('Your cart is empty!', 'error');
return;
}

// Customer name validation
const customerNameInput = document.getElementById('customerName');
let customerNameValue = '';

if (customerNameInput && customerNameInput.value.trim() !== '') {
customerNameValue = customerNameInput.value.trim();
} else if (customerName && customerName.trim() !== '') {
customerNameValue = customerName;
} else {
showNotification('❌ PLEASE ENTER CUSTOMER NAME! Go to "Customer Information" section and enter name.', 'error');

const nameWarning = document.getElementById('nameWarning');
if (nameWarning) {
nameWarning.style.display = 'block';
}

if (customerNameInput) {
customerNameInput.focus();
customerNameInput.style.border = '2px solid #dc3545';
customerNameInput.style.backgroundColor = '#ffe6e6';

setTimeout(() => {
customerNameInput.style.border = '';
customerNameInput.style.backgroundColor = '';
}, 3000);
}

return;
}

// Save the customer name
customerName = customerNameValue;

const savedNameSpan = document.getElementById('savedCustomerName');
const customerDisplay = document.getElementById('customerDisplay');

if (savedNameSpan) savedNameSpan.textContent = customerName;
if (customerDisplay) customerDisplay.style.display = 'flex';

localStorage.setItem('groceryCustomerName', customerName);

const nameWarning = document.getElementById('nameWarning');
if (nameWarning) {
nameWarning.style.display = 'none';
}

const paymentMethod = document.getElementById('paymentMethod');
const finalTotal = document.getElementById('finalTotal');

if (!paymentMethod || !finalTotal) return;

const method = paymentMethod.value;
const total = parseFloat(finalTotal.textContent);

if (method === 'cash') {
const cashAmount = document.getElementById('cashAmount');
if (!cashAmount) return;

const cash = parseFloat(cashAmount.value) || 0;
if (cash < total) {
showNotification('Please enter sufficient cash amount!', 'error');
return;
}
} else if (method === 'card') {
const cardNumber = document.getElementById('cardNumber');
const expiryDate = document.getElementById('expiryDate');
const cvv = document.getElementById('cvv');

if (!cardNumber || !expiryDate || !cvv) return;

if (!cardNumber.value || !expiryDate.value || !cvv.value) {
showNotification('Please fill all card details!', 'error');
return;
}
}

recordSaleWithCustomer();
autoExportCurrentPurchase();
generateReceipt();
cart = [];
updateCartDisplay();
showSection('products');
showNotification(`✅ Thank you ${customerName}! Purchase saved to Excel automatically!`, 'success');
saveToLocalStorage();
}

function calculateSubtotal() {
let subtotal = 0;
cart.forEach(item => {
const product = products[item.productId];
subtotal += product.price * item.quantity;
});
return subtotal;
}

function recordSaleWithCustomer() {
const saleRecord = {
customerName: customerName,
date: new Date().toISOString(),
day: days[currentDay],
items: cart.map(item => ({
productId: item.productId,
productName: products[item.productId].name,
category: products[item.productId].category,
quantity: item.quantity,
price: products[item.productId].price
})),
subtotal: calculateSubtotal(),
discount: calculateDiscount(calculateSubtotal()),
total: parseFloat(document.getElementById('finalTotal').textContent),
transactionId: `TXN-${String(salesHistory.length + 1).padStart(4, '0')}`,
paymentMethod: document.getElementById('paymentMethod')?.value || 'Cash'
};

salesHistory.push(saleRecord);

cart.forEach(item => {
salesData[item.productId][currentDay] += item.quantity;
});

try {
localStorage.setItem('grocerySalesHistory', JSON.stringify(salesHistory));
localStorage.setItem('grocerySalesData', JSON.stringify(salesData));
} catch (e) {
console.log('Error saving sales history:', e);
}
}

// ============================================
// EXCEL EXPORT SYSTEM
// ============================================

function showExportStatus(show) {
const exportStatus = document.getElementById('exportStatus');
if (exportStatus) {
exportStatus.style.display = show ? 'flex' : 'none';
}
}

function autoExportCurrentPurchase() {
if (cart.length === 0 || !customerName) return;

showExportStatus(true);

setTimeout(() => {
const csvContent = generatePurchaseCSV();
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const filename = `Grocery_Purchase_${customerName}_${timestamp}.csv`;

downloadFile(csvContent, filename, 'text/csv');

addToMasterDatabase();

console.log(`✅ Purchase auto-saved to: ${filename}`);
showExportStatus(false);
}, 1000);
}

function exportCurrentPurchase() {
if (cart.length === 0) {
showNotification('No purchase to export!', 'error');
return;
}

showExportStatus(true);

setTimeout(() => {
const csvContent = generatePurchaseCSV();
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const filename = `Grocery_Purchase_${customerName || 'Customer'}_${timestamp}.csv`;

downloadFile(csvContent, filename, 'text/csv');
showNotification(`✅ Purchase exported to Excel!`, 'success');
showExportStatus(false);
}, 1000);
}

function generatePurchaseCSV() {
let csvContent = "Transaction ID,Customer Name,Date,Time,Day,Payment Method,Product,Category,Quantity,Unit Price,Total Price,Subtotal,Discount,Final Total\n";

const subtotal = calculateSubtotal();
const discount = calculateDiscount(subtotal);
const finalTotal = subtotal - discount;
const transactionId = `TXN-${String(salesHistory.length + 1).padStart(4, '0')}`;

cart.forEach(item => {
const product = products[item.productId];
const itemTotal = product.price * item.quantity;

csvContent += `"${transactionId}",`;
csvContent += `"${customerName || 'Guest'}",`;
csvContent += `"${new Date().toLocaleDateString()}",`;
csvContent += `"${new Date().toLocaleTimeString()}",`;
csvContent += `"${days[currentDay]}",`;
csvContent += `"${document.getElementById('paymentMethod')?.value || 'Cash'}",`;
csvContent += `"${product.name}",`;
csvContent += `"${product.category}",`;
csvContent += `${item.quantity},`;
csvContent += `$${product.price.toFixed(2)},`;
csvContent += `$${itemTotal.toFixed(2)},`;
csvContent += `$${subtotal.toFixed(2)},`;
csvContent += `$${discount.toFixed(2)},`;
csvContent += `$${finalTotal.toFixed(2)}\n`;
});

csvContent += `\n\nSUMMARY,,,,,,,,,,,,"Subtotal: $${subtotal.toFixed(2)}","Discount: $${discount.toFixed(2)}","Final Total: $${finalTotal.toFixed(2)}"`;
csvContent += `\n"Export Date: ${new Date().toLocaleString()}"`;

return csvContent;
}

function addToMasterDatabase() {
let masterData = JSON.parse(localStorage.getItem('groceryMasterDatabase') || '[]');

const purchaseRecord = {
transactionId: `TXN-${String(salesHistory.length + 1).padStart(4, '0')}`,
customerName: customerName,
date: new Date().toISOString(),
day: days[currentDay],
paymentMethod: document.getElementById('paymentMethod')?.value || 'Cash',
items: cart.map(item => ({
product: products[item.productId].name,
category: products[item.productId].category,
quantity: item.quantity,
unitPrice: products[item.productId].price,
totalPrice: products[item.productId].price * item.quantity
})),
subtotal: calculateSubtotal(),
discount: calculateDiscount(calculateSubtotal()),
finalTotal: parseFloat(document.getElementById('finalTotal').textContent)
};

masterData.push(purchaseRecord);

try {
localStorage.setItem('groceryMasterDatabase', JSON.stringify(masterData));
} catch (e) {
console.log('Error saving to master database:', e);
}
}

function exportAllSalesHistory() {
if (salesHistory.length === 0) {
showNotification('No sales history found!', 'info');
return;
}

showExportStatus(true);

setTimeout(() => {
let csvContent = "Transaction ID,Customer Name,Date,Time,Day,Payment Method,Product,Category,Quantity,Unit Price,Total Price\n";

salesHistory.forEach((sale, index) => {
sale.items.forEach(item => {
csvContent += `"${sale.transactionId || `TXN-${String(index + 1).padStart(4, '0')}`}",`;
csvContent += `"${sale.customerName}",`;
csvContent += `"${new Date(sale.date).toLocaleDateString()}",`;
csvContent += `"${new Date(sale.date).toLocaleTimeString()}",`;
csvContent += `"${sale.day}",`;
csvContent += `"${sale.paymentMethod || 'Cash'}",`;
csvContent += `"${item.productName}",`;
csvContent += `"${item.category}",`;
csvContent += `${item.quantity},`;
csvContent += `$${item.price.toFixed(2)},`;
csvContent += `$${(item.quantity * item.price).toFixed(2)}\n`;
});
});

const totalCustomers = [...new Set(salesHistory.map(s => s.customerName))].length;
const totalRevenue = salesHistory.reduce((sum, sale) => sum + sale.total, 0);

csvContent += `\n\nSALES SUMMARY\n`;
csvContent += `Total Customers: ${totalCustomers}\n`;
csvContent += `Total Transactions: ${salesHistory.length}\n`;
csvContent += `Total Revenue: $${totalRevenue.toFixed(2)}\n`;
csvContent += `Export Date: ${new Date().toLocaleString()}\n`;

const filename = `Complete_Sales_History_${new Date().toISOString().slice(0, 10)}.csv`;

downloadFile(csvContent, filename, 'text/csv');
showNotification(`✅ All sales history exported! ${salesHistory.length} transactions`, 'success');
showExportStatus(false);
}, 1000);
}

function backupAllData() {
showExportStatus(true);

setTimeout(() => {
let csvContent = "DATA TYPE,Timestamp,Details\n";

csvContent += `"Sales History","${new Date().toISOString()}","${salesHistory.length} transactions"\n`;
csvContent += `"Products","${new Date().toISOString()}","${products.length} products"\n`;
csvContent += `"Settings","${new Date().toISOString()}","Auto-export: ${autoExportEnabled ? 'ON' : 'OFF'}"\n`;

const uniqueCustomers = [...new Set(salesHistory.map(s => s.customerName))];
csvContent += `"Customers","${new Date().toISOString()}","${uniqueCustomers.length} unique customers"\n`;

csvContent += `\n\nDETAILED SALES DATA\n`;
csvContent += "Customer,Date,Total,Items Count\n";

salesHistory.forEach(sale => {
csvContent += `"${sale.customerName}","${new Date(sale.date).toLocaleDateString()}",$${sale.total.toFixed(2)},${sale.items.length}\n`;
});

const filename = `Grocery_Store_Backup_${new Date().toISOString().slice(0, 10)}.csv`;

downloadFile(csvContent, filename, 'text/csv');
showNotification('✅ Complete backup created!', 'success');
showExportStatus(false);
}, 1000);
}

function downloadFile(content, filename, mimeType) {
const blob = new Blob([content], { type: mimeType });
const link = document.createElement("a");

if (link.download !== undefined) {
const url = URL.createObjectURL(blob);
link.setAttribute("href", url);
link.setAttribute("download", filename);
link.style.visibility = 'hidden';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}
}

function addExportSettings() {
const settingsHTML = `
<div class="settings-section">
<h3>⚙️ Excel Export Settings</h3>
<div class="setting-item">
<label>
<input type="checkbox" id="autoExportCheckbox" checked>
✅ <strong>AUTO-SAVE:</strong> Save every purchase to Excel automatically
</label>
<small style="display: block; margin-left: 28px; color: #666;">
Each purchase creates a separate Excel file. No questions asked!
</small>
</div>
<div class="data-stats">
<div class="stat-card">
<h4>Total Purchases</h4>
<div class="stat-value">${salesHistory.length}</div>
</div>
<div class="stat-card">
<h4>Unique Customers</h4>
<div class="stat-value">${[...new Set(salesHistory.map(s => s.customerName))].length}</div>
</div>
<div class="stat-card">
<h4>Total Revenue</h4>
<div class="stat-value">$${salesHistory.reduce((sum, sale) => sum + sale.total, 0).toFixed(2)}</div>
</div>
</div>
</div>
`;

const inventoryList = document.getElementById('inventoryList');
if (inventoryList) {
inventoryList.insertAdjacentHTML('beforebegin', settingsHTML);

const autoExportCheckbox = document.getElementById('autoExportCheckbox');
if (autoExportCheckbox) {
autoExportCheckbox.checked = localStorage.getItem('autoExportEnabled') !== 'false';
autoExportEnabled = autoExportCheckbox.checked;

autoExportCheckbox.addEventListener('change', function() {
autoExportEnabled = this.checked;
localStorage.setItem('autoExportEnabled', this.checked);
showNotification(`Auto-export ${this.checked ? 'ENABLED' : 'DISABLED'}`, 'info');
});
}
}
}

// ============================================
// CUSTOMER NAME MANAGEMENT
// ============================================

function setupCustomerName() {
const saveBtn = document.getElementById('saveCustomerBtn');
const changeBtn = document.getElementById('changeCustomerBtn');
const customerNameInput = document.getElementById('customerName');

if (saveBtn) {
saveBtn.addEventListener('click', saveCustomerName);
}

if (changeBtn) {
changeBtn.addEventListener('click', changeCustomerName);
}

if (customerNameInput) {
customerNameInput.addEventListener('keypress', function(e) {
if (e.key === 'Enter') {
saveCustomerName();
}
});

customerNameInput.addEventListener('change', function() {
const name = this.value.trim();
if (name !== '') {
customerName = name;
localStorage.setItem('groceryCustomerName', customerName);

const savedNameSpan = document.getElementById('savedCustomerName');
const customerDisplay = document.getElementById('customerDisplay');

if (savedNameSpan) savedNameSpan.textContent = customerName;
if (customerDisplay) customerDisplay.style.display = 'flex';

const nameWarning = document.getElementById('nameWarning');
if (nameWarning) {
nameWarning.style.display = 'none';
}
}
});

customerNameInput.addEventListener('input', function() {
const nameWarning = document.getElementById('nameWarning');
if (nameWarning && this.value.trim() !== '') {
nameWarning.style.display = 'none';
}
});
}

loadCustomerName();
}

function saveCustomerName() {
const customerNameInput = document.getElementById('customerName');
const customerDisplay = document.getElementById('customerDisplay');
const savedNameSpan = document.getElementById('savedCustomerName');

if (!customerNameInput || !customerDisplay || !savedNameSpan) return;

const name = customerNameInput.value.trim();

if (name === '') {
showNotification('Please enter customer name!', 'error');
return;
}

customerName = name;

savedNameSpan.textContent = name;
customerDisplay.style.display = 'flex';
customerNameInput.value = '';

localStorage.setItem('groceryCustomerName', customerName);

const nameWarning = document.getElementById('nameWarning');
if (nameWarning) {
nameWarning.style.display = 'none';
}

showNotification(`Customer name saved: ${name}`, 'success');
}

function changeCustomerName() {
const customerDisplay = document.getElementById('customerDisplay');
const customerNameInput = document.getElementById('customerName');

if (customerDisplay) {
customerDisplay.style.display = 'none';
}

if (customerNameInput) {
customerNameInput.value = '';
customerNameInput.focus();
}

customerName = '';
localStorage.removeItem('groceryCustomerName');
}

function loadCustomerName() {
try {
const savedName = localStorage.getItem('groceryCustomerName');
if (savedName) {
customerName = savedName;
const savedNameSpan = document.getElementById('savedCustomerName');
const customerDisplay = document.getElementById('customerDisplay');

if (savedNameSpan) {
savedNameSpan.textContent = savedName;
}

if (customerDisplay) {
customerDisplay.style.display = 'flex';
}
}
} catch (e) {
console.log('Error loading customer name:', e);
}
}

// ============================================
// SALES REPORT SYSTEM
// ============================================

function updateSalesReport() {
const daySelect = document.getElementById('daySelect');
const salesReport = document.getElementById('salesReport');

if (!daySelect || !salesReport) return;

currentDay = parseInt(daySelect.value);

let reportHTML = `
<h3>Sales Report - ${days[currentDay]}</h3>
<table class="sales-table">
<tr>
<th>Product</th>
<th>Category</th>
<th>Monday</th>
<th>Tuesday</th>
<th>Wednesday</th>
<th>Thursday</th>
<th>Friday</th>
<th>Saturday</th>
<th>Sunday</th>
<th>Total</th>
</tr>
`;

let grandTotal = 0;

products.forEach((product, index) => {
const productTotal = salesData[index].reduce((sum, sales) => sum + sales, 0);
grandTotal += productTotal;

reportHTML += `
<tr>
<td>${product.name}</td>
<td>${product.category}</td>
${salesData[index].map((sales, dayIndex) =>
`<td class="${dayIndex === currentDay ? 'highlight-day' : ''}">${sales}</td>`
).join('')}
<td><strong>${productTotal}</strong></td>
</tr>
`;
});

reportHTML += `
<tr class="grand-total">
<td colspan="8"><strong>Grand Total</strong></td>
<td colspan="2"><strong>${grandTotal}</strong></td>
</tr>
</table>
`;

salesReport.innerHTML = reportHTML;
}

function generateSalesChart() {
showNotification('Chart feature coming soon!', 'info');
}

// ============================================
// CUSTOMER SALES FUNCTIONS
// ============================================

function viewCustomerSales() {
if (salesHistory.length === 0) {
showNotification('No sales history found!', 'info');
return;
}

let report = '<h3>📋 Customer Sales History</h3>';

const salesByCustomer = {};
salesHistory.forEach(sale => {
if (!salesByCustomer[sale.customerName]) {
salesByCustomer[sale.customerName] = {
totalSales: 0,
totalAmount: 0,
purchases: []
};
}
salesByCustomer[sale.customerName].totalSales++;
salesByCustomer[sale.customerName].totalAmount += sale.total;
salesByCustomer[sale.customerName].purchases.push(sale);
});

report += '<div class="customer-sales">';

Object.keys(salesByCustomer).forEach(customer => {
report += `
<div class="customer-sale-card">
<h4>👤 ${customer}</h4>
<p>Total Purchases: ${salesByCustomer[customer].totalSales}</p>
<p>Total Spent: $${salesByCustomer[customer].totalAmount.toFixed(2)}</p>
<button onclick="viewCustomerDetails('${customer}')" class="view-details-btn">View Details</button>
</div>
`;
});

report += '</div>';

document.getElementById('salesReport').innerHTML = report;
}

function viewCustomerDetails(customerName) {
const customerSales = salesHistory.filter(sale => sale.customerName === customerName);

let details = `<h3>🛍️ Purchase History: ${customerName}</h3>`;
details += '<div class="purchase-history">';

customerSales.forEach((sale, index) => {
details += `
<div class="purchase-card">
<p><strong>Purchase #${index + 1}</strong></p>
<p>Date: ${new Date(sale.date).toLocaleDateString()}</p>
<p>Day: ${sale.day}</p>
<p>Items: ${sale.items.length}</p>
<p>Total: $${sale.total.toFixed(2)}</p>
<button onclick="viewPurchaseDetails(${index}, '${customerName}')" class="view-items-btn">View Items</button>
</div>
`;
});

details += '</div>';

document.getElementById('salesReport').innerHTML = details;
}

function viewPurchaseDetails(purchaseIndex, customerName) {
const customerSales = salesHistory.filter(sale => sale.customerName === customerName);
const purchase = customerSales[purchaseIndex];

if (!purchase) return;

let details = `<h3>🛒 Purchase Details: ${customerName} - Purchase #${purchaseIndex + 1}</h3>`;
details += `<p><strong>Date:</strong> ${new Date(purchase.date).toLocaleString()}</p>`;
details += `<p><strong>Day:</strong> ${purchase.day}</p>`;
details += '<table class="sales-table">';
details += '<tr><th>Item</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';

purchase.items.forEach(item => {
const itemTotal = item.quantity * item.price;
details += `
<tr>
<td>${item.productName}</td>
<td>${item.quantity}</td>
<td>$${item.price.toFixed(2)}</td>
<td>$${itemTotal.toFixed(2)}</td>
</tr>
`;
});

details += `
<tr class="grand-total">
<td colspan="3"><strong>Subtotal</strong></td>
<td><strong>$${purchase.subtotal.toFixed(2)}</strong></td>
</tr>
<tr>
<td colspan="3"><strong>Discount</strong></td>
<td><strong>-$${purchase.discount.toFixed(2)}</strong></td>
</tr>
<tr class="grand-total">
<td colspan="3"><strong>Final Total</strong></td>
<td><strong>$${purchase.total.toFixed(2)}</strong></td>
</tr>
</table>`;

details += `<button onclick="viewCustomerDetails('${customerName}')" class="back-btn">Back to Customer History</button>`;

document.getElementById('salesReport').innerHTML = details;
}

// ============================================
// INVENTORY MANAGEMENT
// ============================================

function updateInventoryDisplay() {
const inventoryList = document.getElementById('inventoryList');
if (!inventoryList) return;

let inventoryHTML = `
<h3>Current Inventory Status</h3>
<table class="sales-table">
<tr>
<th>Product</th>
<th>Category</th>
<th>Price</th>
<th>Stock</th>
<th>Status</th>
<th>Action</th>
</tr>
`;

products.forEach(product => {
const status = product.stock < 5 ? 'Low Stock' : 'In Stock';
const statusClass = product.stock < 5 ? 'low-stock' : '';
const restockButton = product.stock < 10 ?
`<button class="restock-item-btn" data-restock="${product.id}">Restock</button>` :
'<span>✓</span>';

inventoryHTML += `
<tr>
<td>${product.name}</td>
<td>${product.category}</td>
<td>$${product.price.toFixed(2)}</td>
<td>${product.stock}</td>
<td class="${statusClass}">${status}</td>
<td>${restockButton}</td>
</tr>
`;
});

inventoryHTML += `</table>`;
inventoryList.innerHTML = inventoryHTML;

document.querySelectorAll('.restock-item-btn').forEach(btn => {
const productId = btn.getAttribute('data-restock');
btn.addEventListener('click', () => restockProduct(parseInt(productId)));
});
}

function checkLowStock() {
const lowStockProducts = products.filter(product => product.stock < 5);

if (lowStockProducts.length === 0) {
showNotification('✅ All products have sufficient stock!', 'success');
} else {
let alertMessage = '⚠️ Low Stock Alert:\n';
lowStockProducts.forEach(product => {
alertMessage += `${product.name}: Only ${product.stock} left!\n`;
});

showNotification(alertMessage, 'error');

if (lowStockProducts.length <= 3) {
showNotification(`Low stock: ${lowStockProducts.map(p => p.name).join(', ')}`, 'error');
}
}
}

function restockProduct(productId) {
products[productId].stock += 20;
updateInventoryDisplay();
showNotification(`✅ ${products[productId].name} restocked to ${products[productId].stock}`, 'success');
saveToLocalStorage();
}

function restockAll() {
products.forEach(product => {
if (product.stock < 10) {
product.stock += 20;
}
});
updateInventoryDisplay();
showNotification('✅ All low-stock items have been restocked!', 'success');
saveToLocalStorage();
}

// ============================================
// FORM HANDLING
// ============================================

function setupFormHandlers() {
const complaintForm = document.getElementById('complaintForm');
if (complaintForm) {
complaintForm.addEventListener('submit', function(e) {
e.preventDefault();

const formData = {
name: document.getElementById('userName').value,
email: document.getElementById('userEmail').value,
phone: document.getElementById('userPhone').value,
type: document.getElementById('queryType').value,
subject: document.getElementById('subject').value,
message: document.getElementById('message').value,
urgency: document.getElementById('urgency').value,
timestamp: new Date().toISOString()
};

simulateFormSubmission('complaint', formData);

let responseTime = '24 hours';
if (formData.urgency === 'high') responseTime = '12 hours';
if (formData.type === 'technical') responseTime = '12 hours';

showSuccessModal(`Thank you ${formData.name}! Your ${formData.type} has been submitted successfully. We'll respond within ${responseTime}.`);

this.reset();
});
}
}

function setupContactForm() {
const messageTextarea = document.getElementById('contactMessage');
const charCountSpan = document.getElementById('charCount');

if (messageTextarea && charCountSpan) {
messageTextarea.addEventListener('input', function() {
const length = this.value.length;
charCountSpan.textContent = length;

if (length > 450) {
charCountSpan.style.color = '#dc3545';
} else if (length > 400) {
charCountSpan.style.color = '#ffc107';
} else {
charCountSpan.style.color = '#28a745';
}
});

charCountSpan.textContent = messageTextarea.value.length;
}

const quickContactForm = document.getElementById('quickContactForm');
if (quickContactForm) {
quickContactForm.addEventListener('submit', function(e) {
e.preventDefault();

const name = document.getElementById('contactName').value;
const email = document.getElementById('contactEmail').value;
const phone = document.getElementById('contactPhone').value;
const subject = document.getElementById('contactSubject').value;
const message = document.getElementById('contactMessage').value;

if (!name || !email || !subject || !message) {
showNotification('Please fill all required fields!', 'error');
return;
}

simulateFormSubmission('enhanced-contact', {
name: name,
email: email,
phone: phone,
subject: subject,
message: message,
timestamp: new Date().toISOString()
});

showSuccessModal(`Thank you ${name}! Your message has been sent successfully. We'll respond within 24 hours.`);

this.reset();
if (charCountSpan) {
charCountSpan.textContent = '0';
charCountSpan.style.color = '#28a745';
}
});
}
}

function simulateFormSubmission(formType, data) {
console.log(`Form Submitted (${formType}):`, data);
}

function showSuccessModal(message) {
const successMessage = document.getElementById('successMessage');
const successModal = document.getElementById('successModal');

if (successMessage && successModal) {
successMessage.textContent = message;
successModal.style.display = 'block';
}
}

function closeSuccessModal() {
const successModal = document.getElementById('successModal');
if (successModal) {
successModal.style.display = 'none';
}
}

// ============================================
// RECEIPT FUNCTIONS
// ============================================

function generateReceipt() {
const receiptContent = document.getElementById('receiptContent');
if (!receiptContent) return;

let receiptHTML = `
<div class="receipt-header">
<h2>🛒 Super Grocery Store</h2>
<p>Your Trusted Shopping Partner</p>
</div>
<div class="receipt-info">
<p><strong>Customer:</strong> ${customerName || 'Guest'}</p>
<p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
<p><strong>Time:</strong> ${new Date().toLocaleTimeString()}</p>
<p><strong>Day:</strong> ${days[currentDay]}</p>
<p><strong>Transaction ID:</strong> TXN-${String(salesHistory.length + 1).padStart(4, '0')}</p>
</div>
<hr>
<div class="receipt-items">
<table style="width: 100%;">
`;

let subtotal = 0;
cart.forEach(item => {
const product = products[item.productId];
const itemTotal = product.price * item.quantity;
subtotal += itemTotal;
receiptHTML += `
<tr>
<td>${product.name} (${item.quantity} x $${product.price.toFixed(2)})</td>
<td style="text-align: right;">$${itemTotal.toFixed(2)}</td>
</tr>
`;
});

const discount = calculateDiscount(subtotal);
const finalTotal = subtotal - discount;

receiptHTML += `
</table>
</div>
<hr>
<div class="receipt-totals">
<p>Subtotal: $${subtotal.toFixed(2)}</p>
<p>Discount: -$${discount.toFixed(2)}</p>
<p><strong>Final Total: $${finalTotal.toFixed(2)}</strong></p>
</div>
<hr>
<div class="receipt-export-reminder">
<p style="text-align: center; color: #28a745; font-weight: 600;">
💾 Purchase automatically saved to Excel file!
</p>
<p style="text-align: center; color: #666; font-size: 0.9em;">
File: Grocery_Purchase_${customerName}_${new Date().toISOString().replace(/[:.]/g, '-')}.csv
</p>
</div>
<div class="receipt-footer">
<p style="text-align: center;">Thank you for shopping with us, ${customerName || 'Valued Customer'}! 🎉</p>
<p style="text-align: center; font-size: 0.9em; color: #666;">Please visit again!</p>
</div>
`;

receiptContent.innerHTML = receiptHTML;
document.getElementById('receiptModal').style.display = 'block';
}

function closeReceipt() {
const modal = document.getElementById('receiptModal');
if (modal) {
modal.style.display = 'none';
}
}

function printReceipt() {
const receiptContent = document.getElementById('receiptContent');
if (!receiptContent) return;

const printContent = receiptContent.innerHTML;
const originalContent = document.body.innerHTML;

document.body.innerHTML = `
<html>
<head>
<title>Receipt - Super Grocery Store</title>
<style>
body { font-family: Arial, sans-serif; padding: 20px; }
.receipt-header { text-align: center; margin-bottom: 20px; }
.receipt-info { margin-bottom: 15px; }
.receipt-totals { margin-top: 15px; }
.receipt-footer { margin-top: 20px; text-align: center; }
hr { border: none; border-top: 1px solid #ccc; margin: 10px 0; }
table { width: 100%; }
@media print {
body { padding: 0; }
}
</style>
</head>
<body>${printContent}</body>
</html>
`;

window.print();
document.body.innerHTML = originalContent;
initializeApp();
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function showNotification(message, type = 'info') {
const notification = document.createElement('div');
notification.className = `notification ${type}`;
notification.innerHTML = `
<span>${message}</span>
<button class="notification-close">×</button>
`;

if (!document.querySelector('#notification-styles')) {
const styles = document.createElement('style');
styles.id = 'notification-styles';
styles.textContent = `
.notification {
position: fixed;
top: 20px;
right: 20px;
padding: 15px 20px;
border-radius: 8px;
color: white;
z-index: 10000;
max-width: 300px;
box-shadow: 0 4px 12px rgba(0,0,0,0.15);
animation: slideIn 0.3s ease;
display: flex;
align-items: center;
justify-content: space-between;
}
.notification.success { background: #28a745; }
.notification.error { background: #dc3545; }
.notification.info { background: #17a2b8; }
.notification button {
background: none;
border: none;
color: white;
font-size: 18px;
cursor: pointer;
margin-left: 10px;
padding: 0;
width: 24px;
height: 24px;
display: flex;
align-items: center;
justify-content: center;
}
@keyframes slideIn {
from { transform: translateX(100%); opacity: 0; }
to { transform: translateX(0); opacity: 1; }
}
@keyframes slideOut {
from { transform: translateX(0); opacity: 1; }
to { transform: translateX(100%); opacity: 0; }
}
@media (max-width: 768px) {
.notification {
top: 10px;
right: 10px;
left: 10px;
max-width: none;
}
}
`;
document.head.appendChild(styles);
}

document.body.appendChild(notification);

notification.querySelector('.notification-close').addEventListener('click', function() {
notification.style.animation = 'slideOut 0.3s ease';
setTimeout(() => {
if (notification.parentElement) {
notification.remove();
}
}, 300);
});

setTimeout(() => {
if (notification.parentElement) {
notification.style.animation = 'slideOut 0.3s ease';
setTimeout(() => {
if (notification.parentElement) {
notification.remove();
}
}, 300);
}
}, 3000);
}

// ============================================
// LOCAL STORAGE FUNCTIONS
// ============================================

function saveToLocalStorage() {
try {
localStorage.setItem('groceryCart', JSON.stringify(cart));
localStorage.setItem('grocerySalesData', JSON.stringify(salesData));
localStorage.setItem('groceryProducts', JSON.stringify(products));
localStorage.setItem('groceryCurrentDay', currentDay.toString());
localStorage.setItem('groceryCustomerName', customerName);
localStorage.setItem('grocerySalesHistory', JSON.stringify(salesHistory));
localStorage.setItem('groceryMasterDatabase', JSON.stringify(
JSON.parse(localStorage.getItem('groceryMasterDatabase') || '[]')
));
localStorage.setItem('autoExportEnabled', autoExportEnabled);
} catch (e) {
console.log('Local storage error:', e);
}
}

function loadFromLocalStorage() {
try {
const savedCart = localStorage.getItem('groceryCart');
const savedSales = localStorage.getItem('grocerySalesData');
const savedProducts = localStorage.getItem('groceryProducts');
const savedDay = localStorage.getItem('groceryCurrentDay');
const savedName = localStorage.getItem('groceryCustomerName');
const savedHistory = localStorage.getItem('grocerySalesHistory');
const savedAutoExport = localStorage.getItem('autoExportEnabled');

if (savedCart) cart = JSON.parse(savedCart);
if (savedSales) salesData = JSON.parse(savedSales);
if (savedProducts) {
const parsedProducts = JSON.parse(savedProducts);
if (parsedProducts.length === products.length) {
products.forEach((product, index) => {
if (parsedProducts[index]) {
product.stock = parsedProducts[index].stock || product.stock;
}
});
}
}
if (savedDay) currentDay = parseInt(savedDay);
if (savedName) customerName = savedName;
if (savedHistory) salesHistory = JSON.parse(savedHistory);
if (savedAutoExport !== null) autoExportEnabled = savedAutoExport === 'true';
} catch (e) {
console.log('Local storage load error:', e);
}
}

// Load from localStorage on startup
loadFromLocalStorage();

// Form notification styles
const formNotificationStyles = `
.form-notification {
padding: 15px 20px;
border-radius: 8px;
color: white;
margin-bottom: 20px;
position: relative;
animation: slideDown 0.3s ease;
}
.form-notification.success { background: #28a745; }
.form-notification.error { background: #dc3545; }
.form-notification.info { background: #17a2b8; }
.form-notification button {
background: none;
border: none;
color: white;
font-size: 18px;
cursor: pointer;
position: absolute;
right: 10px;
top: 50%;
transform: translateY(-50%);
}
@keyframes slideDown {
from { transform: translateY(-20px); opacity: 0; }
to { transform: translateY(0); opacity: 1; }
}
`;

if (!document.querySelector('#form-notification-styles')) {
const styles = document.createElement('style');
styles.id = 'form-notification-styles';
styles.textContent = formNotificationStyles;
document.head.appendChild(styles);
}

function showDataStats() {
// Stats are shown in settings section
}

// ============================================
// FINAL INITIALIZATION
// ============================================

// Close modals with Escape key
document.addEventListener('keydown', function(e) {
if (e.key === 'Escape') {
closeProductDetail();
closeReceipt();
closeSuccessModal();
}
});

// Initialize when page loads
window.addEventListener('load', initializeApp);
