import CartIcon from "@/components/icons/CartIcon";
import StarIcon from "@/components/icons/StarIcon";
import { Button } from "@/components/ui/button";

export default function MenuSection() {
    return (
        <section className="flex flex-col sm:flex-row">
            <div className="gap-5 items-center sm:items-start w-full flex flex-col sm:w-[20%]">
                <h1 className="hidden sm:block text-[32px] text-[#03559E] font-bold">Catalog</h1>
                <div className="flex flex-row w-full h-full gap-6 overflow-auto hide-scroll sm:flex-col">
                    <span className="text-[16px] sm:text-2xl font-medium text-[#666666]">Ichimlik</span>
                    <div className="pb-1 border-b-[1.5px] border-[#03559E] sm:border-none sm:w-full">
                        <span className="text-[16px] sm:text-2xl font-medium text-[#03559E]">Taom</span>
                    </div>
                    <span className="text-[16px] sm:text-2xl font-medium text-[#666666]">Dessert</span>
                </div>
            </div>
            <div className="w-full sm:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array(6).fill(true).map(_ => (
                    <div className="p-4 bg-white shadow-xl rounded-2xl">
                        <div className="relative md:p-10 h-[238px] md:h-[280px] rounded-2xl bg-[#F1F1F1] flex items-center justify-center">
                            <div className="absolute sm:top-4 sm:right-4  top-1 right-1 bg-[#FFFFFFBF] p-2 rounded-md items-center gap-1 flex">
                                <span className="text-[16px] font-bold leading-[21.82px]">4.1</span>
                                <StarIcon className="text-[#F7B406]" />
                            </div>
                            <img src="/images/menu_card.svg" className="!w-[70%] h-[80%] object-scale-down" alt="" />
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
