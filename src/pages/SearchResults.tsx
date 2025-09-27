import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import CategorySidebar from "@/components/CategorySidebar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Grid, List } from "lucide-react";

// Import product images
import smartphoneImg from "@/assets/products/smartphone.jpg";
import laptopImg from "@/assets/products/laptop.jpg";
import watchImg from "@/assets/products/watch.jpg";
import headphonesImg from "@/assets/products/headphones.jpg";
import cameraImg from "@/assets/products/camera.jpg";
import officeChairImg from "@/assets/products/office-chair.jpg";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("relevance");

  // Mock product database with more products including teddy bears
  const allProducts = [
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
      badge: "HOT",
      category: "Electronics"
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
      badge: "SALE",
      category: "Electronics"
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
      supplier: "TimeWorks Manufacturing",
      category: "Fashion"
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
      badge: "TRENDING",
      category: "Electronics"
    },
    {
      id: "5",
      name: "Professional DSLR Camera - High-Resolution Photography Equipment",
      image: cameraImg,
      price: "₹35,999",
      rating: 4.7,
      reviews: 445,
      minOrder: "3 pieces",  
      supplier: "PhotoPro Equipment Ltd",
      category: "Electronics"
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
      badge: "NEW",
      category: "Furniture"
    },
    {
      id: "7",
      name: "Cute Teddy Bear - Soft Plush Toy Perfect for Kids and Gifts",
      image: headphonesImg, // placeholder image
      price: "₹599",
      originalPrice: "₹799",
      rating: 4.8,
      reviews: 3200,
      minOrder: "100 pieces",
      supplier: "ToysWorld Manufacturing",
      badge: "BESTSELLER",
      category: "Toys"
    },
    {
      id: "8", 
      name: "Premium Teddy Bear Collection - Luxury Soft Toys for Retail",
      image: watchImg, // placeholder image
      price: "₹1,299",
      originalPrice: "₹1,699",
      rating: 4.6,
      reviews: 1890,
      minOrder: "50 pieces",
      supplier: "Premium Toys Ltd",
      category: "Toys"
    },
    {
      id: "9",
      name: "Giant Teddy Bear - Extra Large Plush Toy for Special Occasions",
      image: officeChairImg, // placeholder image
      price: "₹2,999",
      rating: 4.9,
      reviews: 756,
      minOrder: "25 pieces",
      supplier: "MegaToys Corporation",
      badge: "HOT",
      category: "Toys"
    }
  ];

  // Filter products based on search query
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    product.supplier.toLowerCase().includes(query.toLowerCase())
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return parseInt(a.price.replace(/[₹,]/g, "")) - parseInt(b.price.replace(/[₹,]/g, ""));
      case "price-high":
        return parseInt(b.price.replace(/[₹,]/g, "")) - parseInt(a.price.replace(/[₹,]/g, ""));
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <CategorySidebar />
        
        <main className="flex-1 p-6">
          {/* Search Results Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-b2b-gray-900">
                  Search Results for "{query}"
                </h1>
                <p className="text-muted-foreground">
                  {sortedProducts.length} products found
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* View Mode Toggle */}
                <div className="flex border border-border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                {/* Sort Dropdown */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Breadcrumb */}
            <nav className="text-sm text-muted-foreground mb-6">
              <span>Home</span>
              <span className="mx-2">›</span>
              <span>Search Results</span>
              <span className="mx-2">›</span>
              <span className="text-b2b-gray-900">"{query}"</span>
            </nav>
          </div>

          {/* Search Results */}
          {sortedProducts.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1"
            }`}>
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="mb-4">
                <div className="w-24 h-24 bg-b2b-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl text-b2b-gray-400">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-b2b-gray-900 mb-2">
                  No products found for "{query}"
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or browse our categories
                </p>
                <Button className="bg-b2b-orange hover:bg-b2b-orange/90">
                  Browse All Categories
                </Button>
              </div>
            </div>
          )}

          {/* Pagination */}
          {sortedProducts.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="default" size="sm" className="bg-b2b-blue">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          )}
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchResults;