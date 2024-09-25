import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import { HTMLInputTypeAttribute } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

interface InputDemoProps {
    label?: string;
    error?: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    className?: string;
}
export function InputDemo(props: InputDemoProps) {
    const { label, placeholder, type, error, className } = props;
    return (
        <div className="relative space-y-1">
            {label && <Label className="font-bold text-[16px]" htmlFor="">{label}</Label>}
            <Input type={type} placeholder={placeholder} className={cn(`${error && "border-[#C13515] focus:!ring-[#C13515]"} h-14 rounded-[10px] text-[16px]`, className)} />
            <p className="text-sm text-[#C13515]">{error}</p>
            {type == "password" && <Button variant={"ghost"} size="icon" className="absolute top-1 right-1"><EyeIcon color={error && "#C13515"} /></Button>}
        </div>
    )
}
