import TitleBar from "@/components/TitleBar";
import Reservation from "../components/Reservation";
import { ReservationForm } from "./ReservationForm";

export default function EditBookingPage() {
    return (
        <section className="space-y-10">
            <TitleBar title="My Order" />
            <div className="flex flex-col md:flex-row items-start gap-[30px]">
                <div className="order-2 bg-gray-100 w-full md:w-[63.65%] min-h-[590px] border border-[#C2C2C2] rounded-3xl"></div>
                <ReservationForm />
            </div>
            <div className="space-y-6">
                <Reservation />
            </div>
        </section>
    )
}
