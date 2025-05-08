
import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "CTO",
      company: "InnoTech Solutions",
      image: "https://images.unsplash.com/photo-1615473967657-9dc21654efe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      quote: "SoftSell helped us recover over ₹35 lakhs from unused enterprise software licenses. Their process was seamless and their valuation was much higher than we expected. Absolutely brilliant service!",
      stars: 5
    },
    {
      name: "Priya Patel",
      role: "IT Director",
      company: "Nexus Finance Ltd",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      quote: "After our company restructuring, we had dozens of unused licenses. SoftSell made the process of selling them incredibly easy and got us a great return on our initial investment.",
      stars: 5
    },
    {
      name: "Vikram Singh",
      role: "CFO",
      company: "GlobalTech India",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      quote: "The ROI with SoftSell is incredible. We were able to recover 60% of our original investment on software we weren't using anymore. Fast, professional and highly recommended.",
      stars: 5
    },
  ];

  return (
    <section id="testimonials" className="section py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-softsell-blue font-medium mb-2 animate-fade-in">DON'T JUST TAKE OUR WORD FOR IT</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4 animate-reveal">
            What Our <span className="text-softsell-blue">Customers</span> Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 animate-fade-in animation-delay-200">
            Here's what businesses across India have to say about their experience with SoftSell.
          </p>
        </div>

        <div className="mt-16 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-softsell-accent fill-softsell-accent" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <Avatar className="h-14 w-14 mr-4 border-2 border-softsell-blue shadow-md">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static transform-none flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" />
              <CarouselNext className="relative static transform-none flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" />
            </div>
          </Carousel>
        </div>

        
      </div>
    </section>
  );
};

export default TestimonialsSection;
