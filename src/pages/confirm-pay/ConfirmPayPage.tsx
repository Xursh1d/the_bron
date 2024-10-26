import StarIcon from "@/components/icons/StarIcon";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ConfirmPayPage() {
    const navigate = useNavigate()

    return (
        <div className="my-2 space-y-6">
            <div className="flex items-center gap-2">
                <Button onClick={() => navigate(-1)} variant={"link"} className="!p-0 !no-underline text-black items-center" >
                    <ChevronLeft className="size-6 sm:size-8" color="#343330" />
                </Button>
                <p className="text-lg font-bold leading-9 sm:text-2xl">Потвердите и оплатите</p>
            </div>
            <div className="flex items-start flex-col md:flex-row min-h-[472px] justify-between gap-10">
                <div className="w-full order-2 md:w-[64.4%] space-y-5 h-full">
                    <span className="text-lg font-bold sm:text-2xl">Чем оплатить</span>
                    <RadioGroup defaultValue="option-one" className="space-y-4">
                        <div className="border-2 rounded-[10px] space-x-4 border-primary h-16 sm:h-[84px] p-2 sm:p-3 flex items-center">
                            <RadioGroupItem value="option-one" id="option-one" className="size-[25px] sm:size-[30px] border-[#E0E0E0]" />
                            <img src="/images/payme.svg" alt="Pay" className="h-12 sm:h-auto" />
                        </div>
                        <div className="border-2 rounded-[10px] space-x-4 border-primary h-16 sm:h-[84px] p-2 sm:p-3 flex items-center">
                            <RadioGroupItem value="option-two" id="option-two" className="size-[25px] sm:size-[30px] border-[#E0E0E0]" />
                            <img src="/images/mastercard.svg" alt="MasterCard" className="h-12 sm:h-auto" />
                        </div>
                        <div className="border-2 rounded-[10px] space-x-4 border-primary h-16 sm:h-[84px] p-2 sm:p-3 flex items-center">
                            <RadioGroupItem value="option-three" id="option-one" className="size-[25px] sm:size-[30px] border-[#E0E0E0]" />
                            <img src="/images/payme.svg" alt="Pay" className="h-12 sm:h-auto" />
                        </div>
                        <div className="border-2 rounded-[10px] space-x-4 border-primary h-16 sm:h-[84px] p-2 sm:p-3 flex items-center">
                            <RadioGroupItem value="option-four" id="option-two" className="size-[25px] sm:size-[30px] border-[#E0E0E0]" />
                            <img src="/images/mastercard.svg" alt="MasterCard" className="h-12 sm:h-auto" />
                        </div>
                    </RadioGroup>
                </div>
                <div className="w-full order-1 md:order-2 md:w-[35.6%] border space-y-6 border-[#E0E0E0] min-h-[472px] p-5 rounded-[10px]">
                    <div className="flex w-full gap-4">
                        <div className="size-[120px] bg-[#D9D9D9] rounded-2xl"></div>
                        <div className="space-y-2 w-[calc(100%-140px)]">
                            <h1 className="text-lg font-bold sm:text-xl">Линнеахольме частный остров до которого можно добраться по пешеходному мосту</h1>
                            <h1 className="text-sm font-bold">Вилла целиком</h1>
                            <div className="flex items-center gap-2">
                                <StarIcon className="!text-[#011120]" />
                                <h1 className="text-lg font-bold">5,00(9)</h1>
                            </div>
                        </div>
                    </div>
                    <div className="h-[1px] bg-[#D9D9D9] w-full"></div>
                    <div className="space-y-2">
                        <h1 className="text-lg font-bold sm:text-2xl">Детализация цены</h1>
                        <div className="grid grid-cols-2 gap-2">
                            <span className="text-sm font-bold sm:text-lg">000 000сумм х 5 ночей</span>
                            <span className="text-sm font-bold sm:text-lg text-end">000 000 сумм</span>
                            <span className="text-sm font-bold sm:text-lg">Сервис сбор theBron</span>
                            <span className="text-sm font-bold sm:text-lg text-end">000 000 сумм</span>
                            <span className="text-sm font-bold sm:text-lg">Налоги</span>
                            <span className="text-sm font-bold sm:text-lg text-end">000 000 сумм</span>
                        </div>
                    </div>
                    <div className="h-[1px] bg-[#D9D9D9] w-full"></div>
                    <div className="flex justify-between w-full">
                        <span className="text-lg sm:text-[20px] font-bold">Итого(сумм)</span>
                        <span className="text-lg sm:text-[20px] font-bold">000 000сумм</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center h-[65px] justify-between">
                <h1 className="font-bold text-lg sm:text-[28px]">Orders</h1>
                <ChevronDown className="sm:size-8" />
            </div>
            <div>
                {Array(2).fill(true).map(_ =>
                    <div className="h-[92px] sm:h-[122px] md:h-[160px] border-b border-[#CCCCCC] flex justify-between items-center">
                        <div className="flex items-center gap-2 md:gap-6">
                            <div className="size-[80px] sm:size-[100px] md:size-[120px] bg-[#F1F1F1] rounded-lg md:rounded-2xl flex items-center justify-center">
                                <img src="/images/menu_card.svg" className="w-[70%] object-scale-down" alt="Card" />
                            </div>
                            <div className="space-y-2">
                                <h1 className="font-bold text-[16px] sm:text-2xl md:text-[32px] text-primary">190 000 UZS</h1>
                                <h1 className="font-bold text-sm sm:text-xl md:text-[28px] text-black">Title</h1>
                            </div>
                        </div>
                        <div className="w-[90px] sm:w-[120px] h-6 sm:h-8 md:w-[250px] md:h-auto box-border rounded-[99px] bg-secondary flex justify-between items-center">
                            <Button className="rounded-[99px] !p-1 md:!h-12 sm:!h-8 sm:!w-8 !h-auto !w-6 md:!w-16 box-border">
                                <svg className="md:size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Button>
                            <h1 className="text-lg font-bold text-primary">1</h1>
                            <Button className="rounded-[99px] !p-1 md:!h-12 sm:!h-8 sm:!w-8 !h-auto !w-6 md:!w-16 box-border">
                                <svg className="md:size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Button>
                        </div>
                    </div>)}
            </div>
            <div className="space-y-6 border-b border-[#E0E0E0] pb-4">
                <span className="text-lg font-bold sm:text-2xl">Ваша поездка</span>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-bold sm:text-lg">Даты</span>
                        <span className="text-sm font-bold sm:text-lg">09-12 февр.</span>
                    </div>
                    <span className="text-sm font-bold underline sm:text-lg">Изменить</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-bold sm:text-lg">Гости </span>
                        <span className="text-sm font-bold sm:text-lg">1 гость</span>
                    </div>
                    <span className="text-sm font-bold underline sm:text-lg">Изменить</span>
                </div>
            </div>
            <h1 className="text-lg font-bold sm:text-2xl">Варианты оплаты</h1>
            <RadioGroup defaultValue="1" className="flex flex-col gap-0">
                <div className="border border-[#011120] rounded-t-[10px] p-3 flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm sm:text-[20px] font-bold">Оплатите посностью</span>
                        <span className="text-sm sm:text-[20px] font-bold">Уплатите полную сумму (745 000 сум)</span>
                    </div>
                    <RadioGroupItem value="1" id="1" className="size-[25px] sm:size-[30px] border-[#E0E0E0]" />
                </div>
                <div className="border border-[#C2C2C2] rounded-b-[10px] p-3 flex justify-between items-center">
                    <div className="flex flex-col gap-2 w-[calc(100%-40px)]">
                        <span className="text-sm sm:text-[20px] font-bold">Оплатите часть сейчас, а остаток внесите позже</span>
                        <span className="text-sm sm:text-[20px] font-bold">000 000 сумм к оплате сегодня, 000 000сумм- 24 март.2024 г. Без дополнительных сборов.   Подробнее</span>
                    </div>
                    <RadioGroupItem value="2" id="2" className="size-[25px] !sm:size-[30px] border-[#E0E0E0]" />
                </div>
            </RadioGroup>
            <div className="flex flex-col gap-[41px] py-10">
                <div className="space-y-4">
                    <p className="text-lg font-bold sm:text-2xl">Правила отмены</p>
                    <p className="text-sm font-bold sm:text-lg">Бесплатная отмена в течение 48 часов. При отмене до 1 апр. вы получите частичный возврат. Подробней</p>
                </div>
                <div className="bg-[#E0E0E0] h-[1px]"></div>
                <p className="text-sm font-bold sm:text-lg">Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                <Button className="!h-12 sm:w-[390px]" size={"md"}>Потвердить и оплатить</Button>
            </div>
        </div>
    )
}
