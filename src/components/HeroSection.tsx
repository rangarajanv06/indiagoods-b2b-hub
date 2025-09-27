import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-b2b-blue to-b2b-blue-dark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block bg-b2b-orange text-white text-sm font-medium px-3 py-1 rounded-full">
                India&apos;s #1 B2B Marketplace
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Connect with
                <span className="text-b2b-orange"> Millions </span>
                of Indian Suppliers
              </h1>
              <p className="text-lg text-blue-100 max-w-md">
                Find the best wholesale products and suppliers from across India. 
                Quality assured, competitive prices, and reliable delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-b2b-orange hover:bg-b2b-orange/90 text-white font-medium"
              >
                Start Sourcing Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-b2b-blue"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-b2b-orange">50K+</div>
                <div className="text-sm text-blue-200">Suppliers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-b2b-orange">2M+</div>
                <div className="text-sm text-blue-200">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-b2b-orange">100K+</div>
                <div className="text-sm text-blue-200">Buyers</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-b2b-orange rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">IG</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">IndianGoods Dashboard</h3>
                    <p className="text-sm text-blue-200">Real-time marketplace insights</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-blue-200">Today&apos;s Orders</div>
                    <div className="text-2xl font-bold">₹2.4L</div>
                    <div className="text-xs text-green-400">↑ 12% from yesterday</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-blue-200">New Suppliers</div>
                    <div className="text-2xl font-bold">47</div>
                    <div className="text-xs text-green-400">↑ 8% this week</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-blue-200">Popular Categories</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-b2b-orange/20 text-b2b-orange text-xs px-2 py-1 rounded">Electronics</span>
                    <span className="bg-b2b-orange/20 text-b2b-orange text-xs px-2 py-1 rounded">Textiles</span>
                    <span className="bg-b2b-orange/20 text-b2b-orange text-xs px-2 py-1 rounded">Automotive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;