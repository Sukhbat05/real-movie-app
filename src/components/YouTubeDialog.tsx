import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CiPlay1 } from "react-icons/ci";

interface YouTubeDialogProps {
  videoKey: string;
  title?: string;
}

export function YouTubeDialog({ videoKey, title = "Trailer" }: YouTubeDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <Button variant="outline" className="flex items-center gap-2 ">
          <CiPlay1 size={20} />
          Play trailer
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[997px] w-full max-w-full p-0">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
     
        </DialogHeader>

        <div className="relative aspect-video w-full rounded-md overflow-hidden ">
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
