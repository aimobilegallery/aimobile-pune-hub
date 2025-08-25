import { useState } from 'react';
import { Search, Filter, Star, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import smartphonesImage from '@/assets/smartphones.jpg';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'New Phones', 'Premium Preowned', 'Accessories', 'Refurbished'];

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: '₹1,59,900',
      originalPrice: '₹1,64,900',
      image: smartphonesImage,
      category: 'New Phones',
      rating: 4.9,
      reviews: 128,
      features: ['256GB Storage', 'A17 Pro Chip', 'Pro Camera System'],
      badge: 'New Launch',
      badgeColor: 'bg-green-500'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      price: '₹1,29,999',
      originalPrice: '₹1,34,999',
      image: smartphonesImage,
      category: 'New Phones',
      rating: 4.8,
      reviews: 95,
      features: ['512GB Storage', 'Snapdragon 8 Gen 3', 'S Pen Included'],
      badge: 'Best Seller',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 3,
      name: 'OnePlus 12',
      price: '₹64,999',
      originalPrice: '₹69,999',
      image: smartphonesImage,
      category: 'New Phones',
      rating: 4.7,
      reviews: 67,
      features: ['256GB Storage', 'Snapdragon 8 Gen 3', 'Fast Charging'],
      badge: 'Premium',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'iPhone 13 Pro (Certified)',
      price: '₹79,999',
      originalPrice: '₹95,000',
      image: smartphonesImage,
      category: 'Premium Preowned',
      rating: 4.6,
      reviews: 45,
      features: ['128GB Storage', 'Excellent Condition', '6 Months Warranty'],
      badge: 'Certified',
      badgeColor: 'bg-yellow-500'
    },
    {
      id: 5,
      name: 'Samsung Galaxy S22',
      price: '₹54,999',
      originalPrice: '₹65,000',
      image: smartphonesImage,
      category: 'Premium Preowned',
      rating: 4.5,
      reviews: 32,
      features: ['256GB Storage', 'Like New', '6 Months Warranty'],
      badge: 'Certified',
      badgeColor: 'bg-yellow-500'
    },
    {
      id: 6,
      name: 'Wireless Earbuds Pro',
      price: '₹8,999',
      originalPrice: '₹12,999',
      image: smartphonesImage,
      category: 'Accessories',
      rating: 4.4,
      reviews: 156,
      features: ['Active Noise Cancellation', 'Wireless Charging', '30H Battery'],
      badge: 'Popular',
      badgeColor: 'bg-red-500'
    },
    {
      id: 7,
      name: 'Fast Charging Power Bank',
      price: '₹2,499',
      originalPrice: '₹3,999',
      image: smartphonesImage,
      category: 'Accessories',
      rating: 4.3,
      reviews: 89,
      features: ['20000mAh Capacity', 'Fast Charging', 'Multiple Ports'],
      badge: 'Value',
      badgeColor: 'bg-green-600'
    },
    {
      id: 8,
      name: 'iPhone 12 (Refurbished)',
      price: '₹42,999',
      originalPrice: '₹55,000',
      image: smartphonesImage,
      category: 'Refurbished',
      rating: 4.2,
      reviews: 28,
      features: ['128GB Storage', 'Grade A Condition', '3 Months Warranty'],
      badge: 'Refurbished',
      badgeColor: 'bg-gray-500'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleEnquire = (productName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in ${productName}. Can you provide more details?`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shop Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our wide range of smartphones, accessories, and certified pre-owned devices
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="product-card group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={`${product.badgeColor} text-white`}>
                    {product.badge}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="rounded-full p-2">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-muted-foreground ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>

                <div className="space-y-1 mb-3 text-sm text-muted-foreground">
                  {product.features.map((feature, index) => (
                    <div key={index}>• {feature}</div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Button 
                    className="w-full" 
                    size="sm"
                    onClick={() => handleEnquire(product.name)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    size="sm"
                    onClick={() => handleEnquire(product.name)}
                  >
                    Enquire
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
            <Button 
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-muted rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
          <p className="text-muted-foreground mb-6">
            Our experts are here to help you find the perfect device for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => {
                const message = encodeURIComponent('Hi! I need help choosing the right mobile phone for my needs.');
                window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
              }}
            >
              Chat with Expert
            </Button>
            <Button size="lg" variant="outline">
              Visit Store
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;