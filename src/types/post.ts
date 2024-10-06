import { ICategories } from "./category";
import { TUser } from "./user";


interface IPostRequired {
  content: string;
  images: string[];
  premium: boolean;
}

export interface IPostCreate extends IPostRequired {
  categories: string[];
}

export interface IPost extends IPostRequired {
  _id: string;
  categories: ICategories[];
  user: TUser;
  upVotes: string[];
  downVotes: string[];
  upVoteCount: number;
  downVoteCount: number;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
}

export type TVoting = "upvote" | "downvote";