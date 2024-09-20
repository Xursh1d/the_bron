import StarIcon from "@/components/icons/StarIcon";
import TitleBar from "@/components/TitleBar";
import { Link } from "react-router-dom";
import { ImageGallery } from "./components/ImageGallery";
import { ReservationForm } from "./components/ReservationForm";
import TabsSection from "./components/Tabs";


export default function RestaurantPage() {
    return (
        <section className="space-y-10">
            <TitleBar title="Name Restarount" subComponent={<SubComponent />} />
            <ImageGallery />
            <div className="flex flex-col md:flex-row items-start gap-[30px]">
                <div className="order-2 bg-gray-100 w-full md:w-[63.65%] min-h-[590px] border border-[#C2C2C2] rounded-3xl"></div>
                <ReservationForm />
            </div>
            <TabsSection />
        </section>
    );
}

function SubComponent() {
    return (
        <div className="flex items-center gap-4">
            <StarIcon className="text-[#F7B406]" />
            <span className="text-2xl font-bold">4.1</span>
            <Link className="text-2xl font-bold underline text-primary" to="/">
                Tashkent
            </Link>
        </div>
    )
}