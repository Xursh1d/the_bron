import TitleBar from "@/components/TitleBar";
import { AccordionDemo } from "./AccardionDemo";

export default function NotificationsPage() {
    return (
        <section className="space-y-10">
            <TitleBar title="Уведомление" />
            <div className="flex flex-col items-center gap-10">
                <AccordionDemo />
            </div>
        </section>
    )
}
