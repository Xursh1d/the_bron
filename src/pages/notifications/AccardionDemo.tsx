import ChevronDrop from "@/components/icons/ChevronDrop"
import StarIcon from "@/components/icons/StarIcon"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger icon={<ChevronDrop />}>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-4">
                                <div className="size-[120px]">
                                    <img className="object-cover size-full rounded-xl" src="/images/restaurant.svg" alt="IMG" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xl font-bold">Name of Restaurant</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm">Tashkent</p>
                                        <StarIcon className="size-5 text-[#F7B406]" />
                                        <p className="text-lg">5,00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent >
                    <p className="text-lg text-[#808080] ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni quod fugiat dolorum recusandae
                        laboriosam.Cum quia et quae sequi? Ratione tempora consequatur illum inventore id soluta nostrum aperiam placeat.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" >
                <AccordionTrigger icon={<ChevronDrop />}>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-4">
                                <div className="size-[120px]">
                                    <img className="object-cover size-full rounded-xl" src="/images/restaurant.svg" alt="IMG" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xl font-bold">Name of Restaurant</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm">Tashkent</p>
                                        <StarIcon className="size-5 text-[#F7B406]" />
                                        <p className="text-lg">5,00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent >
                    <p className="text-lg text-[#808080] ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni quod fugiat dolorum recusandae
                        laboriosam.Cum quia et quae sequi? Ratione tempora consequatur illum inventore id soluta nostrum aperiam placeat.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
