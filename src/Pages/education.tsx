import AMG from "/amg.jpg"
import chaithanya from "/chaitanya.jpg"
import YSR from "/ysrclg.png"
import { motion } from "framer-motion"

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
    return (
        <div className="flex flex-col items-center gap-10 mt-10">
            {EducationData.map(education=>
            <motion.div className="border rounded-xl gap-4 px-2 py-4 flex w-[70%] h-[90%] justify-around" key={education.id}>
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="text-xl font-semibold">{education.institute}</h1>
                    <h4 className="text-lg font-medium">{education.yearStart}-{education.yearEnd}</h4>
                    <h5 className="text-xl font-normal">{education.Percentage}</h5>
                </div>
                <img src={education.img} alt="Institute img" className="h-72 w-72 rounded-lg" />
            </motion.div> )}
        </div>
    )
}