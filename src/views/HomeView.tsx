import ContentBar from "@/components/feed/ContentBar";
import FeedContent from "@/components/feed/FeedContent";
import FilterBar from "@/components/feed/FilterBar";
import HeroSection from "@/components/feed/HeroSection";
import UserConnections from "@/components/feed/UserConnections";

const HomeView = () => {
  return (
    <div className="w-full h-[calc(100vh-107px)] flex p-10">
      <HeroSection />
      <FilterBar />
      <FeedContent />
      <UserConnections/>
    </div>
  );
};

export default HomeView;
