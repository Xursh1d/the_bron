import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useAuth } from "../AuthProvider";

export default function RegisterModal() {
    const { setShowModal } = useAuth()

    return (
        <Dialog open onOpenChange={() => { }}>
            <DialogContent className={cn("sm:max-w-[530px] overflow-auto max-h-screen px-6 py-7 !rounded-[20px]")}>
                <DialogHeader>
                    <div className="min-h-10 w-full !relative !flex flex-col items-center gap-3">
                        <DialogTitle className="text-[28px] font-bold">{"Добро пожаловать в theBron"}</DialogTitle>
                        <DialogDescription className="text=2xl font-medium text-[#0A0A0A]">Войдите или зарегистрируйтесь</DialogDescription>
                    </div>
                </DialogHeader>
                <div className="w-full space-y-4">
                    <div className="flex items-center">
                        <Input value="UZB(+998)" readOnly className="focus:ring-0  rounded-[10px] rounded-r-none h-14 w-[112px]" />
                        <Input placeholder="Номер телефона" className="rounded-[10px] border-l-0 rounded-l-none h-14" />
                    </div>
                    <p className="text-sm">Мы позвоним вам или отправим SMS, чтобы подтвердить номер телефона. Применяются стандартные условия вашего тарифа на прием сообщений и передачу данных.  Политика конфиденциальности</p>
                </div>
                <Button onClick={() => setShowModal("otp")} className="w-full !text-lg !h-12">Продолжить</Button>
                <div className="grid items-center grid-cols-7">
                    <span className="col-span-3 block h-[1px] bg-[#E0E0E0]"></span>
                    <p className="block col-span-1 text-center">или</p>
                    <span className="col-span-3 block h-[1px] bg-[#E0E0E0]"></span>
                </div>
                <Button className="!h-12 text-lg text-[#0A0A0A] relative !border-[#666666]" variant={"outline"}>
                    <img className="absolute justify-items-start left-3" src="/public/images/devicon_google.svg" alt="google" />
                    С помощью Google
                </Button>
                <Button className="!h-12 text-lg text-[#0A0A0A] relative !border-[#666666]" variant={"outline"}>
                    <img className="absolute justify-items-start left-3" src="/public/images/devicon_facebook.svg" alt="google" />
                    С помощью Facebook
                </Button>
                <Button className="!h-12 text-lg text-[#0A0A0A] relative !border-[#666666]" variant={"outline"}>
                    <img className="absolute justify-items-start left-3" src="/public/images/icloud.svg" alt="google" />
                    продолжить с Apple
                </Button>
                <Button className="!h-12 text-lg text-[#0A0A0A] relative !border-[#666666]" variant={"outline"}>
                    <img className="absolute justify-items-start left-3" src="/public/images/oneid.svg" alt="google" />
                    продолжить с OneId
                </Button>
                <Button className="!h-12 text-lg text-[#0A0A0A] relative !border-[#666666]" variant={"outline"}>
                    <img className="absolute justify-items-start left-3" src="/public/images/yandex.svg" alt="google" />
                    продолжить с Yandex
                </Button>
            </DialogContent>
        </Dialog>
    )
}
