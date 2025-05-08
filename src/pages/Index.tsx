import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { FadeIn, StaggerContainer, StaggerItem, ScrollToSection } from '@/components/ui/animated';
import { scrollToSection } from '@/lib/utils';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SoftShell - Your Trusted Software Solutions Partner</title>
        <meta name="description" content="SoftShell provides innovative software solutions for businesses. We specialize in custom software development, web applications, and digital transformation services." />
        <meta name="keywords" content="software development, web applications, digital transformation, custom software, IT solutions" />
        <meta property="og:title" content="SoftShell - Your Trusted Software Solutions Partner" />
        <meta property="og:description" content="Innovative software solutions for businesses. Custom development, web applications, and digital transformation services." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SoftShell - Your Trusted Software Solutions Partner" />
        <meta name="twitter:description" content="Innovative software solutions for businesses. Custom development, web applications, and digital transformation services." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        <StaggerContainer>
          <ScrollToSection id="hero">
            <HeroSection />
          </ScrollToSection>
          
          <ScrollToSection id="how-it-works">
            <HowItWorksSection />
          </ScrollToSection>
          
          <ScrollToSection id="why-choose-us">
            <WhyChooseUsSection />
          </ScrollToSection>
          
          <ScrollToSection id="testimonials">
            <TestimonialsSection />
          </ScrollToSection>
          
          <ScrollToSection id="contact">
            <ContactForm />
          </ScrollToSection>
        </StaggerContainer>
        
        <FadeIn>
          <Footer />
        </FadeIn>
        <ChatWidget />
      </div>
    </>
  );
};

export default Index;
