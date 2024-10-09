import AboutUsView from "@/views/AboutUsView";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About us - Tourizto",
  description: "Travel media",
};
const page = () => {
  return <AboutUsView />;
};

export default page;
