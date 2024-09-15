import StarIcon from "@/components/icons/StarIcon";
import { Link } from "react-router-dom";

export const RestaurantHeader = () => (
    <div className="space-y-4">
        <h1 className="text-[40px] font-bold">Name Restarount</h1>
        <div className="flex items-center gap-4">
            <StarIcon />
            <span className="text-2xl font-bold">4.1</span>
            <Link className="text-2xl font-bold underline text-primary" to="/">Tashkent</Link>
        </div>
    </div>
);
