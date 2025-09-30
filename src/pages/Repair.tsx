import { useState } from 'react';
import { Wrench, Smartphone, Battery, Droplets, Bug, Shield, Clock, CheckCircle, Leaf, Truck, Cpu, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import repairImage from '@/assets/repair-services.jpg';

const Repair = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    device: '',
    issue: '',
    urgency: 'Normal'
  });

  const repairServices = [
    {
      icon: Smartphone,
      title: 'Screen Replacement',
      description: 'Cracked or damaged screens repaired with genuine parts',
      price: 'Starting from ₹1,999',
      time: '30-60 mins'
    },
    {
      icon: Battery,
      title: 'Battery Replacement',
      description: 'Original battery replacement for longer device life',
      price: 'Starting from ₹1,499',
      time: '20-30 mins'
    },
    {
      icon: Droplets,
      title: 'Water Damage Repair',
      description: 'Professional water damage recovery services',
      price: 'Starting from ₹2,999',
      time: '2-4 hours'
    },
    {
      icon: Bug,
      title: 'Software Issues',
      description: 'OS installation, virus removal, performance optimization',
      price: 'Starting from ₹799',
      time: '30-90 mins'
    },
    {
      icon: Wrench,
      title: 'Charging Port Repair',
      description: 'Fix loose or damaged charging ports',
      price: 'Starting from ₹1,299',
      time: '45-60 mins'
    },
    {
      icon: Shield,
      title: 'Camera Repair',
      description: 'Front and rear camera repair services',
      price: 'Starting from ₹1,799',
      time: '60-90 mins'
    }
  ];

  const features = [
    {
      icon: Cpu,
      title: 'AI-Powered Diagnostics',
      description: 'E-Genie™ AI Assistant for instant device diagnostics'
    },
    {
      icon: Truck,
      title: 'Doorstep Pickup & Delivery',
      description: 'Mobile van service for convenient on-the-go repairs'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Service',
      description: 'Sustainable practices with responsible e-waste recycling'
    },
    {
      icon: Clock,
      title: 'Same-Day Repairs',
      description: 'Most common issues fixed within hours'
    },
    {
      icon: Shield,
      title: 'Up to 6-Month Warranty',
      description: 'Genuine spare parts with extended warranty coverage'
    },
    {
      icon: Award,
      title: 'Certified Technicians',
      description: 'Expert repair for all major brands and models'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.device || !formData.issue) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    const message = encodeURIComponent(
      `New Repair Booking:\nName: ${formData.name}\nPhone: ${formData.phone}\nDevice: ${formData.device}\nIssue: ${formData.issue}\nUrgency: ${formData.urgency}`
    );
    
    window.open(`https://wa.me/918999895516?text=${message}`, '_blank');
    
    toast({
      title: "Repair request sent!",
      description: "We'll contact you shortly to confirm your booking."
    });

    setFormData({
      name: '',
      phone: '',
      device: '',
      issue: '',
      urgency: 'Normal'
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${repairImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-4">
            <p className="text-white font-medium">Powered by eRepair - India's First AI-Powered Sustainable Repair Service</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hum Sab Theek Kardenge! We Fix Everything!
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Fast, reliable, and eco-friendly repair services for all your electronic devices with AI-powered diagnostics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" onClick={() => window.location.href = '#booking-form'}>
              Book Repair Now
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20" onClick={() => window.open('tel:+918999895516')}>
              Call: 8999895516
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Repair Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional repair services for all smartphone brands and models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairServices.map((service, index) => (
              <Card key={index} className="service-card">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Price:</span>
                      <span className="text-primary">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Time:</span>
                      <span className="text-muted-foreground">{service.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose eRepair?</h2>
            <p className="text-xl text-muted-foreground">
              India's first AI-driven electronics repair platform with sustainable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="service-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Book a Repair Service with eRepair</CardTitle>
              <p className="text-muted-foreground text-center">
                Get instant AI-powered quotes and doorstep pickup service
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Device Model *
                  </label>
                  <Input
                    type="text"
                    name="device"
                    value={formData.device}
                    onChange={handleInputChange}
                    placeholder="e.g., iPhone 15 Pro, Samsung Galaxy S24"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Issue Description *
                  </label>
                  <Textarea
                    name="issue"
                    value={formData.issue}
                    onChange={handleInputChange}
                    placeholder="Describe the problem with your device in detail..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Urgency Level
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border rounded-md bg-background"
                  >
                    <option value="Normal">Normal (1-2 days)</option>
                    <option value="Urgent">Urgent (Same day)</option>
                    <option value="Emergency">Emergency (Within hours)</option>
                  </select>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Book Repair Service
                </Button>
              </form>

              <div className="text-center pt-4 border-t border-border space-y-3">
                <p className="text-sm text-muted-foreground">
                  For immediate assistance, call us directly at{' '}
                  <a href="tel:+918999895516" className="text-primary font-medium">
                    +91 8999895516
                  </a>
                </p>
                <p className="text-xs text-muted-foreground">
                  Service Areas: Kothrud, Baner, Hinjewadi, Viman Nagar, Wakad, Hadapsar, Koregaon Park, Aundh, Pimple Saudagar, Karve Nagar, Warje, Susa and more across Pune
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Repair;