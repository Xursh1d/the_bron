import ModalContainer from "@/components/ModalContainer";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function OtherOptions() {
    return (
        <ModalContainer backCallBack={() => { }} title="" className="!max-w-[532px]" childClass="!pt-0 space-y-10">
            <div className="space-y-3">
                <h1 className="text-[#0A0A0A] text-[28px] font-semibold">Другие варианты</h1>
                <p className="text-lg text-[#0A0A0A]">Выберите другой способ получить код на <span className="font-bold">+998(90) 115 92 34</span></p>
            </div>
            <RadioGroup defaultValue="comfortable">
                <div className="min-h-[52px] py-1 flex border-b border-[#E0E0E0] items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="/images/message-square.svg" alt="" />
                        <div className="space-y-1">
                            <p className="text-lg text-[#0A0A0A] font-bold">SMS</p>
                            <p className="text-[16px] text-[#7A7A7A]">Мы отпрвим вам код</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-xl text-primary">1:00</span>
                        <RadioGroupItem value="" id="r2" className="size-6" />
                    </div>
                </div>
                <div className="min-h-[52px] py-1 flex border-b border-[#E0E0E0] items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="/images/phone-outgoing.svg" alt="" />
                        <div className="space-y-1">
                            <p className="text-lg text-[#0A0A0A] font-bold">Телефонный звонок</p>
                            <p className="text-[16px] text-[#7A7A7A]">Мы позвоним и сообщим код</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <RadioGroupItem value="1" id="r2" className="size-6" />
                    </div>
                </div>
                <div className="min-h-[52px] py-1 flex border-b border-[#E0E0E0] items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="/images/telegramm.svg" alt="" />
                        <div className="space-y-1">
                            <p className="text-lg text-[#0A0A0A] font-bold">Telegram</p>
                            <p className="text-[16px] text-[#7A7A7A]">Мы отпрвим вам код</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <RadioGroupItem value="1" id="r2" className="size-6" />
                    </div>
                </div>
                <div className="min-h-[52px] py-1 flex border-b border-[#E0E0E0] items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="/images/whatsapp-logo-variant-svgrepo-com 1.svg" alt="" />
                        <div className="space-y-1">
                            <p className="text-lg text-[#0A0A0A] font-bold">Whatsapp</p>
                            <p className="text-[16px] text-[#7A7A7A]">Мы отпрвим вам код</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <RadioGroupItem value="1" id="r2" className="size-6" />
                    </div>
                </div>
            </RadioGroup>
            <Button className="!h-12 w-full !text-lg">Отправить код ещё раз</Button>
        </ModalContainer>
    )
}