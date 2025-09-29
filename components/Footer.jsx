import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 text-gray-700 py-12 mt-8 border-t border-gray-200">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Useful Links */}
        <div>
          <h3 className="font-bold mb-4 text-gray-800 text-base">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Privacy</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Terms</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">FAQs</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Security</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Partner</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Franchise</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Seller</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Warehouse</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Deliver</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Resources</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Recipes</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Bistro</a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-bold mb-4 text-gray-800 text-base">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Vegetables & Fruits</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Instant & Frozen Food</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Atta, Rice & Dal</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Paan Corner</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Cleaning Essentials</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Pet Care</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Electronics & Electricals</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Print Store</a>
            </li>
          </ul>
        </div>

        {/* More Categories */}
        <div>
          <h3 className="font-bold mb-4 text-gray-800 text-base invisible md:visible">.</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Dairy & Breakfast</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Tea, Coffee & Health Drinks</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Dry Fruits, Masala & Oil</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Organic & Premium</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Home & Office</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Beauty & Cosmetics</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Stationery Needs</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">E-Gift Cards</a>
            </li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="font-bold mb-4 text-gray-800 text-base invisible md:visible">.</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Munchies</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Bakery & Biscuits</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Sauces & Spreads</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Baby Care</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Ice Creams & Frozen Desserts</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Magazines</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Books</a>
            </li>
          </ul>
        </div>

        {/* Last Column */}
        <div>
          <h3 className="font-bold mb-4 text-gray-800 text-base invisible md:visible">.</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Cold Drinks & Juices</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Sweet Tooth</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Chicken, Meat & Fish</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Pharma & Wellness</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Personal Care</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Fashion & Accessories</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors duration-200">Toys & Games</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p className="font-medium">© {new Date().getFullYear()} Arimart. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a
            href="#"
            className="hover:text-blue-600 transition-colors duration-200 p-1">
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition-colors duration-200 p-1">
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="hover:text-sky-500 transition-colors duration-200 p-1">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
