import { InputDemo } from "@/components/InputDemo";
import ModalContainer from "@/components/ModalContainer";
import { Button } from "@/components/ui/button";
import { useAuth } from "../AuthProvider";

export default function Password() {
    const { setShowModal } = useAuth()
    return (
        <ModalContainer backCallBack={() => { }} title="" className="!max-w-[532px] h-full sm:h-auto" childClass="!pt-0 px-4 sm:px-6 space-y-10">
            <div className="space-y-3">
                <h1 className="text-[#0A0A0A] text-xl sm:text-[28px] font-semibold">Пароль</h1>
                <p className="text-sm sm:text-lg text-[#0A0A0A]">Введите пароль, установленный для учетной записи, открытой на номер <span className="font-bold">+998(90) 115 92 34</span></p>
            </div>
            <div className="space-y-3">
                <InputDemo type={"password"} placeholder="Пароль" />
                <p className="text-end text-primary text-[16px]">Забыли пароль?</p>
            </div>
            <Button onClick={() => setShowModal("recover")} className="!h-12 w-full !text-lg">Проверка</Button>
        </ModalContainer>
    )
}
