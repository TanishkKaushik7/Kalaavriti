import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6">
          Contact <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Us</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you. Get in touch with us for any queries, collaborations, or just to say hello!
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <Input placeholder="Your first name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <Input placeholder="Your last name" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" placeholder="your.email@example.com" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input type="tel" placeholder="+91 98765 43210" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Input placeholder="What's this about?" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea 
                placeholder="Tell us more about your inquiry..."
                className="min-h-[120px]"
              />
            </div>
            
            <Button className="w-full bg-gradient-to-r from-primary to-secondary">
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">hello@kalaavritti.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      123 Craft Street<br />
                      Art District, New Delhi<br />
                      India - 110001
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start">
                  📘 Facebook
                </Button>
                <Button variant="outline" className="justify-start">
                  📷 Instagram
                </Button>
                <Button variant="outline" className="justify-start">
                  🐦 Twitter
                </Button>
                <Button variant="outline" className="justify-start">
                  📺 YouTube
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Questions</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">How do I track my order?</h4>
              <p className="text-muted-foreground">
                Once your order is shipped, you'll receive a tracking number via email. You can use this to track your package.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">What's your return policy?</h4>
              <p className="text-muted-foreground">
                We offer a 30-day return policy for unused items in original condition. Custom orders are non-returnable.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Do you ship internationally?</h4>
              <p className="text-muted-foreground">
                Yes! We ship worldwide. International shipping costs and delivery times vary by location.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Can I customize products?</h4>
              <p className="text-muted-foreground">
                Many of our products can be customized. Contact us with your requirements and we'll work with our artisans.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;