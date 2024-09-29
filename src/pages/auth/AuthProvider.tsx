import { createContext, useContext, useState, ReactNode } from "react";

export type ShowModalType = "register" | "otp" | "options" | "finish" | "password" | "recover" | "complete" | null;
interface AuthContextType {
    showModal: ShowModalType
    setShowModal: (value: ShowModalType) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [showModal, setShowModal] = useState<ShowModalType>(null);

    return (
        <AuthContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </AuthContext.Provider>
    );
};
