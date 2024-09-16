import CartIcon from "@/components/icons/CartIcon";
import StarIcon from "@/components/icons/StarIcon";
import { Button } from "@/components/ui/button";

export default function MenuSection() {
    return (
        <section className="flex">
            <div className="space-y-5 w-[20%] ">
                <h1 className="text-[32px] text-[#03559E] font-bold">Catalog</h1>
                <div className="flex flex-col gap-6">
                    <span className="text-2xl font-medium text-[#666666]">Ichimlik</span>
                    <span className="text-2xl font-medium text-[#03559E]">Taom</span>
                    <span className="text-2xl font-medium text-[#666666]">Dessert</span>
                </div>
            </div>
            <div className="w-[80%] grid grid-cols-3 gap-4">
                {Array(6).fill(true).map(_ => (
                    <div className="p-4 bg-white shadow-xl rounded-2xl">
                        <div className="relative h-[280px] rounded-2xl bg-[#F1F1F1] flex items-center justify-center">
                            <div className="absolute sm:top-4 sm:right-4  top-1 right-1 bg-[#FFFFFFBF] p-2 rounded-md items-center gap-1 flex">
                                <span className="text-[16px] font-bold leading-[21.82px]">4.1</span>
                                <StarIcon className="text-[#F7B406]" />
                            </div>
                            <img src="/images/menu_card.svg" className="w-[70%]" alt="" />
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-[32px] text-[#03559E] font-bold">190 000 UZS</h1>
                            <h2 className="text-[28px] font-semibold">Title</h2>
                            <Button className="w-full !text-lg !font-normal text-white rounded-full">
                                <CartIcon className="!size-6" />
                                add cart
                            </Button>
                        </div>
                    </div>))}
            </div>
        </section>
    )
}
