import StarIcon from "@/components/icons/StarIcon";
import TitleBar from "@/components/TitleBar";
import { Button } from "@/components/ui/button";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ImageGallery } from "./components/ImageGallery";
import { ReservationForm } from "./components/ReservationForm";
import RestaurantDetails from "./components/RestaurantDetail";
import TabsSection from "./components/Tabs";


export default function RestaurantPage() {
    const navigate = useNavigate()

    return (
        <section className="space-y-5 sm:space-y-10">
            <TitleBar title="Name Restarount" subComponent={<SubComponent />} />
            <ImageGallery />
            <RestaurantDetails />
            <div className=" hidden sm:flex flex-col lg:flex-row items-start gap-[30px]">
                <div className="order-2 bg-gray-100 w-full lg:w-[63.65%] min-h-[590px] border border-[#C2C2C2] rounded-3xl"></div>
                <ReservationForm />
            </div>
            <TabsSection />
            <Button
                onClick={() => navigate('booking')}
                className="w-full sm:hidden text-[16px] h-12">
                Забронировать
            </Button>
            <Outlet />
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