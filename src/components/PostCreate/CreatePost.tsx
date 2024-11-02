"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useCratePostMutation } from "@/redux/features/post/post.api";
import { addNewPost } from "@/redux/features/post/post.slice";
import { useAppSelector } from "@/redux/hook";
import { IPostCreate } from "@/types/post";
import { upLoadSingeImage } from "@/utils/uploadSingleImage";
import { Upload } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PrimeReactProvider } from "primereact/api";
import { Editor } from "primereact/editor";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import CategorySelector from "./CategorySelector";

export default function CreatePostModal() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isPremium, setIsPremium] = useState(false);

  const [createPost] = useCratePostMutation();

  const [imageLoading, setImageLoading] = useState(false);

  const { token, user } = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();

  const router = useRouter();

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!token || !user || imageLoading) return;
    if (images.length >= 4) return;
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      setImageLoading(true);
      const { data } = await upLoadSingeImage(file, token);
      setImages((prev) => [...prev, data]);
      setImageLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!token || !user) return toast.error("Login first to create post");
    if (imageLoading) return;
    if (!content) {
      return toast.error("Please write something in content");
    }

    if (images.length === 0) {
      return toast.error("Please upload at least one image");
    }

    if (categories.length === 0) {
      return toast.error("Please select at least one category");
    }

    const toastId = toast.loading("Please wait...");
    try {
      const payload: IPostCreate = {
        content,
        images,
        categories,
        premium: isPremium,
      };
      const { data } = await createPost(payload);

      toast.dismiss(toastId);
      toast.success("Post created successfully");
      console.log(data);

      if (data && data.data) {
        const payload = {
          ...data.data,
          user,
        };
        dispatch(addNewPost(payload));
      }
      router.push(`/?page=1`);

      setOpen(false);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Something went wrong");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex items-center gap-2 p-2 border border-orange-300 rounded-full shadow-sm cursor-pointer hover:bg-gray-950 transition">
          <Image
            src={user?.image || "/images/avatar.png"}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-gray-500">What's on your mind, {user?.firstName}?</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] max-h-[80vh] overflow-auto smoothBar">
        <DialogHeader>
          <DialogTitle>Create a New Travel Post</DialogTitle>
          <DialogDescription>
            Share your travel tips, guides, and stories with the community.
          </DialogDescription>
        </DialogHeader>

        <PrimeReactProvider>
          <div className="space-y-4 overflow-auto flex flex-col w-full gap-[15px]">
            <div className="flex flex-col gap-[10px]">
              <Label htmlFor="content">Your Travel Story</Label>
              <Editor
                value={content}
                style={{ height: "200px" }}
                onTextChange={(e) => setContent(e.htmlValue || "")}
              />
            </div>
            <CategorySelector
              onChange={(values) => {
                const value = values.map((item) => item._id);
                setCategories(value);
              }}
            />
            <div className="flex flex-col gap-[10px]">
              <Label htmlFor="images">Attach Images</Label>
              <div className="flex items-center gap-[10px]">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="image"
                    width={90}
                    height={90}
                    className="w-[90px] h-[90px] object-cover rounded-md"
                  />
                ))}
                {images.length < 4 && (
                  <>
                    <Input
                      id="images"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <Label
                      htmlFor="images"
                      className="flex items-center flex-col justify-center w-[90px] h-[90px] px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer relative"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Upload Images
                      {imageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 w-full h-full center bg-[#0000003d]">
                          <ImSpinner2 className="animate-spin" />
                        </div>
                      )}
                    </Label>
                  </>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center  gap-[10px]">
                <Switch
                  id="premium"
                  disabled={!user?.isPremium}
                  checked={isPremium}
                  onCheckedChange={setIsPremium}
                />
                <Label htmlFor="premium">Mark as Premium Content</Label>
              </div>
              {!user?.isPremium && (
                <span className="text-[12px] ">
                  * This can be accessed only by verified users
                </span>
              )}
            </div>
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              Create Post
            </Button>
          </div>
        </PrimeReactProvider>

        <DialogFooter>
          <Button type="button" className="w-full">
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
