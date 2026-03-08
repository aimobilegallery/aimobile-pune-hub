import { Shield, Users, Award, Clock, Target, Eye, Heart } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const About = () => {
  const values = [
    { icon: Shield, title: 'Quality Assurance', description: 'We ensure all products meet the highest quality standards with genuine warranty.' },
    { icon: Users, title: 'Customer First', description: 'Our customers are at the heart of everything we do, ensuring satisfaction always.' },
    { icon: Award, title: 'Expert Service', description: 'Our skilled technicians provide professional repair services with precision.' },
    { icon: Clock, title: 'Fast Delivery', description: 'Quick turnaround times for repairs and instant delivery for products.' }
  ];

  const team = [
    { name: 'Rohit Kumar', role: 'Store Manager', experience: '8+ Years Experience', specialization: 'Mobile Sales & Customer Relations' },
    { name: 'Pradeep Singh', role: 'Senior Technician', experience: '6+ Years Experience', specialization: 'All Brand Repairs & Software' },
    { name: 'Anjali Sharma', role: 'Customer Support', experience: '4+ Years Experience', specialization: 'After-Sales Service & Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                About <span className="gradient-text">AI Mobile Gallery</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                Located in the heart of NIBM, Pune, AI Mobile Gallery has been serving the community 
                with reliable mobile solutions since 2019. We pride ourselves on being your trusted 
                partner for all mobile-related needs.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="glass-card p-4">
                  <h3 className="text-2xl font-bold gradient-text mb-1">10,000+</h3>
                  <p className="text-muted-foreground text-sm">Satisfied Customers</p>
                </div>
                <div className="glass-card p-4">
                  <h3 className="text-2xl font-bold gradient-text mb-1">5+</h3>
                  <p className="text-muted-foreground text-sm">Years of Excellence</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-brand-purple/10 rounded-2xl blur-xl" />
                <img 
                  src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=600&fit=crop" 
                  alt="About AI Mobile Gallery"
                  className="rounded-2xl relative z-10 border border-border"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <StaggerItem>
              <div className="glass-card p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide fast, affordable, and reliable mobile solutions under one roof. 
                  We strive to make technology accessible to everyone in our community while 
                  maintaining the highest standards of service and customer satisfaction.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-card p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become NIBM's most trusted and go-to destination for mobile sales, repairs, 
                  and accessories. We envision a future where every customer leaves with complete 
                  satisfaction and becomes part of our extended family.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">The principles that guide us in delivering exceptional service</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="glass-card p-6 text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Story</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>AI Mobile Gallery began as a small dream in 2019 when our founder realized that the NIBM area lacked a reliable, customer-focused mobile service center. Starting with just a small shop and a passion for technology, we set out to change that.</p>
            <p>Over the years, we've grown from a simple repair shop to a comprehensive mobile solution center. Our commitment to genuine products, fair pricing, and honest service has earned us the trust of over 10,000 customers in the NIBM community.</p>
            <p>Today, we're proud to be known as the go-to destination for mobile sales, repairs, and accessories in NIBM, Pune. Our team of skilled professionals continues to uphold the values that started this journey - integrity, quality, and customer satisfaction.</p>
          </div>
        </AnimatedSection>
      </section>

      {/* Team */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">The experts behind our exceptional service</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <StaggerItem key={index}>
                <div className="glass-card p-8 text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-brand-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-1">{member.experience}</p>
                  <p className="text-sm text-muted-foreground">{member.specialization}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

export default About;
