import Header from "@/components/Header";
import CategorySidebar from "@/components/CategorySidebar";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

// Import product images
import smartphoneImg from "@/assets/products/smartphone.jpg";
import laptopImg from "@/assets/products/laptop.jpg";
import watchImg from "@/assets/products/watch.jpg";
import headphonesImg from "@/assets/products/headphones.jpg";
import cameraImg from "@/assets/products/camera.jpg";
import officeChairImg from "@/assets/products/office-chair.jpg";

const Index = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Premium Smartphone - Latest Model with Advanced Camera System",
      image: smartphoneImg,
      price: "₹25,999",
      originalPrice: "₹29,999",
      rating: 4.5,
      reviews: 1250,
      minOrder: "10 pieces",
      supplier: "TechSource India Pvt Ltd",
      badge: "HOT"
    },
    {
      id: "2",
      name: "Business Laptop - High Performance Computing for Professionals",
      image: laptopImg,
      price: "₹45,500",
      originalPrice: "₹52,000",
      rating: 4.8,
      reviews: 890,
      minOrder: "5 pieces",
      supplier: "Digital Solutions Corp",
      badge: "SALE"
    },
    {
      id: "3",
      name: "Luxury Wristwatch - Elegant Timepiece for Business Professionals",
      image: watchImg,
      price: "₹8,999",
      originalPrice: "₹12,999",
      rating: 4.3,
      reviews: 567,
      minOrder: "20 pieces",
      supplier: "TimeWorks Manufacturing"
    },
    {
      id: "4",
      name: "Wireless Headphones - Premium Audio Experience with Noise Cancellation",
      image: headphonesImg,
      price: "₹3,499",
      originalPrice: "₹4,999",
      rating: 4.6,
      reviews: 2100,
      minOrder: "50 pieces",
      supplier: "AudioMax Industries",
      badge: "TRENDING"
    },
    {
      id: "5",
      name: "Professional DSLR Camera - High-Resolution Photography Equipment",
      image: cameraImg,
      price: "₹35,999",
      rating: 4.7,
      reviews: 445,
      minOrder: "3 pieces",
      supplier: "PhotoPro Equipment Ltd"
    },
    {
      id: "6",
      name: "Ergonomic Office Chair - Premium Comfort for Workplace Productivity",
      image: officeChairImg,
      price: "₹12,500",
      originalPrice: "₹15,500",
      rating: 4.4,
      reviews: 678,
      minOrder: "10 pieces",
      supplier: "OfficeFurniture Co",
      badge: "NEW"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection />
      
      <div className="flex">
        <CategorySidebar />
        
        <main className="flex-1 p-6">
          {/* Featured Products Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-b2b-gray-900">Featured Products</h2>
              <button className="text-b2b-orange hover:text-b2b-orange/80 font-medium text-sm">
                View All Products →
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </section>

          {/* Top Categories Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-b2b-gray-900 mb-6">Top Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Electronics", count: "15K+ Products", color: "bg-blue-100 text-blue-700" },
                { name: "Fashion", count: "8K+ Products", color: "bg-purple-100 text-purple-700" },
                { name: "Home & Garden", count: "12K+ Products", color: "bg-green-100 text-green-700" },
                { name: "Industrial", count: "6K+ Products", color: "bg-orange-100 text-orange-700" },
                { name: "Automotive", count: "4K+ Products", color: "bg-red-100 text-red-700" },
                { name: "Health & Beauty", count: "3K+ Products", color: "bg-pink-100 text-pink-700" }
              ].map((category, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className={`w-12 h-12 ${category.color} rounded-lg mb-3 flex items-center justify-center`}>
                    <span className="text-lg font-bold">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm text-b2b-gray-900">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose IndianGoods Section */}
          <section className="bg-b2b-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-b2b-gray-900 text-center mb-8">
              Why Choose IndianGoods B2B Marketplace?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-b2b-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <h3 className="font-semibold text-b2b-gray-900 mb-2">Quality Assured</h3>
                <p className="text-sm text-muted-foreground">
                  All suppliers are verified and products undergo strict quality checks
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-b2b-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">₹</span>
                </div>
                <h3 className="font-semibold text-b2b-gray-900 mb-2">Best Prices</h3>
                <p className="text-sm text-muted-foreground">
                  Direct from manufacturers with competitive wholesale pricing
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🚚</span>
                </div>
                <h3 className="font-semibold text-b2b-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Reliable shipping across India with tracking and insurance
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;