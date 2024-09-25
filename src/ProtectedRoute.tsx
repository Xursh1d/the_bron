import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./pages/auth/AuthProvider";

const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};

const ProtectedRoute = () => {
    const { setShowModal } = useAuth(); // Get setShowModal from AuthContext
    const isAuth = isAuthenticated();

    useEffect(() => {
        if (!isAuth) {
            setShowModal(true);
        }
    }, [isAuth, setShowModal]);

    return (
        <>
            {true ? (
                <Outlet />
            ) : null}
        </>
    );
};

export default ProtectedRoute;
