
"use client";
import { Button } from "@/components/ui/button";
import { useVotePostMutation } from "@/redux/features/post/post.api";
import { useAppSelector } from "@/redux/hook";
import { IPost, TVoting } from "@/types/post";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
const VotePost = ({ post }: { post: IPost }) => {
  const [votePost] = useVotePostMutation();

  const { user } = useAppSelector((state) => state.auth);
  const [votes, setVotes] = useState({
    upVotes: post.upVotes,
    downVotes: post.downVotes,
  });
  const handleVote = async (vote: TVoting) => {
    if (!user) {
      return toast.error("Please Login to vote");
    }

    if (vote === "downvote") {
      if (votes.downVotes.includes(user._id)) {
        const downVotes = [...votes.downVotes].filter((v) => v !== user._id);
        setVotes((v) => ({ ...v, downVotes }));
      } else {
        const downVotes = [...votes.downVotes, user._id];
        const upVotes = [...votes.upVotes].filter((v) => v !== user._id);
        setVotes({ upVotes, downVotes });
      }
    } else {
      if (votes.upVotes.includes(user._id)) {
        const upVotes = [...votes.upVotes].filter((v) => v !== user._id);
        setVotes((v) => ({ ...v, upVotes }));
      } else {
        const upVotes = [...votes.upVotes, user._id];
        const downVotes = [...votes.downVotes].filter((v) => v !== user._id);

        setVotes({ downVotes, upVotes });
      }
    }

    await votePost({ postId: post._id, vote });
  };
  return (
    <div className="flex items-center space-x-2">
      <Button
        onClick={() => handleVote("upvote")}
        variant={
          votes.upVotes.includes(user?._id || "") ? "secondary" : "ghost"
        }
        size="sm"
      >
        <ChevronUp className="mr-1 h-4 w-4" />
        UPVOTE: {votes.upVotes?.length || 0}
      </Button>
      <Button
        size="sm"
        variant={
          votes.downVotes.includes(user?._id || "") ? "secondary" : "ghost"
        }
        onClick={() => handleVote("downvote")}
      >
        <ChevronDown className="mr-1 h-4 w-4" />
        DOWNVOTE: {votes.downVotes?.length || 0}
      </Button>
    </div>
  );
};

export default VotePost;
