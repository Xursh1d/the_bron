import StarIcon from "@/components/icons/StarIcon";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const ReviewsSection = () => {
    return (
        <section className="space-y-5 sm:space-y-10">
            <div className="flex flex-col gap-3 md:w-[600px]">
                <span className="text-lg font-bold">Общая оценка</span>
                {Array(5).fill(true).map((_, index) => <div className="flex items-center gap-2">
                    <div className="flex items-center space-x-1">
                        <span className="text-[16px] font-bold">{index + 1}</span>
                        <StarIcon className="!size-4 text-[#F7B406]" />
                    </div>
                    <Progress value={76} className="w-full h-[9px]" />
                </div>)}
            </div>
            <div className="flex w-full gap-5 overflow-auto md:grid md:grid-cols-2">
                {Array(4).fill(true).map(_ => <div className="space-y-3 min-w-[292px] sm:min-w-auto border sm:border-none border-[#E0E0E0] rounded-xl sm:rounded-none p-3 sm:p-0">
                    <div className="flex items-center h-[72px] space-x-4">
                        <div className="size-[72px] rounded-full object-cover bg-[#D9D9D9]"></div>
                        <div className="flex flex-col gap-2 justfy-center">
                            <h6 className="text-lg font-bold">Sven</h6>
                            <h6 className="text-lg font-bold">Германия</h6>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:items-center sm:flex-row">
                        <div className="flex items-center gap-[2px]"><StarIcon className="!size-5 text-[#F7B406]" /><StarIcon className="!size-5 text-[#F7B406]" /><StarIcon className="!size-5 text-[#F7B406]" /><StarIcon className="!size-5 text-[#F7B406]" /><StarIcon className="!size-5 text-[#F7B406]" /></div>
                        <p className="text-lg font-bold">август 2023 г. </p>
                        <p className="hidden sm:block text-[16px] text-[#A29F9F] font-bold">Срок аренды - Около недели</p>
                    </div>
                    <p className="font-bold text-[16px] text-[#343330]">Срок аренды - Около недели</p>
                    <div className="space-y-2">
                        <p className="overflow-hidden text-sm text-black sm:font-bold sm:text-lg line-clamp-5 text-ellipsis">
                            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
                            mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Yorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos
                        </p>
                        <Button className="!p-0 !text-black font-bold underline text-sm sm:!text-lg" variant={"link"}>
                            Показать ещё
                            <svg className="size-4 sm:size-6" width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9251 10.4425L9.87424 16.6925C9.80873 16.7506 9.73096 16.7967 9.64537 16.8281C9.55978 16.8595 9.46804 16.8757 9.3754 16.8757C9.28275 16.8757 9.19102 16.8595 9.10542 16.8281C9.01983 16.7967 8.94206 16.7506 8.87655 16.6925C8.81104 16.6345 8.75908 16.5655 8.72362 16.4897C8.68817 16.4138 8.66992 16.3325 8.66992 16.2503C8.66992 16.1682 8.68817 16.0869 8.72362 16.011C8.75908 15.9352 8.81104 15.8662 8.87655 15.8082L15.4294 10.0003L8.87655 4.19253C8.74425 4.07526 8.66992 3.9162 8.66992 3.75035C8.66992 3.5845 8.74425 3.42544 8.87655 3.30816C9.00885 3.19088 9.18829 3.125 9.3754 3.125C9.5625 3.125 9.74194 3.19088 9.87424 3.30816L16.9251 9.55816C16.9906 9.61621 17.0426 9.68514 17.0781 9.76101C17.1136 9.83688 17.1319 9.91821 17.1319 10.0003C17.1319 10.0825 17.1136 10.1638 17.0781 10.2397C17.0426 10.3156 16.9906 10.3845 16.9251 10.4425Z" fill="#343330" />
                            </svg>
                        </Button>
                    </div>
                </div>)}
            </div>
            <div className="flex justify-center w-full">
                <Button variant={"outline"} className=" border-[#000000] h-12 w-full sm:w-auto !text-[16px] !text-[#000000]">Показать все отзывы(23)</Button>
            </div>
        </section>
    );
};

export default ReviewsSection;
