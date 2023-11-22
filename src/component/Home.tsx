import { Outlet } from "react-router-dom";
import { Main } from "./main";
import { Navbar } from "./navbar";

export function Home(){
    return(
    <div className="flex flex-col h-screen w-screen">
        <Navbar/>
        <div className="grow overflow-auto">
            <Outlet/>
        </div>
    </div>
    )
}