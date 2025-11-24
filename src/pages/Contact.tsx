import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-primary text-white py-20">
        <div className="section-container text-center">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch for a free estimate on mobile home leveling, anchoring, and repair services
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-container py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Request a Free Estimate</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input type="tel" placeholder="(689) 273-0135" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Service Needed</label>
                  <Input placeholder="Mobile home leveling, anchoring, etc." />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your mobile home service needs..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full btn-primary" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Phone</h3>
                    <a href="tel:+16892730135" className="text-lg text-primary hover:underline">
                      (689) 273-0135
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Call us for immediate assistance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Address</h3>
                    <p className="text-lg">1757 S Village Dr</p>
                    <p className="text-lg">Deltona, FL 32725</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Serving Central Florida
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Business Hours</h3>
                    <p className="text-lg">Monday - Saturday: 7am - 7pm</p>
                    <p className="text-lg">Sunday: By Appointment</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Emergency services available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-primary text-white">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-4 text-white">Service Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Polk County",
                    "Lake County",
                    "Volusia County",
                    "Sumter County",
                    "Orange County",
                    "Hillsborough County",
                    "Osceola County",
                    "Manatee County",
                  ].map((county) => (
                    <div key={county} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      <span>{county}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-container pb-16">
        <Card>
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5!2d-81.2!3d28.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU0JzAwLjAiTiA4McKwMTInMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Central Florida Level Up Location"
            ></iframe>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Contact;
