import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Electronics & Technology",
    subcategories: ["Mobile Phones", "Computers", "Audio & Video", "Cameras"],
    count: 1250
  },
  {
    name: "Fashion & Apparel",
    subcategories: ["Men's Clothing", "Women's Clothing", "Shoes", "Accessories"],
    count: 890
  },
  {
    name: "Home & Garden",
    subcategories: ["Furniture", "Kitchen", "Garden Tools", "Decor"],
    count: 670
  },
  {
    name: "Industrial Equipment",
    subcategories: ["Machinery", "Tools", "Safety Equipment", "Raw Materials"],
    count: 560
  },
  {
    name: "Automotive Parts",
    subcategories: ["Car Parts", "Motorcycle Parts", "Tires", "Batteries"],
    count: 430
  },
  {
    name: "Health & Beauty",
    subcategories: ["Cosmetics", "Personal Care", "Health Products", "Supplements"],
    count: 320
  },
  {
    name: "Sports & Outdoors",
    subcategories: ["Sports Equipment", "Outdoor Gear", "Fitness", "Camping"],
    count: 280
  },
  {
    name: "Toys & Hobbies",
    subcategories: ["Kids Toys", "Board Games", "Craft Supplies", "Collectibles"],
    count: 190
  }
];

const CategorySidebar = () => {
  return (
    <aside className="w-64 bg-card border-r border-border">
      <div className="p-4">
        <h3 className="font-semibold text-b2b-gray-900 mb-4 text-lg">Shop by Categories</h3>
        
        <div className="space-y-1">
          {categories.map((category, index) => (
            <div key={index} className="group">
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-b2b-gray-50 cursor-pointer transition-colors">
                <div className="flex-1">
                  <div className="font-medium text-sm text-b2b-gray-900">
                    {category.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {category.count} items
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-b2b-orange transition-colors" />
              </div>
              
              {/* Subcategories (hidden by default, would show on hover/click) */}
              <div className="ml-4 space-y-1 hidden group-hover:block">
                {category.subcategories.slice(0, 3).map((sub, subIndex) => (
                  <div key={subIndex} className="text-xs text-muted-foreground py-1 px-3 hover:text-b2b-orange cursor-pointer">
                    {sub}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-br from-b2b-orange/10 to-b2b-orange/5 rounded-lg">
          <h4 className="font-semibold text-sm text-b2b-gray-900 mb-2">Need Help?</h4>
          <p className="text-xs text-muted-foreground mb-3">Contact our B2B specialists</p>
          <button className="w-full bg-b2b-orange text-white text-sm py-2 px-3 rounded-md hover:bg-b2b-orange/90 transition-colors">
            Get Quote
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CategorySidebar;