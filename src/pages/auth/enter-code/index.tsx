import ModalContainer from "@/components/ModalContainer";
import { Button } from "@/components/ui/button";
import { useAuth } from "../AuthProvider";
import { InputOTPPattern } from "./components/InputOTPPattern";

export default function EnterCode() {
    const { setShowModal } = useAuth()

    return (
        <ModalContainer backCallBack={() => { }} title="" className="sm:!max-w-[532px] w-full !max-w-full h-full sm:h-auto sm:w-auto" childClass="!pt-0 px-4 sm:px-6 sm:space-y-10">
            <div className="space-y-3">
                <h1 className="text-[#0A0A0A] text-xl sm:text-[28px] font-semibold">Введите код</h1>
                <p className="text-sm sm:text-lg text-[#0A0A0A]">Для подтверждения телефона отправили 4 значный код на <span className="font-bold">+998(90) 115 92 34</span></p>
            </div>
            <div className="flex justify-center">
                <InputOTPPattern />
            </div>
            <p className="text-sm sm:text-[16px] text-[#7A7A7A] text-center">Если код не придет, то можно получить новый через 51 сек</p>
            <Button onClick={() => setShowModal("complete")} className="!h-12 w-full text-sm sm:!text-lg">Продолжить</Button>
            <Button onClick={() => setShowModal("options")} className="!h-12 w-full text-sm sm:!text-lg underline text-[#0A0A0A]" variant={"link"}>Другие варианты</Button>
        </ModalContainer>
    )
}
