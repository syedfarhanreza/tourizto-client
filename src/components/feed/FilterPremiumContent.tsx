"use client";
import { setPost } from "@/redux/features/post/post.slice";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { Switch } from "../ui/switch";

const FilterPremiumContent = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [isPremium, setIsPremium] = useState(false);
  const dispatch = useDispatch();

  const router = useRouter();
  const handleSetPremium = async () => {
    if (!user) return toast.error("Please login first");
    if (!user.isPremium) {
      return toast.error("Please buy premium to access premium content");
    }

    if (isPremium) {
      setIsPremium(false);
      router.push("/?premium=");
    } else {
      setIsPremium(true);
      router.push("/?premium=true");
    }

    dispatch(setPost({ post: [], new: true }));
  };

  return (
    <div
      className="relative w-[200px] h-[40px] group cursor-pointer transition-transform transform hover:scale-105 active:scale-95"
      onClick={handleSetPremium}
    >
      <div className="p-[3px] relative overflow-hidden flex items-center w-full h-full rounded-full z-20 bg-gradient-to-r animate-shiftGradient shadow-md">
        <div className="px-[8px] w-full h-full relative z-20 rounded-full flex items-center gap-[12px] bg-white bg-opacity-20 backdrop-blur-sm transition-colors duration-500 hover:bg-opacity-40">
          <span className="text-white font-[600] text-sm mr-2">Premium Content</span>
          <Switch
            checked={isPremium}
            className={`bg-white rounded-full transform transition-transform duration-300 ${
              isPremium ? "translate-x-4" : "translate-x-0"
            }`}
          />
        </div>
        <div className="absolute top-0 left-0 w-[180px] h-[180px] rounded-full opacity-50 transition-all duration-500 ease-in-out bg-gradientRed group-hover:bg-gradientOrange group-hover:scale-110 animate-glowPulse"></div>
      </div>
    </div>
  );
};

export default FilterPremiumContent;
