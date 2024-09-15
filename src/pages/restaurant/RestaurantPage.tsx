import { BackButton } from "./components/BackButton";
import { ImageGallery } from "./components/ImageGallery";
import { ReservationForm } from "./components/ReservationForm";
import { RestaurantHeader } from "./components/RestaurantHeader";
import TabsSection from "./components/Tabs";


export default function RestaurantPage() {
    return (
        <section className="space-y-10">
            <BackButton />
            <RestaurantHeader />
            <ImageGallery />
            <div className="flex items-start gap-[30px]">
                <div className="bg-gray-100 w-[63.65%] min-h-[590px] border border-[#C2C2C2] rounded-3xl"></div>
                <ReservationForm />
            </div>
            <TabsSection />
        </section>
    );
}
