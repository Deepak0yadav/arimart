import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 mt-10 border-t">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Useful Links */}
        <div>
          <h3 className="font-bold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Partner</a>
            </li>
            <li>
              <a href="#">Franchise</a>
            </li>
            <li>
              <a href="#">Seller</a>
            </li>
            <li>
              <a href="#">Warehouse</a>
            </li>
            <li>
              <a href="#">Deliver</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">Bistro</a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Vegetables & Fruits</a>
            </li>
            <li>
              <a href="#">Instant & Frozen Food</a>
            </li>
            <li>
              <a href="#">Atta, Rice & Dal</a>
            </li>
            <li>
              <a href="#">Paan Corner</a>
            </li>
            <li>
              <a href="#">Cleaning Essentials</a>
            </li>
            <li>
              <a href="#">Pet Care</a>
            </li>
            <li>
              <a href="#">Electronics & Electricals</a>
            </li>
            <li>
              <a href="#">Print Store</a>
            </li>
          </ul>
        </div>

        {/* More Categories */}
        <div>
          <h3 className="font-bold mb-3 invisible md:visible">.</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Dairy & Breakfast</a>
            </li>
            <li>
              <a href="#">Tea, Coffee & Health Drinks</a>
            </li>
            <li>
              <a href="#">Dry Fruits, Masala & Oil</a>
            </li>
            <li>
              <a href="#">Organic & Premium</a>
            </li>
            <li>
              <a href="#">Home & Office</a>
            </li>
            <li>
              <a href="#">Beauty & Cosmetics</a>
            </li>
            <li>
              <a href="#">Stationery Needs</a>
            </li>
            <li>
              <a href="#">E-Gift Cards</a>
            </li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="font-bold mb-3 invisible md:visible">.</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Munchies</a>
            </li>
            <li>
              <a href="#">Bakery & Biscuits</a>
            </li>
            <li>
              <a href="#">Sauces & Spreads</a>
            </li>
            <li>
              <a href="#">Baby Care</a>
            </li>
            <li>
              <a href="#">Ice Creams & Frozen Desserts</a>
            </li>
            <li>
              <a href="#">Magazines</a>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
          </ul>
        </div>

        {/* Last Column */}
        <div>
          <h3 className="font-bold mb-3 invisible md:visible">.</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Cold Drinks & Juices</a>
            </li>
            <li>
              <a href="#">Sweet Tooth</a>
            </li>
            <li>
              <a href="#">Chicken, Meat & Fish</a>
            </li>
            <li>
              <a href="#">Pharma & Wellness</a>
            </li>
            <li>
              <a href="#">Personal Care</a>
            </li>
            <li>
              <a href="#">Fashion & Accessories</a>
            </li>
            <li>
              <a href="#">Toys & Games</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Arimart. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a
            href="#"
            className="hover:text-blue-600 transition">
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition">
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="hover:text-sky-500 transition">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
