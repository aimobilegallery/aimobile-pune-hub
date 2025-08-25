import { Link } from 'react-router-dom';
import { Smartphone, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Smartphone className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">AI Mobile Gallery</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Fast, Affordable & Reliable Mobile Solutions Under One Roof
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" onClick={() => window.open('https://www.instagram.com/aimobilegallery/', '_blank')} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link to="/shop" className="block text-sm text-muted-foreground hover:text-primary">
                Shop Products
              </Link>
              <Link to="/repair" className="block text-sm text-muted-foreground hover:text-primary">
                Repair Services
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Our Services</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Mobile Sales</p>
              <p>Premium Preowned</p>
              <p>Device Repairs</p>
              <p>Accessories</p>
              <p>Refurbished Devices</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Shop no-2, Amba Vatica Society, Building A-1, NIBM Rd, Pune, Maharashtra 411048</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>8805557575</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>mail.aimobilegallery@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 AI Mobile Gallery. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;