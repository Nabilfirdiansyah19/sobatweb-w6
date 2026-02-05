import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FAQChatbot from "./FAQChatbot";
import { motion } from "framer-motion";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-soft-white dark:bg-soft-black text-soft-black dark:text-soft-white">
            <Navbar />
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex-grow"
            >
                <Outlet />
            </motion.main>
            <Footer />
            <FAQChatbot />
        </div>
    );
};

export default Layout;
