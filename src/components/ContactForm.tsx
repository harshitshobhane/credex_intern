
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const licenseTypes = [
  { value: "enterprise", label: "Enterprise Software" },
  { value: "cloud", label: "Cloud/SaaS Subscription" },
  { value: "desktop", label: "Desktop Applications" },
  { value: "server", label: "Server Licenses" },
  { value: "other", label: "Other" },
];

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      company: "",
      licenseType: "",
    };
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
      isValid = false;
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = "Please select a license type";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  
  const handleLicenseTypeChange = (value: string) => {
    setFormData({ ...formData, licenseType: value });
    if (errors.licenseType) {
      setErrors({ ...errors, licenseType: "" });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Form submitted successfully!",
          description: "We'll be in touch with you shortly.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          licenseType: "",
          message: "",
        });
      }, 1000);
    }
  };

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
              Ready to <span className="text-softsell-blue">Convert</span> Your Licenses to Cash?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Fill out the form below and one of our license specialists will get back to you within 24 hours with a valuation.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className={errors.company ? "border-red-500" : ""}
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="licenseType" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      License Type
                    </label>
                    <Select onValueChange={handleLicenseTypeChange} value={formData.licenseType}>
                      <SelectTrigger className={errors.licenseType ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select license type" />
                      </SelectTrigger>
                      <SelectContent>
                        {licenseTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.licenseType && <p className="text-red-500 text-xs mt-1">{errors.licenseType}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your software licenses..."
                    rows={5}
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-softsell-blue hover:bg-softsell-blue/90" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Get My Valuation"}
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                  By submitting this form, you agree to our <a href="#" className="text-softsell-blue hover:underline">Privacy Policy</a> and <a href="#" className="text-softsell-blue hover:underline">Terms of Service</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
