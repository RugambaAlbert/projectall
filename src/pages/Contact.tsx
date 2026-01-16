import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const product = searchParams.get("product");
    if (product) {
      setFormData(prev => ({
        ...prev,
        subject: `Inquiry about ${product}`,
        message: `I am interested in learning more about your ${product} service. Please provide me with more information.`,
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
            <p className="text-xl max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Get in touch with us. We are here to help and answer any questions you may have.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                <div className="space-y-6">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Address</h3>
                          <a 
                            href="https://maps.google.com/?q=Kigali,Rwanda" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors duration-300"
                          >
                            B.P 4053 Kigali, Rwanda
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Phone</h3>
                          <a 
                            href="tel:+250788319829" 
                            className="text-muted-foreground hover:text-primary transition-colors duration-300 block"
                          >
                            +250 788 319 829
                          </a>
                          <a 
                            href="tel:+250788319830" 
                            className="text-muted-foreground hover:text-primary transition-colors duration-300 block"
                          >
                            +250 788 319 830
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <a 
                            href="mailto:info@coopecikirenga.rw" 
                            className="text-muted-foreground hover:text-primary transition-colors duration-300 block"
                          >
                            info@coopecikirenga.rw
                          </a>
                          <a 
                            href="mailto:support@coopecikirenga.rw" 
                            className="text-muted-foreground hover:text-primary transition-colors duration-300 block"
                          >
                            support@coopecikirenga.rw
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Working Hours</h3>
                          <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p className="text-muted-foreground">Saturday: 8:00 AM - 12:00 PM</p>
                          <p className="text-muted-foreground">Sunday: Closed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="What is this regarding?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your inquiry..."
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full hover:scale-[1.02] transition-transform duration-300"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Visit Our Office</h2>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082095!2d30.0023099!3d-1.9402778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xa9d3c7a00d062f59!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="COOPEC IKIRENGA Location"
                  className="w-full"
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
