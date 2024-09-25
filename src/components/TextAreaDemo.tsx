import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface ITextAreaDemoProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

export function TextAreaDemo(props: ITextAreaDemoProps) {
    const { rows = 5, label, placeholder, ...args } = props;
    return (
        <div className="space-y-1">
            {label && <Label className="font-bold text-[16px]" htmlFor="">{label}</Label>}
            <Textarea {...args} rows={rows} placeholder={placeholder} />
        </div>
    );
}
