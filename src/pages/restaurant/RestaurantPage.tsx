import { DatePickerDemo } from "@/components/DatePickerDemo";
import StarIcon from "@/components/icons/StarIcon";
import { SelectDemo } from "@/components/SelectDemo";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function RestaurantPage() {
    const navigate = useNavigate()

    return (
        <section className="space-y-10">
            <div className="space-y-4">
                <Button variant={"ghost"} onClick={() => navigate(-1)}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.7083 25.2921C20.8012 25.385 20.8749 25.4953 20.9252 25.6167C20.9755 25.7381 21.0013 25.8682 21.0013 25.9996C21.0013 26.131 20.9755 26.2611 20.9252 26.3825C20.8749 26.5039 20.8012 26.6142 20.7083 26.7071C20.6154 26.8 20.5051 26.8737 20.3837 26.924C20.2623 26.9743 20.1322 27.0001 20.0008 27.0001C19.8694 27.0001 19.7393 26.9743 19.6179 26.924C19.4965 26.8737 19.3862 26.8 19.2933 26.7071L9.29329 16.7071C9.20031 16.6142 9.12655 16.5039 9.07623 16.3825C9.0259 16.2611 9 16.131 9 15.9996C9 15.8682 9.0259 15.738 9.07623 15.6166C9.12655 15.4952 9.20031 15.385 9.29329 15.2921L19.2933 5.29208C19.4809 5.10444 19.7354 4.99902 20.0008 4.99902C20.2662 4.99902 20.5206 5.10444 20.7083 5.29208C20.8959 5.47972 21.0013 5.73422 21.0013 5.99958C21.0013 6.26494 20.8959 6.51944 20.7083 6.70708L11.4145 15.9996L20.7083 25.2921Z" fill="#343330" />
                    </svg>
                    <span className="text-2xl font-bold">Назад</span>
                </Button>
                <h1 className="text-[40px] font-bold">Name Restarount</h1>
                <div className="flex items-center gap-4">
                    <StarIcon />
                    <span className="text-2xl font-bold">4.1</span>
                    <Link className="text-2xl font-bold underline text-primary" to="/">Tashkent</Link>
                </div>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-5">
                <div className="col-span-2 h-[408px] row-span-2 overflow-hidden rounded-xl">
                    <img className="object-cover size-full" src="/images/restaurant.svg" alt="Restaurant" />
                </div>
                <div className="overflow-hidden rounded-xl h-[194px]">
                    <img className="object-cover size-full" src="/images/restaurant.svg" alt="Restaurant" />
                </div>
                <div className="overflow-hidden rounded-xl h-[194px]">
                    <img className="object-cover size-full" src="/images/restaurant.svg" alt="Restaurant" />
                </div>
                <div className="overflow-hidden rounded-xl h-[194px]">
                    <img className="object-cover size-full" src="/images/restaurant.svg" alt="Restaurant" />
                </div>
                <div className="overflow-hidden rounded-xl h-[194px]">
                    <img className="object-cover size-full" src="/images/restaurant.svg" alt="Restaurant" />
                </div>
            </div>
            <div className="flex items-start gap-[30px]">
                <div className="w-[63.65%] min-h-[590px] border border-[#C2C2C2] rounded-3xl"></div>
                <div className="w-[36.35%] py-6 px-5 rounded-3xl min-h-[360px] border border-[#C2C2C2] space-y-3">
                    <SelectDemo title="Филиал" />
                    <SelectDemo title="Guest number" />
                    <SelectDemo title="Place" />
                    <div className="grid items-center grid-cols-2 gap-3">
                        <DatePickerDemo />
                    </div>
                    <Button className="w-full">Бронировать</Button>
                </div>
            </div>
        </section>
    )
}
