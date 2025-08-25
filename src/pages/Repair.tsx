import { useState } from 'react';
import { Wrench, Smartphone, Battery, Droplets, Bug, Shield, Clock, CheckCircle } from 'lucide-react';
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
      icon: CheckCircle,
      title: 'Genuine Parts Only',
      description: 'We use only original and certified replacement parts'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Most repairs completed within 2 hours'
    },
    {
      icon: Shield,
      title: 'Warranty Included',
      description: '3-6 months warranty on all repair services'
    },
    {
      icon: Smartphone,
      title: 'All Brands Supported',
      description: 'Expert repair for all smartphone brands and models'
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
    
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Mobile Repair Services
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Expert technicians, genuine parts, and quick turnaround times
          </p>
          <Button size="lg" className="btn-hero">
            Book Repair Now
          </Button>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground">
              Quality service you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="service-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Book a Repair Service</CardTitle>
              <p className="text-muted-foreground text-center">
                Fill out the form below and we'll get back to you shortly
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

              <div className="text-center pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  For immediate assistance, call us directly at{' '}
                  <a href="tel:+919876543210" className="text-primary font-medium">
                    +91 98765 43210
                  </a>
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