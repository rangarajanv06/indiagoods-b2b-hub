import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Heart, ShoppingCart, Shield, Truck, RefreshCw, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Import product images
import smartphoneImg from "@/assets/products/smartphone.jpg";
import laptopImg from "@/assets/products/laptop.jpg";
import watchImg from "@/assets/products/watch.jpg";
import headphonesImg from "@/assets/products/headphones.jpg";
import cameraImg from "@/assets/products/camera.jpg";
import officeChairImg from "@/assets/products/office-chair.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(10);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product database
  const products = {
    "1": {
      id: "1",
      name: "Premium Smartphone - Latest Model with Advanced Camera System",
      images: [smartphoneImg, laptopImg, watchImg],
      price: "₹25,999",
      originalPrice: "₹29,999",
      rating: 4.5,
      reviews: 1250,
      minOrder: "10 pieces",
      maxOrder: "1000 pieces",
      supplier: "TechSource India Pvt Ltd",
      supplierRating: 4.8,
      supplierYears: 5,
      badge: "HOT",
      category: "Electronics",
      description: "Experience the latest in smartphone technology with our premium device featuring an advanced camera system, high-performance processor, and sleek design perfect for business professionals.",
      specifications: {
        "Display": "6.7-inch OLED, 120Hz",
        "Camera": "108MP Triple Camera System",
        "Processor": "Snapdragon 8 Gen 2",
        "RAM": "12GB",
        "Storage": "256GB",
        "Battery": "5000mAh with Fast Charging",
        "OS": "Android 14"
      },
      features: [
        "Advanced AI Photography",
        "5G Connectivity",
        "Wireless Charging",
        "Water Resistant IP68",
        "Dual SIM Support"
      ],
      shipping: "Free shipping within India",
      warranty: "1 Year International Warranty",
      paymentTerms: "30% advance, 70% on delivery"
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-destructive mb-4">Product Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">›</span>
          <Link to={`/search?q=${product.category}`} className="hover:text-primary">{product.category}</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-card rounded-lg border overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg border overflow-hidden ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              {product.badge && (
                <Badge className="mb-2 bg-b2b-orange text-white">{product.badge}</Badge>
              )}
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-baseline space-x-3 mb-4">
                <span className="text-4xl font-bold text-primary">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground mb-6">{product.description}</p>
            </div>

            {/* Supplier Info */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Supplier Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Company:</span>
                    <span className="text-sm font-medium">{product.supplier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Rating:</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${
                            i < Math.floor(product.supplierRating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-muted-foreground'
                          }`} 
                        />
                      ))}
                      <span className="text-sm">{product.supplierRating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Experience:</span>
                    <span className="text-sm">{product.supplierYears} years</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Section */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Min Order:</span>
                  <span className="text-sm font-medium">{product.minOrder}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Max Order:</span>
                  <span className="text-sm font-medium">{product.maxOrder}</span>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Quantity:</label>
                  <div className="flex items-center space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setQuantity(Math.max(10, quantity - 10))}
                    >
                      -
                    </Button>
                    <span className="text-lg font-medium w-16 text-center">{quantity}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setQuantity(quantity + 10)}
                    >
                      +
                    </Button>
                    <span className="text-sm text-muted-foreground">pieces</span>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button variant="outline" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Supplier
                  </Button>
                  <Button className="flex-1 bg-b2b-orange hover:bg-b2b-orange/90">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
                
                <Button variant="ghost" className="w-full">
                  <Heart className="h-4 w-4 mr-2" />
                  Add to Wishlist
                </Button>
              </CardContent>
            </Card>

            {/* Service Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <Shield className="h-6 w-6 mx-auto text-green-600" />
                <p className="text-xs text-muted-foreground">Trade Assurance</p>
              </div>
              <div className="text-center space-y-2">
                <Truck className="h-6 w-6 mx-auto text-blue-600" />
                <p className="text-xs text-muted-foreground">Fast Shipping</p>
              </div>
              <div className="text-center space-y-2">
                <RefreshCw className="h-6 w-6 mx-auto text-orange-600" />
                <p className="text-xs text-muted-foreground">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Payment</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border last:border-b-0">
                      <span className="font-medium">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
                <CardDescription>Based on {product.reviews} verified purchases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl font-bold">{product.rating}</div>
                    <div>
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-muted-foreground'
                            }`} 
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">out of 5 stars</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Detailed reviews will be displayed here in the full implementation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipping & Payment Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Shipping:</h4>
                  <p className="text-sm text-muted-foreground">{product.shipping}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Warranty:</h4>
                  <p className="text-sm text-muted-foreground">{product.warranty}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Payment Terms:</h4>
                  <p className="text-sm text-muted-foreground">{product.paymentTerms}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;