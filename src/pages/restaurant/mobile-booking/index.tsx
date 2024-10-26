import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BookingPageMobile from "./BookingPageMobile";

export default function MobileBooking() {
    const navigate = useNavigate()

    return (
        <div className="overflow-auto fixed top-0 bottom-0 left-0 right-0 p-4 !m-0 bg-white sm:none" >
            <div className="flex items-center gap-2">
                <Button onClick={() => navigate(-1)} variant={"outline"} className="p-2">
                    <ArrowLeft className="size-5" />
                </Button>
                <p className="text-[#454545]">Orqaga qaytish</p>
            </div>
            <BookingPageMobile />
        </div>
    )
}
