import ChangePassword from "./change-password";
import CompleteRegistration from "./complete-registration";
import Confirm from "./confirm";
import EnterCode from "./enter-code";
import OtherOptions from "./other-options";
import Password from "./password";
import RegisterModal from "./register";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    if (!isOpen) return null;

    return (
        <>
            <RegisterModal />
            {/* <EnterCode /> */}
            {/* <OtherOptions /> */}
            {/* <CompleteRegistration /> */}
            {/* <Password /> */}
            {/* <ChangePassword /> */}
            {/* <Confirm /> */}
        </>
    );
}
