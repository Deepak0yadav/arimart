import {
  ShoppingCart,
  Smartphone,
  Cpu,
  Home,
  Shirt,
  Heart,
  Tag,
  Pill,
  Dog,
  Baby,
  Book,
  Dumbbell,
} from "lucide-react";

const categories = [
  {
    name: "Grocery",
    icon: <ShoppingCart className="w-8 h-8 text-purple-500" />,
  },
  {
    name: "Mobiles & Tablets",
    icon: <Smartphone className="w-8 h-8 text-purple-500" />,
  },
  { name: "Electronics", icon: <Cpu className="w-8 h-8 text-purple-500" /> },
  {
    name: "Home & Kitchen",
    icon: <Home className="w-8 h-8 text-purple-500" />,
  },
  { name: "Fashion", icon: <Shirt className="w-8 h-8 text-purple-500" /> },
  {
    name: "Beauty & Personal Care",
    icon: <Heart className="w-8 h-8 text-purple-500" />,
  },
  { name: "Appliances", icon: <Tag className="w-8 h-8 text-purple-500" /> },
  {
    name: "Pharmacy & Health",
    icon: <Pill className="w-8 h-8 text-purple-500" />,
  },
  { name: "Pet Supplies", icon: <Dog className="w-8 h-8 text-purple-500" /> },
  { name: "Baby Care", icon: <Baby className="w-8 h-8 text-purple-500" /> },
  {
    name: "Books & Stationery",
    icon: <Book className="w-8 h-8 text-purple-500" />,
  },
  {
    name: "Sports & Fitness",
    icon: <Dumbbell className="w-8 h-8 text-purple-500" />,
  },
];

export default function ShopByCategory() {
  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-2xl shadow hover:shadow-lg transition bg-white cursor-pointer">
            <div className="bg-purple-100 p-4 rounded-full mb-3">
              {cat.icon}
            </div>
            <p className="text-sm font-medium text-gray-800 text-center">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
