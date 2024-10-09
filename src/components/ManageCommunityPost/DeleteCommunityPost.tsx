"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeletePostMutation } from "@/redux/features/post/post.api";
import { removePost } from "@/redux/features/post/post.slice";
import { useAppDispatch } from "@/redux/hook";
import { AlertTriangle } from "lucide-react";
import React from "react";
import { toast } from "sonner";

interface IProps {
  id: string;
}

const DeleteCommunityPost: React.FC<IProps> = ({ id }) => {
  const [deletePost, { isError }] = useDeletePostMutation();
  const dispatch = useAppDispatch();
  const handleDeletePost = async () => {
    const toastId = toast.loading("Please wait");
    const btn = document.getElementById("cancel_comment_dialog");
    try {
      const res = await deletePost(id);
      const error = res.error as any;
      if (isError || (error && error.status !== 200)) {
        toast.error("Something went wrong");
      } else {
        toast.success("Comment deleted successfully");
      }
      toast.dismiss(toastId);
      dispatch(removePost(id));
      btn?.click();
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="w-full">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Confirm Deletion
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this Post? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-6">
          <Button variant="destructive" onClick={handleDeletePost}>
            Delete
          </Button>
          <DialogClose asChild>
            <Button variant="outline" id="cancel_post_dialog">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCommunityPost;
