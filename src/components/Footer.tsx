const Footer = () => {
  return (
    <footer className="bg-b2b-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-b2b-orange mb-4">IndianGoods</h3>
            <p className="text-gray-300 mb-4">
              India&apos;s leading B2B marketplace connecting buyers with verified suppliers across the nation.
            </p>
            <div className="text-sm text-gray-400">
              <p>📍 Mumbai, Delhi, Bangalore</p>
              <p>📞 +91-800-123-4567</p>
              <p>✉️ support@indiangoods.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-b2b-orange transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-b2b-orange transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-b2b-orange transition-colors">Supplier Directory</a></li>
              <li><a href="#" className="hover:text-b2b-orange transition-colors">Buyer Protection</a></li>
              <li><a href="#" className="hover:text-b2b-orange transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-b2b-orange transition-colors">Trade Assurance</a></li>
              <li><a href="#" className="hover:text-b2b-orange transition-colors">Logistics</a></li>
              <li><a href="#" className="hover:text-b2b-orange transition-colors">Quality Control</a></li>
              <li><a href="#" className="hover:text-b2b-orange transition-colors">Payment Solutions</a></li>
              <li><a href="#" className="hover:text-b2b-orange transition-colors">Custom Sourcing</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Popular Categories</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-b2b-orange transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-b2b-orange transition-colors">Fashion & Apparel</a></li>
              <li><a href="#" className="hover:text-b2b-orange transition-colors">Home & Garden</a></li>
              <li><a href="#" className="hover:text-b2b-orange transition-colors">Industrial Equipment</a></li>
              <li><a href="#" className="hover:text-b2b-orange transition-colors">Automotive</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 IndianGoods B2B Marketplace. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-b2b-orange text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-b2b-orange text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-b2b-orange text-sm">Help Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;