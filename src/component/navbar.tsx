import { ChevronDown, ChevronUp } from "lucide-react"
import React from "react"

type DATA = {id:number,navData:string,subMenu:string[]}


const data:DATA[] = [
    {id:1,navData:"Experiance",subMenu:["Technoidentity"]},
    {id:2,navData:"Education",subMenu:[]},
    {id:3,navData:"Hobbies",subMenu:["Photography","Drawing"]},
    {id:4,navData:"Contact",subMenu:[]}
]

export function Navbar(){

    return (
        <div className="flex justify-between p-4 border-b-2">
            <h1>ASHOK</h1>
            <div className="flex gap-12">
            {data.map(menu=>
                <div key={menu.id} className="hover:bg-slate-400 px-4 cursor-pointer group relative" >
                    <h1 className="flex gap-2 items-center relative"><span>{menu.navData}</span> <span>{menu.subMenu.length? <ChevronDown />:""}</span></h1>
                    <h1 className="flex gap-2 items-center scale-0 hover:scale-100 absolute"><span>{menu.navData}</span> <span>{menu.subMenu.length? <ChevronUp />:""}</span></h1>
                    {menu.subMenu.length ? <div className="absolute scale-0 group-hover:scale-100 transition ease-in-out delay-150 bg-white" key={menu.navData}>{menu.subMenu.map(i=><h1 key={i}>{i}</h1> )}</div>:""}
                </div>
            )}
            </div>
        </div>
    )
}

export function Dropdown({subMenu}:{subMenu:string[]}){
    return(
        <div className="flex flex-col">
             {subMenu.map(sub => <h1 key={sub}>{sub}</h1> )}
        </div>
    )
}