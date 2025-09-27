import { Search, Bell, ShoppingCart, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-[var(--shadow-header)] sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-b2b-gray-50 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <span>Welcome to IndianGoods B2B Marketplace</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>My Account</span>
            <span>Wishlist</span>
            <span>Register or Sign-in</span>
            <span>Checkout</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-b2b-blue">IndianGoods</h1>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative flex">
              <Input
                type="text"
                placeholder="Search entire store here..."
                className="w-full rounded-r-none border-r-0 focus:ring-1 focus:ring-primary"
              />
              <Button 
                className="rounded-l-none bg-b2b-orange hover:bg-b2b-orange/90 text-white px-6"
              >
                <Search className="h-4 w-4" />
                Search
              </Button>
            </div>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-b2b-gray-600" />
              <span className="absolute -top-1 -right-1 bg-b2b-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5 text-b2b-gray-600" />
              <span className="absolute -top-1 -right-1 bg-b2b-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                5
              </span>
            </Button>

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-b2b-gray-600" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <div className="bg-b2b-blue text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center space-x-8">
          <Button variant="ghost" className="text-white hover:bg-white/20">
            All Categories
          </Button>
          <nav className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-b2b-orange transition-colors">Electronics</a>
            <a href="#" className="hover:text-b2b-orange transition-colors">Fashion</a>
            <a href="#" className="hover:text-b2b-orange transition-colors">Home & Garden</a>
            <a href="#" className="hover:text-b2b-orange transition-colors">Industrial</a>
            <a href="#" className="hover:text-b2b-orange transition-colors">Automotive</a>
            <a href="#" className="hover:text-b2b-orange transition-colors">Health & Beauty</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;