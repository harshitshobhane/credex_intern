
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "CTO",
      company: "InnoTech Solutions",
      image: "https://images.unsplash.com/photo-1615473967657-9dc21654efe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      quote: "TechTrade helped us recover over ₹35 lakhs from unused enterprise software licenses. Their process was seamless and their valuation was much higher than we expected. Absolutely brilliant service!",
      stars: 5
    },
    {
      name: "Priya Patel",
      role: "IT Director",
      company: "Nexus Finance Ltd",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
      quote: "After our company restructuring, we had dozens of unused licenses. TechTrade made the process of selling them incredibly easy and got us a great return on our initial investment.",
      stars: 5
    },
  ];

  return (
    <section id="testimonials" className="section bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            What Our <span className="text-softsell-blue">Customers</span> Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with TechTrade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-softsell-accent fill-softsell-accent" />
                ))}
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full mr-4 object-cover border-2 border-softsell-blue shadow-md"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
