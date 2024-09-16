import AboutSection from './AboutSection';
import ReviewsSection from './ReviewsSection';
import MenuSection from './MenuSection';
import CartButton from './CartButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CartSection from './CartSection';

const tabTriggerClass = "text-[28px] !text-[#666666] data-[state=active]:shadow-none !bg-transparent font-semibold data-[state=active]:!text-[#03559E] data-[state=active]:!bg-transparent !p-0 !h-auto";

const TabItem = ({ value, children }: { value: string; children: React.ReactNode }) => (
    <TabsTrigger className={tabTriggerClass} value={value}>
        {children}
    </TabsTrigger>
);

const TabsSection = () => {
    return (
        <Tabs defaultValue="about" className="pb-10 space-y-10 bg-white">
            <TabsList className="bg-transparent space-x-[64px]">
                <TabItem value="about">About</TabItem>
                <TabItem value="menu">Menu</TabItem>
                <TabItem value="review">Reviews</TabItem>
                <TabItem value="cart">
                    <CartButton />
                </TabItem>
            </TabsList>
            <TabsContent value="about">
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
