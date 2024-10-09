export type TRole = "user" | "admin";

export type TUser = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "user" | "admin";
  createdAt: string;
  isPremium: boolean;
  image?: string;
  auth?: {
    role: TRole;
    _id: string;
  };
};
