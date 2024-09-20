import OutlineStar from "@/components/icons/OutlineStar";
import StarIcon from "@/components/icons/StarIcon";
import ModalContainer from "@/components/ModalContainer";

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
            </div>
        </ModalContainer>
    )
}