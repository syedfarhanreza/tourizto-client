"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactUsView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for reaching out to us. We'll respond as soon as possible.");
  };

  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* Header Section */}
      <header className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight text-primaryMat">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have any inquiries or thoughts to share? We’re here to assist. Reach out to our team for help, collaborations, or just to connect!
        </p>
      </header>

      {/* Contact Form Section */}
      <section className="grid md:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-lg shadow-lg">
        <Card>
          <CardHeader>
            <CardTitle>Drop Us a Line</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button className="bg-primaryMat hover:bg-primaryMat/70" type="submit">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Our Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primaryMat" />
                <span>456 Explorer Ave, Journey City, 67890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primaryMat" />
                <span>+1 (123) 987-6543</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primaryMat" />
                <span>support@tourizto.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-primaryMat" />
                <span>www.tourizto.com</span>
              </div>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card>
            <CardHeader>
              <CardTitle>Business Hours</CardTitle>
            </CardHeader>
            <CardContent className="text-lg">
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 3:00 PM</p>
              <p>Sunday: Closed</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-center text-primaryMat">
          Common Questions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>How can I sign up?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                To sign up, click the &quot;Sign Up&quot; button at the top of our homepage. Follow the steps to enter your information and create your account.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Can I share my travel stories?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                After signing up, you can post your travel stories through your personal dashboard. We invite all members to share their adventures!
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>What does premium membership offer?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Premium members get an ad-free experience, access to special content, early feature releases, and exclusive travel deals from partners.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>How do I report inappropriate content?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                If you spot any content that breaks our rules, click the &quot;Report&quot; button next to it or contact support directly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactUsView;
