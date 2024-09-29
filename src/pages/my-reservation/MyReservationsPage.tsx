import { CategoryButtons } from "@/components/CategoryButtons";
import TitleBar from "@/components/TitleBar";
import { Outlet } from "react-router-dom";
import Reservation from "./components/Reservation";

export default function MyReservationsPage() {
    return (
        <section className="space-y-10">
            <TitleBar title="My Order" />
            <CategoryButtons />
            <div className="space-y-6">
                <Reservation
                    editCallback={() => null}
                    deleteCallback={() => { }}
                />
                <Reservation
                    feedbackCallback={() => { }}
                />
            </div>
            <Outlet />

        </section>
    )
}
