import FollowingList from "@/components/feed/FollowingList";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";

const page = () => {
  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md overflow-hidden bg-[#F0F0F0] text-gray-900">
      <div className="p-4 border-b border-gray-200 bg-[#fc7425] text-white">
        <h2 className="text-lg font-semibold">Following</h2>
      </div>
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search followers"
            className="pl-8 bg-white text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#833AB4] focus:outline-none"
          />
        </div>
      </div>
      <ScrollArea className="h-[300px] px-4 bg-white">
        <FollowingList heading={false} />
      </ScrollArea>
    </div>
  );
};

export default page;
