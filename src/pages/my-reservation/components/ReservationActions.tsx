import { Button } from "@/components/ui/button";
import { Edit3Icon, Trash2, MessageCircleMore } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReservationActions = () => {
    const navigate = useNavigate()

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-end gap-4">
                <Button>
                    <Edit3Icon />
                    Редактировать данные
                </Button>
                <Button variant={"destructive"} onClick={() => navigate("cancel")}>
                    <Trash2 />
                    Удалить бронь
                </Button>
            </div>
            <div onClick={() => navigate("feedback")} className="flex items-center justify-end">
                <Button variant={"outline"} className="hover:!text-primary px-8 text-primary py-2 border-primary rounded-[99px]">
                    <MessageCircleMore />
                    Оставить отзыв
                </Button>
            </div>
        </div>
    );
};

export default ReservationActions;
