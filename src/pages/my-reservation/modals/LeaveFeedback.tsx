import OutlineStar from "@/components/icons/OutlineStar";
import StarIcon from "@/components/icons/StarIcon";
import ModalContainer from "@/components/ModalContainer";
import { TextAreaDemo } from "@/components/TextAreaDemo";
import { Button } from "@/components/ui/button";

export default function LeaveFeedback() {
    return (
        <ModalContainer backCallBack={() => { }} title="Оставить отзыв" >
            <div className="space-y-8">
                <div className="border-b border-[#D9D9D9] h-[81px] flex justify-between items-start">
                    <div className="flex items-center gap-3">
                        <img src="/images/clean.svg" alt="clean" />
                        <span className="text-2xl font-bold">Чистота</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <StarIcon className="text-[#F7B406]" />
                        <StarIcon className="text-[#F7B406]" />
                        <OutlineStar />
                        <OutlineStar />
                        <OutlineStar />
                    </div>
                </div>
                <div className="border-b border-[#D9D9D9] h-[81px] flex justify-between items-start">
                    <div className="flex items-center gap-3">
                        <img src="/public/images/address.svg" alt="Местоположение" />
                        <span className="text-2xl font-bold">Местоположение</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <StarIcon className="text-[#F7B406]" />
                        <StarIcon className="text-[#F7B406]" />
                        <OutlineStar />
                        <OutlineStar />
                        <OutlineStar />
                    </div>
                </div>
                <div className="border-b border-[#D9D9D9] h-[81px] flex justify-between items-start">
                    <div className="flex items-center gap-3">
                        <img src="/public/images/Vector.svg" alt="Еда" />
                        <span className="text-2xl font-bold">Еда</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <StarIcon className="text-[#F7B406]" />
                        <StarIcon className="text-[#F7B406]" />
                        <OutlineStar />
                        <OutlineStar />
                        <OutlineStar />
                    </div>
                </div>
                <div className="border-b border-[#D9D9D9] h-[81px] flex justify-between items-start">
                    <div className="flex items-center gap-3">
                        <img src="/public/images/dish.svg" alt="Обслужива" />
                        <span className="text-2xl font-bold">Обслужива</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <StarIcon className="text-[#F7B406]" />
                        <StarIcon className="text-[#F7B406]" />
                        <OutlineStar />
                        <OutlineStar />
                        <OutlineStar />
                    </div>
                </div>
                <div className="border-b border-[#D9D9D9] h-[81px] flex justify-between items-start">
                    <div className="flex items-center gap-3">
                        <img src="/public/images/ticket.svg" alt="Цена и качество" />
                        <span className="text-2xl font-bold">Цена и качество</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <StarIcon className="text-[#F7B406]" />
                        <StarIcon className="text-[#F7B406]" />
                        <OutlineStar />
                        <OutlineStar />
                        <OutlineStar />
                    </div>
                </div>
            </div>
            <div className="space-y-5 ">
                <div className="flex items-center gap-4 p-4 shadow-custom rounded-2xl">
                    <div className="size-[120px] bg-[#F1F1F1] rounded-2xl flex items-center justify-center">
                        <img src="/images/menu_card.svg" className="w-[70%]" alt="Card" />
                    </div>
                    <div className="space-y-1">
                        <h1 className="font-bold text-[28px] text-black">Title</h1>
                        <h1 className="text-2xl font-bold text-primary">190 000 UZS</h1>
                        <div className="flex items-center gap-1">
                            <StarIcon className="text-[#F7B406]" />
                            <StarIcon className="text-[#F7B406]" />
                            <OutlineStar />
                            <OutlineStar />
                            <OutlineStar />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-4 shadow-custom rounded-2xl">
                    <div className="size-[120px] bg-[#F1F1F1] rounded-2xl flex items-center justify-center">
                        <img src="/images/menu_card.svg" className="w-[70%]" alt="Card" />
                    </div>
                    <div className="space-y-1">
                        <h1 className="font-bold text-[28px] text-black">Title</h1>
                        <h1 className="text-2xl font-bold text-primary">190 000 UZS</h1>
                        <div className="flex items-center gap-1">
                            <StarIcon className="text-[#F7B406]" />
                            <StarIcon className="text-[#F7B406]" />
                            <OutlineStar />
                            <OutlineStar />
                            <OutlineStar />
                        </div>
                    </div>
                </div>
            </div>
            <TextAreaDemo className="rounded-[10px]" label="Комментарий" />
            <Button className="w-full">Отправить</Button>
        </ModalContainer>
    )
}