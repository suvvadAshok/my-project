import React, { useEffect } from "react"
import AMG from "/amg.jpg"
import chaithanya from "/chaitanya.jpg"
import YSR from "/ysrclg.png"
import { motion } from "framer-motion"
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react"
import { setTimeout } from "timers/promises"

const EducationData = [
    {
        id:1,
        institute: "AMG Residential EM High School",
        yearStart: 2015,  
        yearEnd: 2016,
        Percentage: "87%",  
        img:AMG,
    },
    {
        id:2,
        institute: "Sri Chaitanya Jr College",
        yearStart: 2016,  
        yearEnd: 2018,
        Percentage: "94.3%",  
        img: chaithanya,
    },
    {
        id:3,
        institute: "Yogi Vemana University",
        yearStart: 2018,  
        yearEnd: 2022,
        Percentage: "75.2%",  
        img: YSR
    }
]

export function Education(){
    const [show, setShow] = React.useState(1);

    // useEffect(()=> { 
    //     const count = setTimeout(()=>
    //      { setBgIndex(() => bgIndex >= (backgroundImages.length - 1) 
    //         ? bgIndex * 0 
    //         : bgIndex + 1) },1000) 
    //         return () => { clearTimeout(count); }; 
    //     },[backgroundImages.length, bgIndex]) 
    //     style={{ backgroundImage: `url(${backgroundImages[bgIndex]}) ` }}

    return (
        <div className="flex w-full h-full items-center justify-center gap-10 pt-10 bg-gradient-to-br from-primary to-[#e3f4f8]">
            <ChevronLeftCircle onClick={()=>setShow((show+1)%4 ? 1 : (show-1)%4)} className="h-12 w-12 text-textColor hover:text-secondary transition-all duration-300"/>
            {EducationData.filter(i=>show === i.id).map(education=>
            <div className="border h-[80%] w-[80%] rounded-xl gap-4 px-2 py-4 flex items-center justify-around" key={education.id}>
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="text-xl font-semibold">{education.institute}</h1>
                    <h4 className="text-lg font-medium">{education.yearStart}-{education.yearEnd}</h4>
                    <h5 className="text-xl font-normal">{education.Percentage}</h5>
                </div>
                <img src={education.img} alt="Institute img" className="h-[70%] w-[70%] object-contain rounded-lg" />
            </div> )}
            <ChevronRightCircle onClick={()=>setShow((show+1)%4===0? 1 : (show+1)%4)} className="h-12 w-12 text-textColor hover:text-secondary transition-all delay-100"/>
        </div>
    )
}