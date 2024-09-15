import Footer from "@/components/Footer"
import Header from "@/components/header/Header"
import { Outlet } from "react-router-dom"

export default function PageLayout() {
    return (
        <section className="w-full h-screen">
            <Header />
            <main className="container mx-auto mb-5 md:mb-10">
                <Outlet />
            </main>
            <Footer />
        </section>
    )
}
