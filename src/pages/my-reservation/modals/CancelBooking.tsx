import ModalContainer from "@/components/ModalContainer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ReservationHeader from "../components/ReservationHeader";

export function CancelBooking() {
    const navigate = useNavigate()

    return (
        <ModalContainer title="Отменить бронь">
            <p className="text-2xl font-medium text-center">Вы подтверждаете удаление брони?</p>
            <ReservationHeader />
            <div className="h-[1px] bg-[#D9D9D9]"></div>
            <div className="grid grid-cols-2 gap-2">
                <p className="text-lg">Payment</p>
                <p className="text-lg text-end">50%</p>
                <p className="text-lg">Time</p>
                <p className="text-lg text-end">14:00</p>
            </div>
            <div className="h-[1px] bg-[#D9D9D9]"></div>
            <p className="text-[16px] text-center">Бронь отменена из-за пропуска установленного времени, поэтому оплаченные деньги не подлежат возврату.</p>
            <div className="grid items-center grid-cols-2 gap-5">
                <Button className="!h-12 text-primary border-primary" variant={"outline"} size="md">Нет отклоняю</Button>
                <Button onClick={() => navigate("success")} className="!h-12" type="submit" size={"md"}>Да подтверждаю</Button>
            </div>
        </ModalContainer>
    )
}
