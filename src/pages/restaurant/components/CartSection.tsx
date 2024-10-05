import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function CartSection() {
    const navigate = useNavigate()

    return (
        <section className="space-y-3 md:space-y-10">
            <div className="pb-3 md:pb-0 md:h-[85px] flex justify-between items-start border-b border-[#CCCCCC]">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-[48px]">Cart</h1>
                <Button onClick={() => navigate("/confirm-pay")} className="hidden !h-[65px] px-10 !text-[32px]">125 000 UZS</Button>
                <h1 className="text-xl font-bold sm:text-2xl md:hidden text-primary">125 000 UZS</h1>
            </div>
            <div>
                {Array(4).fill(true).map(_ => <div className="h-[92px] sm:h-[122px] md:h-[160px] border-b border-[#CCCCCC] flex justify-between items-center">
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
        </section>
    )
}
