import { Shield, Users, Award, Clock, Target, Eye, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import smartphonesImage from '@/assets/smartphones.jpg';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We ensure all products meet the highest quality standards with genuine warranty.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do, ensuring satisfaction always.'
    },
    {
      icon: Award,
      title: 'Expert Service',
      description: 'Our skilled technicians provide professional repair services with precision.'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround times for repairs and instant delivery for products.'
    }
  ];

  const team = [
    {
      name: 'Rohit Kumar',
      role: 'Store Manager',
      experience: '8+ Years Experience',
      specialization: 'Mobile Sales & Customer Relations'
    },
    {
      name: 'Pradeep Singh',
      role: 'Senior Technician',
      experience: '6+ Years Experience',
      specialization: 'All Brand Repairs & Software'
    },
    {
      name: 'Anjali Sharma',
      role: 'Customer Support',
      experience: '4+ Years Experience',
      specialization: 'After-Sales Service & Support'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About AI Mobile Gallery
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Located in the heart of NIBM, Pune, AI Mobile Gallery has been serving the community 
                with reliable mobile solutions since 2019. We pride ourselves on being your trusted 
                partner for all mobile-related needs.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">10,000+</h3>
                  <p className="text-muted-foreground">Satisfied Customers</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">5+</h3>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={smartphonesImage} 
                alt="About AI Mobile Gallery"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="service-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-primary mr-4" />
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide fast, affordable, and reliable mobile solutions under one roof. 
                  We strive to make technology accessible to everyone in our community while 
                  maintaining the highest standards of service and customer satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-primary mr-4" />
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become NIBM's most trusted and go-to destination for mobile sales, repairs, 
                  and accessories. We envision a future where every customer leaves with complete 
                  satisfaction and becomes part of our extended family.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide us in delivering exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="service-card text-center">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              AI Mobile Gallery began as a small dream in 2019 when our founder realized that 
              the NIBM area lacked a reliable, customer-focused mobile service center. Starting 
              with just a small shop and a passion for technology, we set out to change that.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Over the years, we've grown from a simple repair shop to a comprehensive mobile 
              solution center. Our commitment to genuine products, fair pricing, and honest 
              service has earned us the trust of over 10,000 customers in the NIBM community.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Today, we're proud to be known as the go-to destination for mobile sales, repairs, 
              and accessories in NIBM, Pune. Our team of skilled professionals continues to 
              uphold the values that started this journey - integrity, quality, and 
              customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              The experts behind our exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="service-card text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-1">{member.experience}</p>
                  <p className="text-sm text-muted-foreground">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;