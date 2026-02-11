import { useEffect, useState } from 'react';
import { ArrowRight, Smartphone, Shield, Wrench, Headphones, RefreshCw, Star, Users, Award, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';
import smartphonesImage from '@/assets/smartphones.jpg';
import repairImage from '@/assets/repair-services.jpg';
import samsungS26Image from '@/assets/samsung-s26-banner.jpg';
import GoogleRatingBadge from '@/components/GoogleRatingBadge';
import InstagramFeed from '@/components/InstagramFeed';

// SEO Meta component
const HomeSEO = () => {
  useEffect(() => {
    document.title = 'AI Mobile Gallery | Best Mobile Shop in NIBM Pune | Sales, Repair & Accessories';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI Mobile Gallery - Your trusted mobile shop in NIBM, Pune. Buy latest smartphones, premium preowned phones, expert repair services & accessories. 10000+ happy customers. Call 8805557575.');
    }
  }, []);
  return null;
};

const Home = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile Sales',
      description: 'Latest smartphones from all major brands at competitive prices.',
      link: '/shop'
    },
    {
      icon: Star,
      title: 'Premium Preowned',
      description: 'Certified pre-owned devices with warranty and quality assurance.',
      link: '/shop'
    },
    {
      icon: Wrench,
      title: 'Device Repairs',
      description: 'Expert repair services for all mobile brands and models.',
      link: '/repair'
    },
    {
      icon: Headphones,
      title: 'Accessories',
      description: 'Complete range of mobile accessories and protective gear.',
      link: '/shop'
    },
    {
      icon: RefreshCw,
      title: 'Refurbished Devices',
      description: 'Quality refurbished phones at affordable prices.',
      link: '/shop'
    },
    {
      icon: Shield,
      title: 'Warranty Support',
      description: 'Comprehensive warranty and after-sales support.',
      link: '/contact'
    }
  ];

  const featuredProducts = [
    // iPhone Series
    {
      name: 'iPhone 16 Pro Max',
      price: '₹1,44,900',
      originalPrice: '₹1,49,900',
      image: smartphonesImage,
      tag: 'New Launch',
      brand: 'apple'
    },
    {
      name: 'iPhone 16 Pro',
      price: '₹1,19,900',
      originalPrice: '₹1,24,900',
      image: smartphonesImage,
      tag: 'New Launch',
      brand: 'apple'
    },
    {
      name: 'iPhone 16',
      price: '₹79,900',
      originalPrice: '₹84,900',
      image: smartphonesImage,
      tag: 'Popular',
      brand: 'apple'
    },
    {
      name: 'iPhone 15 Pro Max',
      price: '₹1,29,900',
      originalPrice: '₹1,39,900',
      image: smartphonesImage,
      tag: 'Best Seller',
      brand: 'apple'
    },
    {
      name: 'iPhone 15 Pro',
      price: '₹1,09,900',
      originalPrice: '₹1,19,900',
      image: smartphonesImage,
      tag: 'Best Value',
      brand: 'apple'
    },
    {
      name: 'iPhone 15',
      price: '₹69,900',
      originalPrice: '₹74,900',
      image: smartphonesImage,
      tag: 'Popular',
      brand: 'apple'
    },
    // Samsung Series
    {
      name: 'Samsung Galaxy S25 Ultra',
      price: '₹1,29,999',
      originalPrice: '₹1,34,999',
      image: smartphonesImage,
      tag: 'New Launch',
      brand: 'samsung'
    },
    {
      name: 'Samsung Galaxy S25+',
      price: '₹99,999',
      originalPrice: '₹1,04,999',
      image: smartphonesImage,
      tag: 'New Launch',
      brand: 'samsung'
    },
    {
      name: 'Samsung Galaxy S25',
      price: '₹79,999',
      originalPrice: '₹84,999',
      image: smartphonesImage,
      tag: 'Popular',
      brand: 'samsung'
    },
    {
      name: 'Samsung Galaxy S24 Ultra',
      price: '₹1,09,999',
      originalPrice: '₹1,19,999',
      image: smartphonesImage,
      tag: 'Best Seller',
      brand: 'samsung'
    },
    {
      name: 'Samsung Galaxy Z Fold 6',
      price: '₹1,64,999',
      originalPrice: '₹1,69,999',
      image: smartphonesImage,
      tag: 'Premium',
      brand: 'samsung'
    },
    {
      name: 'Samsung Galaxy Z Flip 6',
      price: '₹1,09,999',
      originalPrice: '₹1,14,999',
      image: smartphonesImage,
      tag: 'Trending',
      brand: 'samsung'
    },
    // OnePlus Series
    {
      name: 'OnePlus 13',
      price: '₹69,999',
      originalPrice: '₹74,999',
      image: smartphonesImage,
      tag: 'New Launch',
      brand: 'oneplus'
    },
    {
      name: 'OnePlus 13R',
      price: '₹49,999',
      originalPrice: '₹54,999',
      image: smartphonesImage,
      tag: 'Best Value',
      brand: 'oneplus'
    },
    {
      name: 'OnePlus 12',
      price: '₹57,999',
      originalPrice: '₹64,999',
      image: smartphonesImage,
      tag: 'Best Seller',
      brand: 'oneplus'
    },
    {
      name: 'OnePlus Open',
      price: '₹1,39,999',
      originalPrice: '₹1,49,999',
      image: smartphonesImage,
      tag: 'Premium',
      brand: 'oneplus'
    },
    {
      name: 'OnePlus Nord 4',
      price: '₹29,999',
      originalPrice: '₹33,999',
      image: smartphonesImage,
      tag: 'Budget King',
      brand: 'oneplus'
    },
    {
      name: 'OnePlus 12R',
      price: '₹39,999',
      originalPrice: '₹43,999',
      image: smartphonesImage,
      tag: 'Popular',
      brand: 'oneplus'
    },
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(p => p.brand === activeFilter);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Excellent service! Got my phone screen replaced quickly and at a great price.',
      location: 'NIBM, Pune'
    },
    {
      name: 'Priya Singh',
      rating: 5,
      text: 'Best place for buying phones in NIBM. Genuine products and honest pricing.',
      location: 'Kondhwa, Pune'
    },
    {
      name: 'Amit Sharma',
      rating: 5,
      text: 'Outstanding customer service. They helped me choose the perfect phone within my budget.',
      location: 'Undri, Pune'
    }
  ];

  const stats = [
    { icon: Users, number: '10,000+', label: 'Happy Customers' },
    { icon: Award, number: '5+', label: 'Years Experience' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Shield, number: '100%', label: 'Genuine Products' }
  ];

  return (
    <div className="min-h-screen">
      <HomeSEO />
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <GoogleRatingBadge />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Mobile Gallery
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Fast, Affordable & Reliable Mobile Solutions Under One Roof
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="btn-hero">
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/repair">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Book Repair
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive mobile solutions for all your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="service-card h-full">
                  <CardContent className="p-6">
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Samsung Galaxy S26 Coming Soon Banner */}
      <section className="py-12 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-4">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-white/90 text-sm font-medium">Coming Soon</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                Samsung Galaxy S26 Ultra
              </h2>
              <p className="text-lg text-white/70 mb-6 max-w-lg">
                The next generation of Galaxy AI. Redefining mobile excellence with breakthrough camera technology and unmatched performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-slate-900 hover:bg-white/90 font-semibold"
                  onClick={() => {
                    const message = encodeURIComponent("Hi! I'm interested in pre-booking the Samsung Galaxy S26 Ultra. Please notify me when it's available.");
                    window.open(`https://wa.me/918805557575?text=${message}`, '_blank');
                  }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Pre-Book Now
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Get Notified
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl"></div>
                <div className="relative w-full h-full rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <img 
                    src={samsungS26Image} 
                    alt="Samsung Galaxy S26 Ultra - Coming Soon" 
                    className="w-full h-full object-cover rounded-3xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-3xl"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white font-bold text-lg">2026</p>
                    <p className="text-white/70 text-sm">Expected Launch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground">
              Latest smartphones at unbeatable prices
            </p>
          </div>

          {/* Brand Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { key: 'all', label: 'All Brands' },
              { key: 'apple', label: 'iPhone' },
              { key: 'samsung', label: 'Samsung' },
              { key: 'oneplus', label: 'OnePlus' },
            ].map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter.key)}
                className="rounded-full"
              >
                {filter.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={index} className="product-card group hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {product.tag}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <Button className="w-full" onClick={() => {
                    const message = encodeURIComponent(`Hi! I'm interested in ${product.name}. Can you provide more details?`);
                    window.open(`https://wa.me/918805557575?text=${message}`, '_blank');
                  }}>
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg" variant="outline">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Real reviews from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="service-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Visit our store or contact us for the best mobile solutions in NIBM, Pune
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-hero">
                Visit Store
              </Button>
            </Link>
            <Link to="/repair">
              <Button size="lg" variant="outline">
                Book Repair Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;