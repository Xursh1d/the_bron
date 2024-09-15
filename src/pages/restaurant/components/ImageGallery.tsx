export const ImageGallery = () => (
    <div className="grid grid-cols-4 grid-rows-2 gap-5">
        <div className="col-span-2 h-[408px] row-span-2 overflow-hidden rounded-xl">
            <img className="object-cover size-full" src="/images/restaurant.svg" alt="Restaurant" />
        </div>
        {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="overflow-hidden rounded-xl h-[194px]">
                <img className="object-cover size-full" src="/images/restaurant.svg" alt="Restaurant" />
            </div>
        ))}
    </div>
);
