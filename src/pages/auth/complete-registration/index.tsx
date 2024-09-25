import { CheckboxDemo } from "@/components/CheckboxDemo";
import { DatePickerDemo } from "@/components/DatePickerDemo";
import { InputDemo } from "@/components/InputDemo";
import ModalContainer from "@/components/ModalContainer";
import { Button } from "@/components/ui/button";

export default function CompleteRegistration() {
    return (
        <ModalContainer childClass="!p-0" isHeading={false}>
            <div className="px-8 space-y-5 py-7">
                <h1 className="text-lg font-bold ">Завершить регистрацию</h1>
                <div className="space-y-4">
                    <InputDemo placeholder="Имя" error="Проверьте правильность Имя" />
                    <InputDemo placeholder="Фамилия" error="Проверьте правильность фамилии" />
                    <DatePickerDemo />
                    <InputDemo placeholder="example@gmail.com" />
                </div>
                <h1 className="text-lg font-bold ">Пароль</h1>
                <div className="space-y-4">
                    <InputDemo placeholder="Пароль" type={"password"} error="Убедитесь, что ваш пароль является сильным и безопасным, и содержит как большие, так и маленькие буквы, а также цифры" />
                    <InputDemo placeholder="Повторите пароль" type={"password"} error="Проверьте соответствие пароля" />
                    <CheckboxDemo label="Я ознакомился с пользовательским соглашением" />
                </div>
                <Button className="!h-12 w-full !text-lg">Продолжить</Button>
            </div>
        </ModalContainer>
    )
}
