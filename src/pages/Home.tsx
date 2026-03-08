import { useEffect, useState } from 'react';
import { ArrowRight, Smartphone, Shield, Wrench, Headphones, RefreshCw, Star, Users, Award, Clock, Sparkles, Camera, Cpu, Zap } from 'lucide-react';
import samsungS26Image from '@/assets/samsung-s26-ultra.jpg';
import iphone17ProMaxImage from '@/assets/iphone-17-promax.jpg';
import iphone17Image from '@/assets/iphone-17.jpg';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GoogleRatingBadge from '@/components/GoogleRatingBadge';
import InstagramFeed from '@/components/InstagramFeed';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

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
    { icon: Smartphone, title: 'Mobile Sales', description: 'Latest smartphones from all major brands at competitive prices.', link: '/shop' },
    { icon: Star, title: 'Premium Preowned', description: 'Certified pre-owned devices with warranty and quality assurance.', link: '/shop' },
    { icon: Wrench, title: 'Device Repairs', description: 'Expert repair services for all mobile brands and models.', link: '/repair' },
    { icon: Headphones, title: 'Accessories', description: 'Complete range of mobile accessories and protective gear.', link: '/shop' },
    { icon: RefreshCw, title: 'Refurbished Devices', description: 'Quality refurbished phones at affordable prices.', link: '/shop' },
    { icon: Shield, title: 'Warranty Support', description: 'Comprehensive warranty and after-sales support.', link: '/contact' }
  ];

  const featuredProducts = [
    { name: 'iPhone 17 Pro Max', price: '₹1,59,900', originalPrice: '₹1,64,900', image: iphone17ProMaxImage, tag: 'New Launch', brand: 'apple' },
    { name: 'iPhone 17', price: '₹89,900', originalPrice: '₹94,900', image: iphone17Image, tag: 'New Launch', brand: 'apple' },
    { name: 'iPhone 16 Pro Max', price: '₹1,44,900', originalPrice: '₹1,49,900', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop', tag: 'Best Seller', brand: 'apple' },
    { name: 'iPhone 16 Pro', price: '₹1,19,900', originalPrice: '₹1,24,900', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop', tag: 'Popular', brand: 'apple' },
    { name: 'iPhone 16', price: '₹79,900', originalPrice: '₹84,900', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&h=600&fit=crop', tag: 'Popular', brand: 'apple' },
    { name: 'iPhone 15 Pro Max', price: '₹1,29,900', originalPrice: '₹1,39,900', image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&h=600&fit=crop', tag: 'Best Value', brand: 'apple' },
    { name: 'Samsung Galaxy S26 Ultra', price: '₹1,39,999', originalPrice: '₹1,44,999', image: samsungS26Image, tag: 'New Launch', brand: 'samsung' },
    { name: 'Samsung Galaxy S25 Ultra', price: '₹1,29,999', originalPrice: '₹1,34,999', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop', tag: 'Best Seller', brand: 'samsung' },
    { name: 'Samsung Galaxy S25+', price: '₹99,999', originalPrice: '₹1,04,999', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&h=600&fit=crop', tag: 'Popular', brand: 'samsung' },
    { name: 'Samsung Galaxy S25', price: '₹79,999', originalPrice: '₹84,999', image: 'https://images.unsplash.com/photo-1553179459-4514c0f52f41?w=600&h=600&fit=crop', tag: 'Popular', brand: 'samsung' },
    { name: 'Samsung Galaxy Z Fold 6', price: '₹1,64,999', originalPrice: '₹1,69,999', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=600&fit=crop', tag: 'Premium', brand: 'samsung' },
    { name: 'Samsung Galaxy Z Flip 6', price: '₹1,09,999', originalPrice: '₹1,14,999', image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&h=600&fit=crop', tag: 'Trending', brand: 'samsung' },
    { name: 'OnePlus 13', price: '₹69,999', originalPrice: '₹74,999', image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=600&h=600&fit=crop', tag: 'New Launch', brand: 'oneplus' },
    { name: 'OnePlus 13R', price: '₹49,999', originalPrice: '₹54,999', image: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?w=600&h=600&fit=crop', tag: 'Best Value', brand: 'oneplus' },
    { name: 'OnePlus 12', price: '₹57,999', originalPrice: '₹64,999', image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=600&fit=crop', tag: 'Best Seller', brand: 'oneplus' },
    { name: 'OnePlus Open', price: '₹1,39,999', originalPrice: '₹1,49,999', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop', tag: 'Premium', brand: 'oneplus' },
    { name: 'OnePlus Nord 4', price: '₹29,999', originalPrice: '₹33,999', image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop', tag: 'Budget King', brand: 'oneplus' },
    { name: 'OnePlus 12R', price: '₹39,999', originalPrice: '₹43,999', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop', tag: 'Popular', brand: 'oneplus' },
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(p => p.brand === activeFilter);

  const testimonials = [
    { name: 'Rajesh Kumar', rating: 5, text: 'Excellent service! Got my phone screen replaced quickly and at a great price.', location: 'NIBM, Pune' },
    { name: 'Priya Singh', rating: 5, text: 'Best place for buying phones in NIBM. Genuine products and honest pricing.', location: 'Kondhwa, Pune' },
    { name: 'Amit Sharma', rating: 5, text: 'Outstanding customer service. They helped me choose the perfect phone within my budget.', location: 'Undri, Pune' }
  ];

  const stats = [
    { icon: Users, number: '10,000+', label: 'Happy Customers' },
    { icon: Award, number: '5+', label: 'Years Experience' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Shield, number: '100%', label: 'Genuine Products' }
  ];

  const s26Specs = [
    { icon: Camera, label: '200MP AI Camera' },
    { icon: Cpu, label: 'Snapdragon 8 Elite' },
    { icon: Zap, label: '5000mAh + 45W' },
  ];

  return (
    <div className="min-h-screen">
      <HomeSEO />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary-premium/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }} />
        </div>
        
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(hsl(158 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(158 100% 50% / 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        
        <GoogleRatingBadge />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">NIBM Pune's #1 Mobile Destination</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
              <span className="gradient-text">AI Mobile</span>{' '}
              <span className="text-foreground">Gallery</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Fast, Affordable & Reliable Mobile Solutions Under One Roof
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg" className="btn-hero text-base sm:text-lg px-8 sm:px-10 py-6">
                  Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/repair">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent px-8 sm:px-10 py-6 text-base sm:text-lg">
                  Book Repair
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive mobile solutions for all your needs
            </p>
          </AnimatedSection>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <Link to={service.link}>
                  <div className="glass-card p-6 h-full transition-all duration-300 hover:-translate-y-1 group">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Samsung Galaxy S26 Ultra - Newly Launched Banner */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-card to-background" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purple rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <AnimatedSection direction="left" className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-primary animate-glow" />
                <span className="text-primary text-sm font-bold tracking-wider uppercase">Newly Launched</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
                Samsung Galaxy S26 Ultra
              </h2>
              <p className="text-lg text-muted-foreground mb-5 max-w-lg">
                The next generation of Galaxy AI is here. Breakthrough 200MP camera, Snapdragon 8 Elite chipset, and the most immersive display ever on a Galaxy.
              </p>
              
              {/* Specs */}
              <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
                {s26Specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 glass-card px-3 py-2">
                    <spec.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{spec.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground font-semibold neon-glow"
                  onClick={() => {
                    const message = encodeURIComponent("Hi! I'm interested in the Samsung Galaxy S26 Ultra. Is it available? Please share the price and availability.");
                    window.open(`https://wa.me/918805557575?text=${message}`, '_blank');
                  }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Buy Now
                </Button>
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent">
                  View Specs
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="flex-shrink-0">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-brand-purple/20 rounded-3xl blur-xl"></div>
                <div className="relative w-full h-full rounded-3xl border border-border overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=800&fit=crop&q=90" 
                    alt="Samsung Galaxy S26 Ultra - Now Available at AI Mobile Gallery" 
                    className="w-full h-full object-cover rounded-3xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-3xl"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-primary font-bold text-lg">Available Now</p>
                    <p className="text-foreground text-2xl font-bold">₹1,39,999</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Products</h2>
            <p className="text-xl text-muted-foreground">
              Latest smartphones at unbeatable prices
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
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
                className={`rounded-full ${
                  activeFilter === filter.key 
                    ? 'neon-glow' 
                    : 'border-border text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product, index) => (
              <StaggerItem key={index}>
                <div className="product-card group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {product.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold gradient-text">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>
                    <Button className="w-full neon-glow" onClick={() => {
                      const message = encodeURIComponent(`Hi! I'm interested in ${product.name}. Can you provide more details?`);
                      window.open(`https://wa.me/918805557575?text=${message}`, '_blank');
                    }}>
                      Buy Now
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-brand-purple/5 to-primary/10" />
        <div className="absolute inset-0 gradient-mesh" />
        <StaggerContainer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="text-center glass-card p-4 sm:p-6">
                <stat.icon className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-3 text-primary" />
                <div className="text-2xl sm:text-3xl font-bold mb-1 gradient-text">{stat.number}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">Real reviews from our satisfied customers</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="glass-card p-6 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <InstagramFeed />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-brand-purple/5 to-primary/5" />
        <div className="absolute inset-0 gradient-mesh" />
        <AnimatedSection className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">Visit our store or contact us for the best mobile solutions in NIBM, Pune</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-hero">Visit Store</Button>
            </Link>
            <Link to="/repair">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent">Book Repair Now</Button>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Home;
