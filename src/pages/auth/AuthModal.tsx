import { ShowModalType } from "./AuthProvider";
import ChangePassword from "./change-password";
import CompleteRegistration from "./complete-registration";
import Confirm from "./confirm";
import EnterCode from "./enter-code";
import OtherOptions from "./other-options";
import Password from "./password";
import RegisterModal from "./register";

interface AuthModalProps {
    isOpen: ShowModalType;
}

export default function AuthModal({ isOpen }: AuthModalProps) {
    if (!isOpen) return null;

    return (
        <>
            {isOpen == "register" && <RegisterModal />}
            {isOpen == "otp" && <EnterCode />}
            {isOpen == "options" && <OtherOptions />}
            {isOpen == "complete" && <CompleteRegistration />}
            {isOpen == "password" && <Password />}
            {isOpen == "recover" && <ChangePassword />}
            {isOpen == "finish" && <Confirm />}
        </>
    );
}
