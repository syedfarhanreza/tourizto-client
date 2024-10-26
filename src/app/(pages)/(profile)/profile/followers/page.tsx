import MyFollowers from "@/components/feed/MyFollowers";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";

const page = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-[#F8F8F8] rounded-lg shadow-lg overflow-hidden text-gray-800">
      <div className="p-4 border-b border-gray-200 bg-[#fc7425] text-white">
        <h2 className="text-lg font-semibold">Followers</h2>
      </div>
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search followers"
            className="pl-8 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#833AB4] placeholder-gray-500"
          />
        </div>
      </div>
      <ScrollArea className="h-[300px] px-4 bg-white">
        <MyFollowers heading={false} />
      </ScrollArea>
    </div>
  );
};

export default page;
