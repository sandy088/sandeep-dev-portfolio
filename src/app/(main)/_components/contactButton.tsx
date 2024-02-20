'use client'
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
import { Check, CopyIcon } from "lucide-react";
import { ReactElement, ReactHTMLElement, useState } from "react";
export function DialogCloseButton({textSize}: {textSize?: string}) {

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText("sandeep.personal03@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
    
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='action' className={` rounded-full ${!!textSize &&  `text-[${textSize}]`}`}>Talk Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            I personally read all my emails, if any query contact through this mail.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="sandeep.personal03@gmail.com"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" variant={'action'} className="px-3 bg-[#4c67f9]" onClick={(e)=>handleCopy(e)}>
            <span className="sr-only bg-[#4c67f9]">Copy</span>
            {!isCopied ? <CopyIcon className="h-4 w-4" /> : <Check className="h-4 w-4"/>}
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant='destructive'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
