import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();

    return (
        <Button variant="link" className="!no-underline !p-0" onClick={() => navigate(-1)}>
            <ChevronLeft className="size-8" color="#343330" />
            <span className="!text-[#000000] text-2xl font-bold">Назад</span>
        </Button>
    );
};
