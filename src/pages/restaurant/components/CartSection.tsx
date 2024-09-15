import { Button } from "@/components/ui/button";

export default function CartSection() {
    return (
        <section className="space-y-10">
            <div className="h-[85px] flex justify-between items-start border-b border-[#CCCCCC]">
                <h1 className="font-bold text-[48px]">Cart</h1>
                <Button className="!h-[65px] px-10 !text-[32px]">125 000 UZS</Button>
            </div>
            <div>
                {Array(4).fill(true).map(_ => <div className="h-[160px] border-b border-[#CCCCCC] flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <div className="size-[120px] bg-[#F1F1F1] rounded-2xl flex items-center justify-center">
                            <img src="/images/menu_card.svg" className="w-[70%]" alt="Card" />
                        </div>
                        <div className="space-y-2">
                            <h1 className="font-bold text-[32px] text-primary">190 000 UZS</h1>
                            <h1 className="font-bold text-[28px] text-black">Title</h1>
                        </div>
                    </div>
                    <div className="w-[250px] h-auto box-border rounded-[99px] bg-secondary flex justify-between items-center">
                        <Button className="rounded-[99px] w-16 box-border">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Button>
                        <h1 className="text-lg font-bold text-primary">1</h1>
                        <Button className="rounded-[99px] w-16 box-border">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
