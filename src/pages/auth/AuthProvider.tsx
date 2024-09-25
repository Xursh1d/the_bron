import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
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
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </AuthContext.Provider>
    );
};
