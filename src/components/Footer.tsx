export default function Footer() {
    return (
        <footer className="md:h-20 py-2 text-[#000000] w-full bg-[#F7F7F7] border-t border-[#A29F9F] ">
            <div className="container flex flex-col items-center justify-between h-full gap-2 mx-auto md:flex-row">
                <div className="flex items-center gap-2 md:gap-4 text-[11px] sm:text-sm md:text-lg md:w-1/2">
                    <span>2024, thebron</span>
                    <span>Конфиденцальность</span>
                    <span>Условия</span>
                    <span>Реквезиты</span>
                </div>
                <div className="flex items-center justify-end gap-2 md:gap-4 text-[11px] sm:text-sm md:text-lg md:w-1/2">
                    <div className="flex items-center gap-1 sm:gap-2">
                        <img className="size-4 sm:size-6" src="/images/language.svg" alt="Language" />
                        <span>Русский(ru)</span>
                    </div>
                    <img className="size-4 sm:size-6" src="/public/images/mdi_twitter.svg" alt="Language" />
                    <img className="size-4 sm:size-6" src="/public/images/ic_round-facebook.svg" alt="Language" />
                    <img className="size-4 sm:size-6" src="/public/images/ri_instagram-fill.svg" alt="Language" />
                </div>
            </div>
        </footer>
    )
}
