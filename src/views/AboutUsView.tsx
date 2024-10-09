import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Compass,
  CreditCard,
  Globe,
  MapPin,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    icon: MapPin,
    title: "Destination Guides",
    description:
      "Discover in-depth guides for global destinations, curated by seasoned travelers. From hidden gems to top attractions, our guides provide comprehensive insights.",
    src: "/images/destination.jpg",
    alt: "Destination guide example",
  },
  {
    icon: Users,
    title: "Community Interaction",
    description:
      "Engage with a community of travel enthusiasts, share your experiences, and get inspired for new adventures. Join discussions, ask for advice, and meet fellow travelers.",
    src: "/images/community.jpg",
    alt: "Community interaction example",
  },
  {
    icon: BookOpen,
    title: "Personal Stories",
    description:
      "Read and share captivating travel stories that bring destinations to life. Discover new perspectives through personal journeys and plan your own unique adventures.",
    src: "/images/story.jpeg",
    alt: "Personal story example",
  },
  {
    icon: CreditCard,
    title: "Premium Content",
    description:
      "Unlock exclusive features and access in-depth content with a premium membership. Enjoy a seamless experience with ad-free browsing, early feature access, and travel deals.",
    src: "/images/premium_content.png",
    alt: "Premium content example",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Our platform spans all continents, offering insights on everything from bustling cities to remote villages. Get invaluable tips from a diverse community of travelers worldwide.",
    src: "/images/global_story.jpg",
    alt: "World map with highlighted destinations",
  },
  {
    icon: Compass,
    title: "Travel Planning Tools",
    description:
      "Make use of our extensive planning tools, from itinerary builders to budget calculators. Simplify your travel planning process with our easy-to-use resources.",
    src: "/images/tools.webp",
    alt: "Travel planning tools interface",
  },
];

const AboutUsView = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          About Travel Tips & Destination Guides
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Enabling travelers to share their journeys, uncover new destinations, and create unforgettable memories.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Our Purpose</h2>
          <p className="text-lg text-muted-foreground">
            At Travel Tips & Destination Guides, we strive to create a vibrant platform for travel lovers. Our goal is to connect adventurers worldwide, helping them exchange stories, travel tips, and experiences.
          </p>
          <p className="text-lg text-muted-foreground">
            We believe travel opens minds, builds bridges between cultures, and forges lifelong memories. Our mission is to enrich every trip by offering a place where travelers can share experiences and uncover hidden treasures.
          </p>
        </div>
        <Image
          src="/images/mission.jpg"
          alt="Travelers exploring a new destination"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">What We Provide</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map(
            ({ description, icon: Icon, alt, src, title }, index) => (
              <Card key={index + "why choose us"}>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-lg flex items-center">
                    <Icon className="w-5 h-5 mr-2" />
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {description}
                  </p>
                  <Image
                    src={src}
                    alt={alt}
                    width={300}
                    height={150}
                    className="rounded-md mx-auto w-full aspect-[300/150] object-cover"
                  />
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full p-1 mr-2 mt-1">
                <Users className="w-4 h-4" />
              </span>
              <span>
                Genuine travel experiences shared by travelers from various backgrounds
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full p-1 mr-2 mt-1">
                <MapPin className="w-4 h-4" />
              </span>
              <span>
                Detailed destination guides for efficient and well-informed travel planning
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full p-1 mr-2 mt-1">
                <Globe className="w-4 h-4" />
              </span>
              <span>
                Interactive features to connect with fellow explorers globally
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full p-1 mr-2 mt-1">
                <BookOpen className="w-4 h-4" />
              </span>
              <span>
                Customized profiles to showcase your travels and inspire others
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full p-1 mr-2 mt-1">
                <CreditCard className="w-4 h-4" />
              </span>
              <span>
                Access to premium content for detailed insights, exclusive advice, and special deals
              </span>
            </li>
          </ul>
          <Image
            src="/images/why_choose.png"
            alt="Collage of travel experiences"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="bg-muted rounded-lg p-8 text-center space-y-6">
        <h2 className="text-3xl font-semibold">Ready to Embark on Your Next Journey?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Become part of our community today to share your travel stories, explore new destinations, and connect with like-minded adventurers. Whether you're a seasoned traveler or just starting out, Travel Tips & Destination Guides offers endless possibilities to enhance your journey.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/signup">Sign Up Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/explore">Explore Content</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsView;
