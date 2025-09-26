const freshProducts = [
      { id: 1, name: "Apples", description: "Fresh and juicy red apples", price: 120, images: ["/Banner/apple.jpeg"] },
      { id: 2, name: "Bananas", description: "Ripe bananas full of energy", price: 60, images: ["/Banner/banana.jpg"] },
      { id: 3, name: "Carrots", description: "Crunchy and healthy carrots", price: 80, images: ["/Banner/carrot.jpg"] },
      { id: 4, name: "Tomatoes", description: "Farm fresh red tomatoes", price: 50, images: ["/Banner/tomato.jpg"] },
      { id: 5, name: "Spinach", description: "Green leafy spinach full of iron", price: 40, images: ["/Banner/spinach.jpg"] },
      { id: 6, name: "Onions", description: "Fresh white onions", price: 35, images: ["/Banner/onion.jpg"] },
      { id: 7, name: "Potatoes", description: "Farm fresh potatoes", price: 25, images: ["/Banner/potato.jpg"] },
      { id: 8, name: "Bell Peppers", description: "Colorful bell peppers", price: 90, images: ["/Banner/bellpepper.jpg"] },
];

const mobileAccessories = [
      { id: 1, name: "boAt Power Bank", price: 1099, images: ["/Banner/power1.jpg"] },
      { id: 2, name: "Ambrane Power Bank", price: 1399, images: ["/Banner/power2.jpg"] },
      { id: 3, name: "Realme Buds", price: 799, images: ["/Banner/ear1.jpg"] },
      { id: 4, name: "Redmi Earbuds", price: 999, images: ["/Banner/ear2.jpg"] },
      { id: 5, name: "Spigen Mobile Cover", price: 599, images: ["/Banner/cover1.jpg"] },
      { id: 6, name: "Ringke Mobile Cover", price: 499, images: ["/Banner/cover2.jpg"] },
      { id: 7, name: "Samsung Charger", price: 899, images: ["/Banner/charger1.jpg"] },
      { id: 8, name: "Anker Charger", price: 1299, images: ["/Banner/charger2.jpg"] },
];

const electronics = [
      { id: 1, name: "Smart TV", price: 24999, images: ["/Banner/tv1.jpg"] },
      { id: 2, name: "Bluetooth Speaker", price: 1999, images: ["/Banner/speaker1.jpg"] },
      { id: 3, name: "Laptop", price: 49999, images: ["/Banner/laptop1.jpg"] },
      { id: 4, name: "Headphones", price: 1499, images: ["/Banner/headphone1.jpg"] },
      { id: 5, name: "Smart Watch", price: 2999, images: ["/Banner/watch1.jpg"] },
      { id: 6, name: "Gaming Console", price: 39999, images: ["/Banner/console1.jpg"] },
];

const homeKitchen = [
      { id: 1, name: "Mixer Grinder", price: 2599, images: ["/Banner/mixer.jpg"] },
      { id: 2, name: "Non-Stick Pan", price: 899, images: ["/Banner/pan.jpg"] },
      { id: 3, name: "Dinner Set", price: 1999, images: ["/Banner/dinner.jpg"] },
      { id: 4, name: "Electric Kettle", price: 1499, images: ["/Banner/kettle.jpg"] },
      { id: 5, name: "Storage Box", price: 499, images: ["/Banner/storage.jpg"] },
      { id: 6, name: "Cooker", price: 1999, images: ["/Banner/cooker.jpg"] },
];

const fashion = [
      { id: 1, name: "Men's T-Shirt", price: 499, images: ["/Banner/tshirt.jpg"] },
      { id: 2, name: "Women's Dress", price: 999, images: ["/Banner/dress.jpg"] },
      { id: 3, name: "Jeans", price: 799, images: ["/Banner/jeans.jpg"] },
      { id: 4, name: "Wrist Watch", price: 1999, images: ["/Banner/watch2.jpg"] },
      { id: 5, name: "Sneakers", price: 1599, images: ["/Banner/shoes.jpg"] },
      { id: 6, name: "Handbag", price: 1299, images: ["/Banner/bag.jpg"] },
];

const toys = [
      { id: 1, name: "Teddy Bear", price: 499, images: ["/Banner/teddy.jpg"] },
      { id: 2, name: "Building Blocks", price: 799, images: ["/Banner/blocks.jpg"] },
      { id: 3, name: "Remote Car", price: 1299, images: ["/Banner/car.jpg"] },
      { id: 4, name: "Puzzle Game", price: 399, images: ["/Banner/puzzle.jpg"] },
      { id: 5, name: "Doll", price: 699, images: ["/Banner/doll.jpg"] },
      { id: 6, name: "Action Figure", price: 899, images: ["/Banner/action.jpg"] },
];

export const allProducts = [
      ...freshProducts,
      ...mobileAccessories,
      ...electronics,
      ...homeKitchen,
      ...fashion,
      ...toys,
];
