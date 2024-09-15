import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();

    return (
        <Button variant="ghost" onClick={() => navigate(-1)}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.7083 25.2921..." fill="#343330" />
            </svg>
            <span className="text-2xl font-bold">Назад</span>
        </Button>
    );
};
