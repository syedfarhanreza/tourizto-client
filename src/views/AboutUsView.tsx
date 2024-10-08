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
    title: "Destination Insights",
    description:
      "Delve into detailed guides on global destinations, created by seasoned explorers. Whether it's hidden gems or popular landmarks, our guides have all the information you need.",
    src: "/images/destination.jpg",
    alt: "Example of a destination guide",
  },
  {
    icon: Users,
    title: "Traveler Connections",
    description:
      "Engage with a community of travelers, share your adventures, and gain inspiration for future journeys. Participate in discussions, ask questions, and forge connections with fellow globetrotters.",
    src: "/images/community.jfif",
    alt: "Example of community interaction",
  },
  {
    icon: BookOpen,
    title: "Travel Narratives",
    description:
      "Read and contribute personal travel stories that offer unique viewpoints and bring destinations to life. Let the experiences of others inspire your next great adventure.",
    src: "/images/story.jpg",
    alt: "Example of a personal travel story",
  },
  {
    icon: CreditCard,
    title: "Exclusive Membership",
    description:
      "Unlock premium content with our membership options. Enjoy ad-free browsing, early access to new features, and special discounts on travel deals.",
    src: "/images/premium_content.webp",
    alt: "Example of premium content",
  },
  {
    icon: Globe,
    title: "Worldwide Coverage",
    description:
      "Our platform spans destinations across the globe. From bustling cities to remote villages, find tips and insights from travelers with firsthand experience.",
    src: "/images/story.jpg",
    alt: "Map of the world highlighting travel destinations",
  },
  {
    icon: Compass,
    title: "Planning Resources",
    description:
      "Access our range of travel tools, including itinerary planners, packing lists, and budget calculators. These tools are designed to simplify and streamline your trip preparation.",
    src: "/images/tools.webp",
    alt: "User interface for travel planning tools",
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
          Inspiring travelers to explore, share stories, and create meaningful
          experiences around the globe.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Our Purpose</h2>
          <p className="text-lg text-muted-foreground">
            At Travel Tips & Destination Guides, we strive to cultivate a
            dynamic community of avid travelers. Our platform bridges the gap
            between wanderers, enabling them to share their adventures, offer
            advice, and interact with others who share their passion for
            discovery.
          </p>
          <p className="text-lg text-muted-foreground">
            We believe travel not only opens new horizons but also fosters
            understanding and creates cherished memories. Our mission is to
            enrich every journey by offering a space where travelers can learn
            from each other&apos;s experiences and uncover hidden treasures
            worldwide.
          </p>
        </div>
        <Image
          src="/images/mission.jpg"
          alt="Group of travelers discovering a new place"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-center">Our Offerings</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map(
            ({ description, icon: Icon, alt, src, title }, index) => (
              <Card key={index + "our-offerings"}>
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
        <h2 className="text-3xl font-semibold text-center">
          Why Choose Travel Tips?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full p-1 mr-2 mt-1">
                <Users className="w-4 h-4" />
              </span>
              <span>
                Genuine travel insights from real people with diverse
                backgrounds
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full p-1 mr-2 mt-1">
                <MapPin className="w-4 h-4" />
              </span>
              <span>
                Thorough destination guides for well-informed travel planning
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full p-1 mr-2 mt-1">
                <Globe className="w-4 h-4" />
              </span>
              <span>
                Community-driven features to engage with fellow travelers
                worldwide
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full p-1 mr-2 mt-1">
                <BookOpen className="w-4 h-4" />
              </span>
              <span>
                Personal profiles to showcase your travel experiences and
                inspire others
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-primary-foreground rounded-full p-1 mr-2 mt-1">
                <CreditCard className="w-4 h-4" />
              </span>
              <span>
                Exclusive membership perks, including premium content and
                special travel offers
              </span>
            </li>
          </ul>
          <Image
            src="/images/why_choose.jpg"
            alt="A collage of travel moments"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="bg-muted rounded-lg p-8 text-center space-y-6">
        <h2 className="text-3xl font-semibold">Join Us on Your Next Journey</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Become a part of our vibrant community today and begin sharing your
          travel stories, exploring new destinations, and connecting with
          like-minded adventurers. Whether you&apos;re an experienced traveler or
          planning your first trip, Travel Tips & Destination Guides is your
          gateway to more fulfilling travel experiences.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/signup">Join Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/explore">Discover More</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsView;
