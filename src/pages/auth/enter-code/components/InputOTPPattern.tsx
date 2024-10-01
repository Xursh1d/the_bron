import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPPattern() {
    return (
        <InputOTP maxLength={6} containerClassName="!flex-col" pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup className="gap-4">
                <InputOTPSlot className="bg-[#F5F5F5] rounded-[8px] border-none text-2xl size-[43px] sm:size-[60px]" index={0} />
                <InputOTPSlot className="bg-[#F5F5F5] rounded-[8px] border-none text-2xl size-[43px] sm:size-[60px]" index={1} />
                <InputOTPSlot className="bg-[#F5F5F5] rounded-[8px] border-none text-2xl size-[43px] sm:size-[60px]" index={2} />
                <InputOTPSlot className="bg-[#F5F5F5] rounded-[8px] border-none text-2xl size-[43px] sm:size-[60px]" index={3} />
                <InputOTPSlot className="bg-[#F5F5F5] rounded-[8px] border-none text-2xl size-[43px] sm:size-[60px]" index={4} />
                <InputOTPSlot className="bg-[#F5F5F5] rounded-[8px] border-none text-2xl size-[43px] sm:size-[60px]" index={5} />
            </InputOTPGroup>
            <p className="text-[#E33629] text-sm sm:text-lg text-center">Введите пароль еще раз в правильном формате</p>
        </InputOTP>
    )
}
