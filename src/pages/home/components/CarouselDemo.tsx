import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function CarouselDemo() {
    return (
        <Carousel plugins={[
            Autoplay({
                delay: 5000,
            }),
        ]} opts={{ loop: true, duration: 100, }} className="w-full">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-0">
                            <Card className="h-full bg-no-repeat bg-cover bg-[url('/images/banner.png')]">
                                <CardContent className="flex w-full h-[150px] sm:h-[321px] md:h-[364px] items-center px-8 md:p-6">
                                    <div className="font-bold font-open_sans space-y-1 md:space-y-5 text-2xl sm:text-[48px] md:text-[64px] text-[#D9D9D9]">
                                        <h1 className="sm:leading-[56px] md:leading-[72px]">For the first rented house</h1>
                                        <div className="md:h-[104px] sm:h-[80px] h-10 w-min flex items-center justify-center p-2 md:p-3 rounded-lg bg-[#FFFFFF80] ">10%</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
