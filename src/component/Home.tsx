import { Outlet } from "react-router-dom";
import { Main } from "./main";
import { Navbar } from "./navbar";
import { motion } from "framer-motion";

export function Home(){
    return(
    <div className="flex flex-col h-screen w-screen">
        <Navbar/>
        <motion.div className="grow overflow-auto">
            <Outlet/>
        </motion.div>
    </div>
    )
}