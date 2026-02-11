import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().regex(/^[\d\s+()-]{0,20}$/, 'Please enter a valid phone number').optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters')
});

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
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const contactInfo = [
    { icon: MapPin, title: 'Visit Our Store', details: ['Address: Shop no-2, Amba Vatica Society, Building A-1, NIBM Rd, Pune, Maharashtra 411048'], action: 'Get Directions' },
    { icon: Phone, title: 'Call Us', details: ['8805557575', 'WhatsApp Available', 'Mon-Sun: 10 AM - 8 PM'], action: 'Call Now' },
    { icon: Mail, title: 'Email Us', details: ['mail.aimobilegallery@gmail.com', 'support@aimobilegallery.com', 'sales@aimobilegallery.com'], action: 'Send Email' }
  ];

  const businessHours = [
    { day: 'Monday - Saturday', hours: '10:00 AM - 11:30 PM' },
    { day: 'Sunday', hours: '10:00 AM - 11:30 PM' },
  ];

  const googleReviews = [
    { name: 'Hatim Bhimpur', rating: 5, text: 'The best shop nearby bakers point salunkhe and giving best price' },
    { name: 'Shahrukh Shaikh', rating: 5, text: 'Good ambience clean and all iPhone models available' },
    { name: 'Abrar Karigar', rating: 5, text: 'I get good service also.' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationResult = contactSchema.safeParse({
      name: formData.name.trim(), email: formData.email.trim(),
      phone: formData.phone?.trim() || '', message: formData.message.trim()
    });
    if (!validationResult.success) {
      toast({ title: "Validation Error", description: validationResult.error.errors[0].message, variant: "destructive" });
      return;
    }
    const validatedData = validationResult.data;
    const { error } = await supabase.from('contact_submissions').insert({
      name: validatedData.name, email: validatedData.email, phone: validatedData.phone || null, message: validatedData.message
    });
    if (error) {
      if (import.meta.env.DEV) console.error('Error saving contact submission:', error);
      toast({ title: "Submission failed", description: "Unable to process your request. Please try again.", variant: "destructive" });
      return;
    }
    const message = encodeURIComponent(`Contact Form Submission:\nName: ${validatedData.name}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone}\nMessage: ${validatedData.message}`);
    window.open(`https://wa.me/918805557575?text=${message}`, '_blank');
    toast({ title: "Message sent successfully!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for any questions, support, or to visit our store at Shop no-2, Amba Vatica Society, NIBM Road, Pune
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="glass-card p-6 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{info.title}</h3>
                      <div className="space-y-1 text-muted-foreground mb-4">
                        {info.details.map((detail, i) => (<p key={i}>{detail}</p>))}
                      </div>
                      <Button size="sm" variant="outline" className="border-white/20 text-muted-foreground hover:text-foreground hover:bg-white/5">{info.action}</Button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Business Hours */}
              <div className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-3">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((hours, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium text-foreground text-sm">{hours.day}</span>
                      <span className="text-muted-foreground text-sm">{hours.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button onClick={handleWhatsApp} className="w-full bg-green-500 hover:bg-green-600 text-white neon-glow" style={{ boxShadow: '0 0 20px hsl(142 76% 36% / 0.4)' }}>
                  <MessageCircle className="w-4 h-4 mr-2" />Chat on WhatsApp
                </Button>
                <Button variant="outline" className="w-full border-white/20 text-foreground hover:bg-white/5" onClick={() => window.open('tel:8805557575')}>
                  <Phone className="w-4 h-4 mr-2" />Call Now: 8805557575
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Contact Form */}
              <div className="glass-card p-8">
                <h2 className="text-xl font-bold mb-1 text-foreground">Send us a Message</h2>
                <p className="text-muted-foreground mb-6 text-sm">Fill out the form below and we'll get back to you as soon as possible.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Full Name *</label>
                      <Input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" required className="premium-input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Email Address *</label>
                      <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" required className="premium-input" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Phone Number</label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" className="premium-input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Message *</label>
                    <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="How can we help you?" rows={6} required className="premium-input" />
                  </div>
                  <Button type="submit" size="lg" className="w-full neon-glow">
                    <Send className="w-4 h-4 mr-2" />Send Message
                  </Button>
                </form>
              </div>

              {/* Map Section */}
              <div className="glass-card p-6">
                <h2 className="text-lg font-bold mb-1 text-foreground">Find Our Store</h2>
                <p className="text-muted-foreground text-sm mb-4">Located in the heart of NIBM, Pune for easy access</p>
                <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5!2d73.9082!3d18.4762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebfeba18176d%3A0x138f0220d687a45f!2sAI%20Mobile%20Gallery!5e0!3m2!1sen!2sin!4v1702000000000!5m2!1sen!2sin"
                    width="100%" height="100%" style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="AI Mobile Gallery Location"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-muted-foreground mb-3 text-sm">Shop no-2, Amba Vatica Society, Building A-1, NIBM Rd, Pune 411048</p>
                  <Button className="neon-glow" onClick={() => window.open('https://maps.google.com/?q=AI+Mobile+Gallery+NIBM+Pune', '_blank')}>
                    <MapPin className="w-4 h-4 mr-2" />Get Directions
                  </Button>
                </div>
              </div>

              {/* Google Reviews */}
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-foreground">Customer Reviews</h2>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold text-foreground">5.0</span>
                    <span className="text-muted-foreground text-sm">(6 reviews)</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {googleReviews.map((review, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-brand-purple/20 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-primary">{review.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{review.name}</p>
                          <div className="flex">
                            {[1,2,3,4,5].map((star) => (
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
                  <Button variant="outline" className="border-white/20 text-muted-foreground hover:text-foreground hover:bg-white/5" onClick={() => window.open('https://g.page/r/CV-kh9YgAo8TEBk/review', '_blank')}>
                    Write a Review on Google
                  </Button>
                </div>
              </div>

              {/* FAQ */}
              <div className="glass-card p-6">
                <h2 className="text-lg font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Do you provide warranty on repairs?</h4>
                    <p className="text-muted-foreground text-sm">Yes, we provide 3-6 months warranty on all repair services depending on the type of repair.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Can I get same-day repair service?</h4>
                    <p className="text-muted-foreground text-sm">Most common repairs like screen replacement and battery change can be completed within 2 hours.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Do you accept all mobile brands?</h4>
                    <p className="text-muted-foreground text-sm">Yes, we repair all smartphone brands including iPhone, Samsung, OnePlus, Xiaomi, and more.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">What payment methods do you accept?</h4>
                    <p className="text-muted-foreground text-sm">We accept cash, UPI, cards, and all major digital payment methods.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
