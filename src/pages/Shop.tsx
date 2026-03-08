import { useState, useEffect } from 'react';
import { Search, Star, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const ShopSEO = () => {
  useEffect(() => {
    document.title = 'Buy Smartphones in NIBM Pune | iPhone, Samsung, OnePlus | AI Mobile Gallery';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Buy latest smartphones in NIBM Pune - iPhone 15, Samsung S24, OnePlus 12. Premium preowned mobiles with warranty. Best prices on new & refurbished phones. Visit AI Mobile Gallery.');
    }
  }, []);
  return null;
};

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'New Phones', 'Premium Preowned', 'Accessories', 'Refurbished'];

  const products = [
    { id: 1, name: 'iPhone 15 Pro Max', price: '₹1,59,900', originalPrice: '₹1,64,900', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=400&fit=crop', category: 'New Phones', rating: 4.9, reviews: 128, features: ['256GB Storage', 'A17 Pro Chip', 'Pro Camera System'], badge: 'New Launch', badgeColor: 'bg-primary text-primary-foreground' },
    { id: 2, name: 'Samsung Galaxy S24 Ultra', price: '₹1,29,999', originalPrice: '₹1,34,999', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=400&fit=crop', category: 'New Phones', rating: 4.8, reviews: 95, features: ['512GB Storage', 'Snapdragon 8 Gen 3', 'S Pen Included'], badge: 'Best Seller', badgeColor: 'bg-blue-500 text-white' },
    { id: 3, name: 'OnePlus 12', price: '₹64,999', originalPrice: '₹69,999', image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=400&fit=crop', category: 'New Phones', rating: 4.7, reviews: 67, features: ['256GB Storage', 'Snapdragon 8 Gen 3', 'Fast Charging'], badge: 'Premium', badgeColor: 'bg-brand-purple text-white' },
    { id: 4, name: 'iPhone 13 Pro (Certified)', price: '₹79,999', originalPrice: '₹95,000', image: 'https://images.unsplash.com/photo-1632633173522-47456de71b68?w=600&h=400&fit=crop', category: 'Premium Preowned', rating: 4.6, reviews: 45, features: ['128GB Storage', 'Excellent Condition', '6 Months Warranty'], badge: 'Certified', badgeColor: 'bg-secondary-premium text-black' },
    { id: 5, name: 'Samsung Galaxy S22', price: '₹54,999', originalPrice: '₹65,000', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&h=400&fit=crop', category: 'Premium Preowned', rating: 4.5, reviews: 32, features: ['256GB Storage', 'Like New', '6 Months Warranty'], badge: 'Certified', badgeColor: 'bg-secondary-premium text-black' },
    { id: 6, name: 'Wireless Earbuds Pro', price: '₹8,999', originalPrice: '₹12,999', image: 'https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=600&h=400&fit=crop', category: 'Accessories', rating: 4.4, reviews: 156, features: ['Active Noise Cancellation', 'Wireless Charging', '30H Battery'], badge: 'Popular', badgeColor: 'bg-destructive text-white' },
    { id: 7, name: 'Fast Charging Power Bank', price: '₹2,499', originalPrice: '₹3,999', image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=400&fit=crop', category: 'Accessories', rating: 4.3, reviews: 89, features: ['20000mAh Capacity', 'Fast Charging', 'Multiple Ports'], badge: 'Value', badgeColor: 'bg-success text-white' },
    { id: 8, name: 'iPhone 12 (Refurbished)', price: '₹42,999', originalPrice: '₹55,000', image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&h=400&fit=crop', category: 'Refurbished', rating: 4.2, reviews: 28, features: ['128GB Storage', 'Grade A Condition', '3 Months Warranty'], badge: 'Refurbished', badgeColor: 'bg-muted-foreground text-white' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleEnquire = (productName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in ${productName}. Can you provide more details?`);
    window.open(`https://wa.me/918805557575?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen py-8">
      <ShopSEO />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Shop Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our wide range of smartphones, accessories, and certified pre-owned devices
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 premium-input" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button key={category} variant={selectedCategory === category ? 'default' : 'outline'} size="sm" onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap rounded-full ${selectedCategory === category ? 'neon-glow' : 'border-border text-muted-foreground hover:text-foreground hover:bg-accent'}`}>
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <StaggerItem key={product.id}>
              <div className="product-card group">
                <div className="relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute top-3 left-3"><Badge className={product.badgeColor}>{product.badge}</Badge></div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="rounded-full p-2 glass-card border-0"><Eye className="w-4 h-4" /></Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-foreground">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews})</span>
                  </div>
                  <div className="space-y-1 mb-3 text-sm text-muted-foreground">
                    {product.features.map((feature, index) => (<div key={index}>• {feature}</div>))}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xl font-bold gradient-text">{product.price}</span>
                      {product.originalPrice && <span className="text-sm text-muted-foreground line-through ml-2">{product.originalPrice}</span>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full neon-glow" size="sm" onClick={() => handleEnquire(product.name)}>
                      <ShoppingCart className="w-4 h-4 mr-2" />Buy Now
                    </Button>
                    <Button variant="outline" className="w-full border-border text-muted-foreground hover:text-foreground hover:bg-accent" size="sm" onClick={() => handleEnquire(product.name)}>
                      Enquire
                    </Button>
                  </div>
                </CardContent>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
            <Button onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }} className="mt-4">Clear Filters</Button>
          </div>
        )}

        <AnimatedSection className="mt-16 text-center glass-card p-8">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Need Help Choosing?</h3>
          <p className="text-muted-foreground mb-6">Our experts are here to help you find the perfect device for your needs and budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-glow" onClick={() => {
              const message = encodeURIComponent('Hi! I need help choosing the right mobile phone for my needs.');
              window.open(`https://wa.me/918805557575?text=${message}`, '_blank');
            }}>Chat with Expert</Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent">Visit Store</Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Shop;
