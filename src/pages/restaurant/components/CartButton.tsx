import CartIcon from "@/components/icons/CartIcon";
import { Button } from "@/components/ui/button";

const CartButton = () => {
    return (
        <Button variant={"ghost"} size="icon" className="relative p-1 size-8 sm:size-12">
            <CartIcon className="w-9 text-[#666666]" />
            <div className="absolute flex items-center top-0 right-0 justify-center rounded-full size-2 sm:size-6 bg-primary text-[16px] text-white">
                <span className="hidden sm:block">2</span>
            </div>
        </Button>
    );
};

export default CartButton;
