import { ChevronDown, ChevronUp } from "lucide-react"
import { Link } from "react-router-dom"

type DATA = {id:number,navData:string,subMenu:string[]}


const data:DATA[] = [
    {id:1,navData:"Experiance",subMenu:["Technoidentity"]},
    {id:2,navData:"Education",subMenu:[]},
    {id:3,navData:"Hobbies",subMenu:["Photography","Drawing"]},
    {id:4,navData:"Contact",subMenu:[]}
]

export function Navbar(){

    return (
        <div className="flex justify-between items-center px-4 text-[#cdf0f5] bg-[#0e565a]/50">
            <Link to={`/`} className="hover:bg-[#0e565a] p-2">ASHOK</Link>
            <div className="flex items-center">
                {data.map(menu=>
                    <div key={menu.id} className="cursor-pointer group relative " >
                        {menu.subMenu.length
                        ? <h1 className="flex gap-2 relative hover:bg-[#0e565a] p-2">{menu.navData}</h1>
                        : <Link to={`/home/${menu.navData}`} className="p-2 items-center hover:bg-[#0e565a]">{menu.navData}</Link>}
                        {menu.subMenu.length ? <div className="absolute scale-0 group-hover:scale-100 transition ease-in-out delay-150 flex flex-col left-0 bg-[#0e565a]/50" key={menu.navData}>
                            {menu.subMenu.map(i=><Link to={`/home/${menu.navData}/${i}`} key={i} className="p-2 hover:bg-[#0e565a]">{i}</Link> )}</div>:""}
                    </div>
                )}
            </div>
        </div>
    )
}