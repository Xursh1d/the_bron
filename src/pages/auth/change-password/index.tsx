import { InputDemo } from "@/components/InputDemo";
import ModalContainer from "@/components/ModalContainer";
import { Button } from "@/components/ui/button";
import { useAuth } from "../AuthProvider";

export default function ChangePassword() {
    const { setShowModal } = useAuth()
    return (
        <ModalContainer backCallBack={() => { }} title="" className="!max-w-[532px]" childClass="!pt-0 space-y-10">
            <div className="space-y-3">
                <h1 className="text-[#0A0A0A] text-[28px] font-semibold">Восстановить пароль</h1>
                <p className="text-lg text-[#0A0A0A]">Для восстановления пароля, установленного для счета, открытого на номер <span className="font-bold">+998(90) 115 92 34</span></p>
            </div>
            <div className="space-y-3">
                <InputDemo type={"password"} placeholder="Пароль" label="Пароль" />
                <p className="text-[#A29F9F] text-sm">При создании пароля должны использоваться большие и маленькие буквы (A-Z, a-z), а также цифры (0-9)</p>
                <InputDemo type={"password"} placeholder="Повторите пароль" />
            </div>
            <Button onClick={() => setShowModal("finish")} className="!h-12 w-full !text-lg">Восстановление пароля</Button>
        </ModalContainer>
    )
}
