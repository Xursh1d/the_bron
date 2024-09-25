import ModalContainer from "@/components/ModalContainer";
import { Button } from "@/components/ui/button";
import { InputOTPPattern } from "./components/InputOTPPattern";

export default function EnterCode() {
    return (
        <ModalContainer backCallBack={() => { }} title="" className="!max-w-[532px]" childClass="!pt-0 space-y-10">
            <div className="space-y-3">
                <h1 className="text-[#0A0A0A] text-[28px] font-semibold">Введите код</h1>
                <p className="text-lg text-[#0A0A0A]">Для подтверждения телефона отправили 4 значный код на <span className="font-bold">+998(90) 115 92 34</span></p>
            </div>
            <div className="flex justify-center">
                <InputOTPPattern />
            </div>
            <p className="text-[16px] text-[#7A7A7A] text-center">Если код не придет, то можно получить новый через 51 сек</p>
            <Button className="!h-12 w-full !text-lg">Продолжить</Button>
            <Button className="!h-12 w-full !text-lg underline text-[#0A0A0A]" variant={"link"}>Другие варианты</Button>
        </ModalContainer>
    )
}
