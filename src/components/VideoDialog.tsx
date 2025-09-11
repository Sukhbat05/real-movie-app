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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CiPlay1 } from "react-icons/ci";

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <div className="flex items-center gap-4 h-10 w-[160px] border bg-secondary rounded-md text-foreground">
          <DialogTrigger asChild>
            <Button variant="outline" className="text-foreground rounded-3xl">
              <CiPlay1 />
            </Button>
          </DialogTrigger>

          <DialogTitle className="">Play Trailer</DialogTitle>
        </div>
        <DialogContent className="sm:max-w-[997px] h-[561px]"></DialogContent>
      </form>
    </Dialog>
  );
}
