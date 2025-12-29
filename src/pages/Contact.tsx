import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  phone: z.string()
    .regex(/^[\d\s+()-]{0,20}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

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
    { day: 'Monday - Saturday', hours: '10:00 AM - 11:30 PM' },
    { day: 'Sunday', hours: '10:00 AM - 11:30 PM' },
  ];

  const googleReviews = [
    {
      name: 'Hatim Bhimpur',
      rating: 5,
      text: 'The best shop nearby bakers point salunkhe and giving best price'
    },
    {
      name: 'Shahrukh Shaikh',
      rating: 5,
      text: 'Good ambience clean and all iPhone models available'
    },
    {
      name: 'Abrar Karigar',
      rating: 5,
      text: 'I get good service also.'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data with zod
    const validationResult = contactSchema.safeParse({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone?.trim() || '',
      message: formData.message.trim()
    });

    if (!validationResult.success) {
      toast({
        title: "Validation Error",
        description: validationResult.error.errors[0].message,
        variant: "destructive"
      });
      return;
    }

    const validatedData = validationResult.data;

    // Save to database
    const { error } = await supabase
      .from('contact_submissions')
      .insert({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        message: validatedData.message
      });

    if (error) {
      // Only log in development mode
      if (import.meta.env.DEV) {
        console.error('Error saving contact submission:', error);
      }
      toast({
        title: "Submission failed",
        description: "Unable to process your request. Please try again.",
        variant: "destructive"
      });
      return;
    }

    const message = encodeURIComponent(
      `Contact Form Submission:\nName: ${validatedData.name}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone}\nMessage: ${validatedData.message}`
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
                  <div className="aspect-video w-full rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5!2d73.9082!3d18.4762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebfeba18176d%3A0x138f0220d687a45f!2sAI%20Mobile%20Gallery!5e0!3m2!1sen!2sin!4v1702000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AI Mobile Gallery Location"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-muted-foreground mb-3">
                      Shop no-2, Amba Vatica Society, Building A-1, NIBM Rd, Pune 411048
                    </p>
                    <Button onClick={() => window.open('https://maps.google.com/?q=AI+Mobile+Gallery+NIBM+Pune', '_blank')}>
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Google Reviews Section */}
              <Card className="service-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Customer Reviews</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-bold text-lg">5.0</span>
                      <span className="text-muted-foreground">(6 reviews)</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    See what our customers say about us on Google
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {googleReviews.map((review, index) => (
                      <div key={index} className="p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                            <span className="font-semibold text-primary">{review.name.charAt(0)}</span>
                          </div>
                          <div>
                            <p className="font-medium">{review.name}</p>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{`"${review.text}"`}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="outline" onClick={() => window.open('https://g.page/r/CV-kh9YgAo8TEBk/review', '_blank')}>
                      Write a Review on Google
                    </Button>
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