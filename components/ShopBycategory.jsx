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
    icon: <ShoppingCart className="w-6 h-6 text-green-600" />,
    bgColor: "bg-green-50",
    hoverBg: "group-hover:bg-green-100"
  },
  {
    name: "Mobiles & Tablets",
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    bgColor: "bg-blue-50",
    hoverBg: "group-hover:bg-blue-100"
  },
  { 
    name: "Electronics", 
    icon: <Cpu className="w-6 h-6 text-purple-600" />,
    bgColor: "bg-purple-50",
    hoverBg: "group-hover:bg-purple-100"
  },
  {
    name: "Home & Kitchen",
    icon: <Home className="w-6 h-6 text-orange-600" />,
    bgColor: "bg-orange-50",
    hoverBg: "group-hover:bg-orange-100"
  },
  { 
    name: "Fashion", 
    icon: <Shirt className="w-6 h-6 text-pink-600" />,
    bgColor: "bg-pink-50",
    hoverBg: "group-hover:bg-pink-100"
  },
  {
    name: "Beauty & Personal Care",
    icon: <Heart className="w-6 h-6 text-red-600" />,
    bgColor: "bg-red-50",
    hoverBg: "group-hover:bg-red-100"
  },
  { 
    name: "Appliances", 
    icon: <Tag className="w-6 h-6 text-yellow-600" />,
    bgColor: "bg-yellow-50",
    hoverBg: "group-hover:bg-yellow-100"
  },
  {
    name: "Pharmacy & Health",
    icon: <Pill className="w-6 h-6 text-teal-600" />,
    bgColor: "bg-teal-50",
    hoverBg: "group-hover:bg-teal-100"
  },
  { 
    name: "Pet Supplies", 
    icon: <Dog className="w-6 h-6 text-amber-600" />,
    bgColor: "bg-amber-50",
    hoverBg: "group-hover:bg-amber-100"
  },
  { 
    name: "Baby Care", 
    icon: <Baby className="w-6 h-6 text-indigo-600" />,
    bgColor: "bg-indigo-50",
    hoverBg: "group-hover:bg-indigo-100"
  },
  {
    name: "Books & Stationery",
    icon: <Book className="w-6 h-6 text-emerald-600" />,
    bgColor: "bg-emerald-50",
    hoverBg: "group-hover:bg-emerald-100"
  },
  {
    name: "Sports & Fitness",
    icon: <Dumbbell className="w-6 h-6 text-cyan-600" />,
    bgColor: "bg-cyan-50",
    hoverBg: "group-hover:bg-cyan-100"
  },
];

export default function ShopByCategory() {
  return (
    <section className="py-6 bg-white w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 relative">
          Shop by Category
          <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-green-600 rounded-full"></div>
        </h2>
      </div>
      
        {/* Mobile horizontal scroll */}
        <div className="sm:hidden overflow-x-auto flex gap-4 py-2 -mx-4 px-4 scrollbar-hide">
          {categories.slice(0, 8).map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 rounded-xl shadow-sm border border-gray-100 bg-white cursor-pointer hover:shadow-md hover:border-green-200 transition-all duration-200 min-w-[80px] hover:-translate-y-1 group">
              <div className={`${cat.bgColor} p-3 rounded-full mb-2 ${cat.hoverBg} transition-colors`}>
                {cat.icon}
              </div>
              <p className="text-xs font-medium text-gray-800 text-center leading-tight">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
        
        {/* Desktop grid */}
        <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-green-200 transition-all duration-200 bg-white cursor-pointer group hover:-translate-y-1">
              <div className={`${cat.bgColor} p-4 rounded-full mb-3 ${cat.hoverBg} transition-colors`}>
                {cat.icon}
              </div>
              <p className="text-sm font-medium text-gray-800 text-center leading-tight">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
