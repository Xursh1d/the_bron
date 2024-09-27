import ModalContainer from "@/components/ModalContainer";
import { Button } from "@/components/ui/button";

export default function Confirm() {
    return (
        <ModalContainer title="Зарегистрироваться" className="!max-w-[532px]" childClass="!pt-0 space-y-10">
            <div className="py-4 space-y-3">
                <h1 className="text-[28px] font-semibold text-center">Добро пожаловать в <span className="text-primary">theBron</span></h1>
                <p className="text-lg text-[#0A0A0A] text-center">Найдите уникальные предложения для вас!</p>
            </div>
            <Button className="!h-12 w-full !text-lg">Продолжить</Button>
        </ModalContainer>
    )
}
