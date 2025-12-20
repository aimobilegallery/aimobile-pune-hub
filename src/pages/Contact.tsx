import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

// SEO Meta component
const ContactSEO = () => {
  useEffect(() => {
    document.title = 'Contact AI Mobile Gallery | Mobile Shop in NIBM Pune | 8805557575';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact AI Mobile Gallery at Shop no-2, Amba Vatica Society, NIBM Road, Pune 411048. Call 8805557575 for mobile sales, repairs & accessories. Open Mon-Sun 10AM-8PM.');
    }
  }, []);
  return null;
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Store',
      details: [
        'Address: Shop no-2, Amba Vatica Society, Building A-1, NIBM Rd, Pune, Maharashtra 411048',
      ],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '8805557575',
        'WhatsApp Available',
        'Mon-Sun: 10 AM - 8 PM'
      ],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'mail.aimobilegallery@gmail.com',
        'support@aimobilegallery.com',
        'sales@aimobilegallery.com'
      ],
      action: 'Send Email'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 6:00 PM' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }

    // Save to database
    const { error } = await supabase
      .from('contact_submissions')
      .insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone?.trim() || null,
        message: formData.message.trim()
      });

    if (error) {
      console.error('Error saving contact submission:', error);
    }

    const message = encodeURIComponent(
      `Contact Form Submission:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    
    window.open(`https://wa.me/918805557575?text=${message}`, '_blank');
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I have a question about your services.');
    window.open(`https://wa.me/918805557575?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen py-8">
      <ContactSEO />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for any questions, support, or to visit our store at Shop no-2, Amba Vatica Society, NIBM Road, Pune
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="service-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <info.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                        <div className="space-y-1 text-muted-foreground mb-4">
                          {info.details.map((detail, i) => (
                            <p key={i}>{detail}</p>
                          ))}
                        </div>
                        <Button size="sm" variant="outline">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Business Hours */}
              <Card className="service-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-6 h-6 text-primary mr-2" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((hours, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{hours.day}</span>
                        <span className="text-muted-foreground">{hours.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
                <Button variant="outline" className="w-full" onClick={() => window.open('tel:8805557575')}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: 8805557575
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Contact Form */}
              <Card className="service-card">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
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
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can we help you?"
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map Section */}
              <Card className="service-card">
                <CardHeader>
                  <CardTitle>Find Our Store</CardTitle>
                  <p className="text-muted-foreground">
                    Located in the heart of NIBM, Pune for easy access
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                      <p className="text-lg font-medium mb-2">Interactive Map</p>
                      <p className="text-muted-foreground mb-4">
                        Shop no-2, Amba Vatica Society, Building A-1, NIBM Rd, Pune, Maharashtra 411048
                      </p>
                      <Button onClick={() => window.open('https://share.google/p22PQcrOJA8486mvQ', '_blank')}>
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <Card className="service-card">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Do you provide warranty on repairs?</h4>
                  <p className="text-muted-foreground">Yes, we provide 3-6 months warranty on all repair services depending on the type of repair.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Can I get same-day repair service?</h4>
                  <p className="text-muted-foreground">Most common repairs like screen replacement and battery change can be completed within 2 hours.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Do you accept all mobile brands?</h4>
                  <p className="text-muted-foreground">Yes, we repair all smartphone brands including iPhone, Samsung, OnePlus, Xiaomi, and more.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                  <p className="text-muted-foreground">We accept cash, UPI, cards, and all major digital payment methods.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;