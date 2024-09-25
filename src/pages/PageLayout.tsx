import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";
import AuthModal from "./auth";
import { useAuth } from "./auth/AuthProvider";

export default function PageLayout() {
    const { setShowModal, showModal } = useAuth()

    return (
        <section className="w-full h-screen">
            <Header />
            <main className="container mx-auto mb-5 md:mb-10">
                <Outlet />
            </main>
            <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} />
            <Footer />
        </section>
    );
}
