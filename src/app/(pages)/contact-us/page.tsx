import ContactUsView from "@/views/ContactUsView";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact us - Tourizto",
  description: "Travel media",
};
const page = () => {
  return <ContactUsView />;
};

export default page;