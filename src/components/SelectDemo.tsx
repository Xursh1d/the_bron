import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "./ui/label";

interface ISelectDemoProps {
    title: string;
}

export function SelectDemo(props: ISelectDemoProps) {
    const { title } = props;
    return (
        <div className="space-y-1 ">
            <Label className="font-bold text-[16px]" htmlFor="">{title}</Label>
            <Select>
                <SelectTrigger className="w-full rounded-[10px] h-[52px] text-[16px]">
                    <SelectValue placeholder={title} />
                </SelectTrigger>
                <SelectContent >
                    <SelectGroup >
                        <SelectItem className="text-[16px]" value="apple">Apple</SelectItem>
                        <SelectItem className="text-[16px]" value="banana">Banana</SelectItem>
                        <SelectItem className="text-[16px]" value="blueberry">Blueberry</SelectItem>
                        <SelectItem className="text-[16px]" value="grapes">Grapes</SelectItem>
                        <SelectItem className="text-[16px]" value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
