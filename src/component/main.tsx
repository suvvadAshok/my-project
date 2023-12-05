import { motion } from "framer-motion"
import ashok from "../../public/ashok.jpg_prev_ui.png"
import ashok_1 from "../../public/ashok_url.png"

export function Main(){
    return (
      <div className="h-full p-4 flex justify-center items-center bg-gradient-to-br from-primary to-white">
        <motion.section 
        initial={{opacity:0, x:-200}}
        animate={{opacity:1, x:0}}
        transition={{delay:0.5, duration:4.5, type:"spring", stiffness:200}}
        className="flex flex-col items-center">
          <h1 className="text-6xl font-semibold tracking-[0.5rem] max-lg:text-4xl max-md:text-2xl max-md:tracking-[0.4rem]">ASHOK KUMAR</h1>
          <h1 className="text-8xl font-extrabold tracking-wider max-lg:text-7xl max-md:text-[3.2rem] max-lg:tracking-normal ">SUVVADA</h1>
          <h6 className="font-IBMPlex tracking-[1.3rem] max-lg:tracking-[0.7rem] max-md:tracking-[0.3rem]">SOFTWARE-DEVELOPER</h6>
        </motion.section>
        <motion.div
        initial={{opacity:0, y:-100, scale:0}}
        animate={{opacity:1, y:0, scale:0.75}}
        transition={{delay:0.5, duration:2.5, type:"spring", stiffness:150}}
         className="">
          <img src={ashok} alt="" className="absolute rounded-b-full max-md:w-0 max-md:h-0" />
          <img src={ashok_1} alt="" className="relative left-20 top-10 rounded-b-full" />
        </motion.div>
          {/* <img src={ashok_1} alt="" className="relative right-40 top-10 rounded-b-full" /> */}
      </div>
  )
}