"use client";

import { useAppSelector } from "@/redux/hook";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";
import CreatePostModal from "../PostCreate/CreatePost";
import { Button } from "../ui/button";

const ContentBar = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="w-full p-4 hidden lg:block">
      <h2 className="font-semibold mb-4">Seemed Stories</h2>

      {user ? (
        <CreatePostModal />
      ) : (
        <Button
          variant="outline"
          className="w-full mb-4 bg-primaryMat text-white"
          onClick={() => toast.error("Login first to create post")}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          What's on your mind?
        </Button>
      )}
    </div>
  );
};

export default ContentBar;