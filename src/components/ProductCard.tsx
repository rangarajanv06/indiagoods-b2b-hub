import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  minOrder: string;
  supplier: string;
  badge?: string;
}

const ProductCard = ({ 
  name, 
  image, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  minOrder, 
  supplier,
  badge 
}: ProductCardProps) => {
  return (
    <div className="bg-card rounded-lg border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group">
      <div className="relative p-4">
        {badge && (
          <span className="absolute top-2 left-2 bg-b2b-orange text-white text-xs px-2 py-1 rounded-md font-medium">
            {badge}
          </span>
        )}
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4 text-b2b-gray-600 hover:text-red-500" />
        </Button>

        <div className="aspect-square bg-b2b-gray-50 rounded-lg mb-4 flex items-center justify-center">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="space-y-3">
          <h3 className="font-medium text-sm text-b2b-gray-900 line-clamp-2 hover:text-b2b-blue cursor-pointer transition-colors">
            {name}
          </h3>

          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${
                    i < Math.floor(rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-b2b-gray-200'
                  }`} 
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-lg font-bold text-b2b-blue">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>

          <div className="text-xs text-muted-foreground">
            Min Order: {minOrder}
          </div>

          <div className="text-xs text-b2b-gray-600">
            by {supplier}
          </div>

          <div className="flex space-x-2 pt-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 text-xs border-b2b-blue text-b2b-blue hover:bg-b2b-blue hover:text-white"
            >
              Inquiry
            </Button>
            <Button 
              size="sm" 
              className="flex-1 text-xs bg-b2b-orange hover:bg-b2b-orange/90"
            >
              <ShoppingCart className="h-3 w-3 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;