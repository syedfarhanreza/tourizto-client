import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AlertCircle } from "lucide-react";

const NotEligible = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="mt-5 bg-gradient-to-r from-[#D97706] to-[#C05621] hover:from-[#C05621] hover:to-[#A53F1A] text-white font-bold shadow-lg rounded-full py-3 px-6 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A53F1A] transform hover:scale-105"
        >
          Verify Account
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            Not Eligible for Verification
          </DialogTitle>
          <DialogDescription>
            We&lsquo;re sorry, but you&lsquo;re not currently eligible to verify
            your account.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <p className="text-sm text-muted-foreground">
            To be eligible for account verification, you need to meet the
            following criteria:
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground">
            <li>Have at least one upvote on your posts</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Keep engaging with the community and creating quality content.
            You&lsquo;ll be eligible for verification once you meet these
            requirements.
          </p>
        </div>
        <div className="mt-6 flex justify-end">
          <Button variant="outline">Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotEligible;
