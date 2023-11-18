import { Main } from "./main";
import { Navbar } from "./navbar";

export function Home(){
    return(
        <div className="flex flex-col">
        <Navbar/>
        <Main/>
        </div>
    )
}