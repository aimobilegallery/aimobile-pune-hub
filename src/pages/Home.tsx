import { useEffect } from 'react';
import { ArrowRight, Smartphone, Shield, Wrench, Headphones, RefreshCw, Star, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';
import smartphonesImage from '@/assets/smartphones.jpg';
import repairImage from '@/assets/repair-services.jpg';
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
    {
      name: 'Latest iPhone 15 Pro',
      price: '₹1,34,900',
      originalPrice: '₹1,39,900',
      image: smartphonesImage,
      tag: 'New Launch'
    },
    {
      name: 'Samsung Galaxy S24',
      price: '₹74,999',
      originalPrice: '₹79,999',
      image: smartphonesImage,
      tag: 'Best Seller'
    },
    {
      name: 'OnePlus 12',
      price: '₹64,999',
      originalPrice: '₹69,999',
      image: smartphonesImage,
      tag: 'Premium'
    }
  ];

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

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground">
              Latest smartphones at unbeatable prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="product-card">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {product.tag}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
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