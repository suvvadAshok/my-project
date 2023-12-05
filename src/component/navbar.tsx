import { ChevronDown, ChevronUp, Hammer, Menu, X } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"

type DATA = {id:number,navData:string,subMenu:string[]}


const data:DATA[] = [
    {id:1,navData:"Experiance",subMenu:["Technoidentity"]},
    {id:2,navData:"Education",subMenu:[]},
    {id:3,navData:"Hobbies",subMenu:["Photography","Drawing"]},
    {id:4,navData:"Contact",subMenu:[]}
]

export function Navbar(){
    const [menu, setMenu] = React.useState<boolean>(false)

    return (
        <div className="flex justify-between items-center px-4 text-textColor bg-secondary/60 hover:bg-secondary/80 relative">
            <Link to={`/`} className="hover:bg-secondary p-2">ASHOK</Link>
            <div className="flex items-center max-sm:hidden ">
                <NavMenu data={data}/>               
            </div>
            <div className="max-sm:block hidden" onClick={()=>setMenu(!menu)}>
                {
                    menu
                    ? <>
                    <X/> 
                    <div className="absolute flex items-center justify-around w-full right-0 top-10 bg-secondary/60 hover:bg-secondary/80">
                    <NavMenu data={data} />
                    </div></>
                    :<Menu/>
                }
            </div>
        </div>
    )
}


function NavMenu({data}:{data:DATA[]}){
    return(
        <>
            {data.map(menu=>
                <div key={menu.id} className="cursor-pointer group relative " >
                    {menu.subMenu.length
                    ? <h1 className="flex gap-2 relative hover:bg-secondary p-2">{menu.navData}</h1>
                    : <Link to={`/home/${menu.navData}`} className="p-2 items-center hover:bg-secondary">{menu.navData}</Link>}

                    {menu.subMenu.length 
                        ? <div className="absolute scale-0 group-hover:scale-100 transition ease-in-out delay-150 flex flex-col left-0 bg-secondary/50" key={menu.navData}>
                            {menu.subMenu.map(i=><Link to={`/home/${menu.navData}/${i}`} key={i} className="p-2 hover:bg-secondary">{i}</Link> )}</div>
                        : ""}
                </div>
            )}
        </>
    )
}

