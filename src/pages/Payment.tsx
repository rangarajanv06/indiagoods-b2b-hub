import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, Smartphone, Banknote, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [processing, setProcessing] = useState(false);

  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const [upiId, setUpiId] = useState("");

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  const total = (getTotalPrice() * 1.18).toFixed(2);

  const handlePayment = async (method: string) => {
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      clearCart();
      toast({
        title: "Order Placed Successfully!",
        description: `Your order has been placed using ${method}. Order confirmation sent to your email.`,
      });
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Payment</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="upi" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upi">
                  <Smartphone className="h-4 w-4 mr-2" />
                  UPI
                </TabsTrigger>
                <TabsTrigger value="card">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Card
                </TabsTrigger>
                <TabsTrigger value="cod">
                  <Banknote className="h-4 w-4 mr-2" />
                  COD
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upi" className="bg-card rounded-lg p-6 border mt-4">
                <h2 className="text-xl font-bold text-foreground mb-4">Pay via UPI</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input
                      id="upiId"
                      placeholder="yourname@upi"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                    />
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm text-muted-foreground mb-2">Popular UPI Apps:</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Google Pay</Button>
                      <Button variant="outline" size="sm">PhonePe</Button>
                      <Button variant="outline" size="sm">Paytm</Button>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => handlePayment("UPI")}
                    disabled={!upiId || processing}
                  >
                    {processing ? "Processing..." : `Pay ₹${total}`}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="card" className="bg-card rounded-lg p-6 border mt-4">
                <h2 className="text-xl font-bold text-foreground mb-4">Credit/Debit Card</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardData.cardNumber}
                      onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                      maxLength={19}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input
                      id="cardName"
                      placeholder="Name on card"
                      value={cardData.cardName}
                      onChange={(e) => setCardData({ ...cardData, cardName: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        value={cardData.expiry}
                        onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        type="password"
                        value={cardData.cvv}
                        onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                        maxLength={3}
                      />
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => handlePayment("Card")}
                    disabled={!cardData.cardNumber || !cardData.cardName || !cardData.expiry || !cardData.cvv || processing}
                  >
                    {processing ? "Processing..." : `Pay ₹${total}`}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="cod" className="bg-card rounded-lg p-6 border mt-4">
                <h2 className="text-xl font-bold text-foreground mb-4">Cash on Delivery</h2>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-md">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">Pay when you receive</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Pay in cash or by card/UPI at the time of delivery. No advance payment required.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> COD charges may apply. Please keep exact change ready for cash payments.
                    </p>
                  </div>
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => handlePayment("Cash on Delivery")}
                    disabled={processing}
                  >
                    {processing ? "Processing..." : "Place Order"}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 border sticky top-4">
              <h2 className="text-xl font-bold text-foreground mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>₹{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>GST (18%)</span>
                  <span>₹{(getTotalPrice() * 0.18).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-primary">Free</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold text-foreground">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Secure Payment
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  100% Purchase Protection
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Easy Returns & Refunds
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
