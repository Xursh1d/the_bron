import AboutSection from './AboutSection';
import ReviewsSection from './ReviewsSection';
import MenuSection from './MenuSection';
import CartButton from './CartButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CartSection from './CartSection';

const TabsSection = () => {
    return (
        <Tabs defaultValue="account" className="pb-10 space-y-10 bg-white">
            <TabsList className="bg-transparent space-x-[64px]">
                <TabsTrigger
                    className="text-[28px] !text-[#666666] data-[state=active]:shadow-none !bg-transparent font-semibold data-[state=active]:!text-[#03559E] data-[state=active]:!bg-transparent !p-0 !h-auto"
                    value="account"
                >
                    About
                </TabsTrigger>
                <TabsTrigger
                    className="text-[28px] !text-[#666666] data-[state=active]:shadow-none !bg-transparent font-semibold data-[state=active]:!text-[#03559E] data-[state=active]:!bg-transparent !p-0 !h-auto"
                    value="menu"
                >
                    Menu
                </TabsTrigger>
                <TabsTrigger
                    className="text-[28px] !text-[#666666] data-[state=active]:shadow-none !bg-transparent font-semibold data-[state=active]:!text-[#03559E] data-[state=active]:!bg-transparent !p-0 !h-auto"
                    value="review"
                >
                    Reviews
                </TabsTrigger>
                <TabsTrigger
                    className="text-[28px] !text-[#666666] data-[state=active]:shadow-none !bg-transparent font-semibold data-[state=active]:!text-[#03559E] data-[state=active]:!bg-transparent !p-0 !h-auto"
                    value="cart"
                >
                    <CartButton />
                </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <AboutSection />
            </TabsContent>
            <TabsContent value="menu">
                <MenuSection />
            </TabsContent>
            <TabsContent value="review">
                <ReviewsSection />
            </TabsContent>
            <TabsContent value="cart">
                <CartSection />
            </TabsContent>
        </Tabs>
    );
};

export default TabsSection;
