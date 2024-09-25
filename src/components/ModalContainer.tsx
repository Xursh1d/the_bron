import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

interface IModalContainer {
    children: React.ReactNode
    onClose?: () => void
    isHeading?: boolean,
    title?: string,
    childClass?: string,
    className?: string,
    backCallBack?: () => void
}
export default function ModalContainer(props: IModalContainer) {
    const { children, isHeading = true, backCallBack, title, onClose, className, childClass } = props
    const navigate = useNavigate()

    return (
        <Dialog open onOpenChange={() => onClose ? onClose() : navigate(-1)}>
            <DialogContent className={cn("sm:max-w-[600px] overflow-auto max-h-screen p-0 !rounded-[20px]", className)}>
                {isHeading && <DialogHeader className="!h-[59px] flex-row border-b  border-[#E0E0E0] !flex !items-center">
                    <div className="h-10 w-full !relative !flex  flex-row px-5 !items-center justify-center">
                        {backCallBack &&
                            <Button className="absolute !h-auto top-0 !bottom-0 left-6" variant={"ghost"} size="sm">
                                <ArrowLeft />
                            </Button>}
                        {title && <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>}
                    </div>
                </DialogHeader>}
                <div className={cn("w-full p-6 space-y-5", childClass)}>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}
