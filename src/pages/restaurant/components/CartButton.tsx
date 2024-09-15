import CartIcon from "@/components/icons/CartIcon";
import { Button } from "@/components/ui/button";

const CartButton = () => {
    return (
        <Button variant={"ghost"} size="icon" className="p-1 size-12">
            <CartIcon />
        </Button>
    );
};

export default CartButton;
