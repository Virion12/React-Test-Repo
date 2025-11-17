import type { ReactNode } from "react"
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

interface RootLayoutProps {
    children : ReactNode;
}

function RootLayout ({children} : RootLayoutProps){
    return(
        <div className="flex flex-col w-full">
            <Navbar></Navbar>
            <main className="flex-1 min-h-screen bg-base-200">
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default RootLayout