import { Button } from "@/components/ui/button";
import { Edit3Icon, Trash2, MessageCircleMore } from "lucide-react";
import { useNavigate } from "react-router-dom";

type IReservationActions = {
    editCallback?: () => void
    deleteCallback?: () => void
    feedbackCallback?: () => void
}

const ReservationActions = (props: IReservationActions) => {
    const navigate = useNavigate()
    const { editCallback, deleteCallback, feedbackCallback } = props

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-end gap-4">
                {editCallback && <Button onClick={() => navigate("edit")}>
                    <Edit3Icon />
                    Редактировать данные
                </Button>}
                {deleteCallback && <Button variant={"destructive"} onClick={() => navigate("cancel")}>
                    <Trash2 />
                    Удалить бронь
                </Button>}
            </div>
            <div className="flex items-center justify-end">
                {feedbackCallback && <Button onClick={() => navigate("feedback")} variant={"outline"} className="hover:!text-primary px-8 text-primary py-2 border-primary rounded-[99px]">
                    <MessageCircleMore />
                    Оставить отзыв
                </Button>}
            </div>
        </div>
    );
};

export default ReservationActions;
