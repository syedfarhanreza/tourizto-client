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
    <div className="container mx-auto px-6 py-12 space-y-16">
      <header className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight text-primaryMat">
          Discover. Share. Explore.
        </h1>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          Join our community of travelers and explore the world through
          personalized guides, engaging stories, and invaluable tips from fellow
          adventurers.
        </p>
      </header>

      {/* Our Purpose Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 p-8 rounded-lg shadow-lg">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-primaryMat">Our Purpose</h2>
          <p className="text-lg text-gray-600">
            At Travel Tips & Destination Guides, we aim to create a vibrant
            community where travelers connect, share experiences, and uncover
            hidden treasures. We believe travel enriches lives, fosters
            cultural exchange, and builds memories that last a lifetime.
          </p>
          <p className="text-lg text-gray-600">
            Whether you're a seasoned explorer or planning your first adventure,
            we provide tools and inspiration to make your journey unforgettable.
          </p>
        </div>
        <Image
          src="/images/mission.jpg"
          alt="Travelers exploring a new destination"
          width={600}
          height={400}
          className="rounded-lg shadow-md object-cover"
        />
      </section>

     
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-center text-primaryMat">
          What We Provide
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map(
            ({ description, icon: Icon, alt, src, title }, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex items-center space-x-4">
                  <Icon className="w-6 h-6 text-primaryMat" />
                  <CardTitle className="text-xl font-semibold">{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-200">{description}</p>
                  <Image
                    src={src}
                    alt={alt}
                    width={300}
                    height={200}
                    className="rounded-md w-full h-48 object-cover"
                  />
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center bg-gray-100 text-gray-800 p-8 rounded-lg shadow-lg">
        <ul className="space-y-6 text-lg">
          <li className="flex items-center space-x-3">
            <Users className="w-6 h-6 text-primaryMat" />
            <span>
              Genuine travel experiences shared by travelers from various
              backgrounds.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <MapPin className="w-6 h-6 text-primaryMat" />
            <span>
              Detailed destination guides for efficient and well-informed
              planning.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <Globe className="w-6 h-6 text-primaryMat" />
            <span>
              Interactive features to connect with fellow explorers worldwide.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <BookOpen className="w-6 h-6 text-primaryMat" />
            <span>
              Customized profiles to showcase your travels and inspire others.
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <CreditCard className="w-6 h-6 text-primaryMat" />
            <span>
              Access to premium content for detailed insights and travel deals.
            </span>
          </li>
        </ul>
        <Image
          src="/images/why_choose.png"
          alt="Collage of travel experiences"
          width={600}
          height={400}
          className="rounded-lg shadow-md object-cover"
        />
      </section>

      <section className="bg-primaryMat rounded-lg p-8 text-center space-y-8 shadow-md">
        <h2 className="text-4xl font-bold text-white">
          Ready to Embark on Your Next Journey?
        </h2>
        <p className="text-lg text-white max-w-2xl mx-auto">
          Become part of our community today to share your travel stories,
          explore new destinations, and connect with like-minded adventurers.
          Whether you're a seasoned traveler or just starting out, we offer
          endless possibilities to enhance your journey.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild className="text-primaryMat">
            <Link href="/signup">Sign Up Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-primaryMat">
            <Link href="/explore">Explore Content</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsView;
