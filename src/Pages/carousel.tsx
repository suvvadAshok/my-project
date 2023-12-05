
import { motion } from "framer-motion";
import scroll from "../../assets/scroll.svg";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import {  AlertCircle, Annoyed, Circle, CircleDashed, CircleDot, Divide, Grip, RefreshCcw, ShieldEllipsis, X } from "lucide-react";

const aboutVariant = {
    hidden : {
        opacity: 0,
        x: -200
    },
    visible: {
        opacity:1, 
        x:0,
        transition:{
            mass:0.7,
            damping:9, 
            type:"spring", 
            stiffness:100
        }
    }
}

const paraVariant = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible:{
        opacity: 1,
        scale:1,
        transition: {
            mass:0.7,
            damping:9, 
            type:"spring", 
            stiffness:100,
            when: "beforeChildren"
        }
    }
}

const decorationVariant = {
    hidden: {
        opacity: 0,
        scale: 0,
        x:-"20vh"
    },
    visible:{
        opacity: 1,
        scale:1,
        x:0
    }
}

const homeData = [
    {
        id:0,
        bg:"one",
        head: "Where ingenuity meets business strategy to transform our world",
        para: "Our mission is simple: Bring ideas to life, through creativity and strategic insight,Innovate & implement best in technology,Craft powerful brand stories that stand out."
    },
    {
        id:1,
        bg:"two",
        head: "Where ingenuity meets business strategy to transform our world",
        para: "Our mission is simple: Bring ideas to life, through creativity and strategic insight,Innovate & implement best in technology,Craft powerful brand stories that stand out."
    },
    {
        id:2,
        bg:"three",
        head: "Where ingenuity meets business strategy to transform our world",
        para: "Our mission is simple: Bring ideas to life, through creativity and strategic insight,Innovate & implement best in technology,Craft powerful brand stories that stand out."
    },
    {
        id:3,
        bg:"four",
        head: "Where ingenuity meets business strategy to transform our world",
        para: "Our mission is simple: Bring ideas to life, through creativity and strategic insight,Innovate & implement best in technology,Craft powerful brand stories that stand out."
    },
]

// useEffect(()=> { 
//     const count = setTimeout(()=> 
//     { setBgIndex(() => 
//         bgIndex >= (backgroundImages.length - 1) 
//         ? bgIndex * 0 : bgIndex + 1) },1000) 
        
//         return () => { clearTimeout(count); }; 
//     },[backgroundImages.length, bgIndex]) 

    // style={{ backgroundImage: `url(${backgroundImages[bgIndex]}) ` }}

export function AboutUs(){
    const [menu,setMenu] = React.useState(false)
    const [bgImg, setBgImg] = React.useState<number>(0);

    useEffect(()=>{
        const count = setTimeout(()=>{
            setBgImg(()=>
            bgImg >= homeData.length -1 ? bgImg *0: bgImg+1)
        },1000)
        return ()=>{clearTimeout(count)}
    },[homeData.length, bgImg])
    const bgUrl = homeData.filter(i=>(i.id===bgImg))[0].bg
    return(
        <section id="Home" className={`flex flex-col gap-10 h-screen w-screen justify-center bg-${bgUrl} bg-cover relative transition-transform -translate-x-full duration-500 ease-out delay-75`}
        // style={{transform: `translateX(${bgImg * 100}%)`}}
        >
        
            <div className="flex flex-col gap-4">
                <motion.h1
                variants={aboutVariant}
                initial="hidden"
                animate="visible"
                 className="text-3xl font-[900] max-lg:font-extrabold max-lg:text-xl justify-start">
                    Where <span className="text-[#F99624]">ingenuity</span> meets buisiness <br />
                    <span className="text-[#A00000]">strategy</span> to transform our world
                </motion.h1>
                <motion.div
                variants={paraVariant}
                initial="hidden"
                animate="visible"
                 className="border-l-4 pl-16 w-[50%] max-lg:w-[100%] transition ease-out delay-200 border-[#F99624] ">
                    Our mission is simple: to craft brands that not only stand out in a crowded 
                    marketplace but endure as timeless symbols of innovation and quality. simple: to craft brands that not o  
                </motion.div>
            </div>

            <div onClick={()=>setMenu(!menu)} className="relative m-20">
                <button className="p-2">{menu?<X/>:<Grip/>}</button>
                {menu
                ? <div className="grid grid-cols-3 grid-rows-3 h-20 w-20 gap-6 absolute -top-10 -left-10 transform delay-700 ease-out duration-200">
                      <button className="p-2"><Circle className="bg-black/70 h-8 w-8 transform delay-700 ease-out duration-200"/></button>
                      <button className="p-2"><CircleDot className="bg-black/70 h-8 w-8 transform delay-1000 ease-out duration-200"/></button>  
                      <button className="p-2"><CircleDashed className="bg-black/70 h-8 w-8 transform delay-[2000ms] ease-out duration-200"/></button>
                      <button className="p-2"><RefreshCcw className="bg-black/70 h-8 w-8 transform delay-[2500ms] ease-out duration-200"/></button>
                      <h1 className="p-2"></h1>
                      <button className="p-2"><ShieldEllipsis className="bg-black/70 h-8 w-8 hover:bg-red-100 transform delay-700 ease-out duration-200"/></button>
                      <button className="p-2"><Annoyed className="bg-black/70 h-8 w-8 transform delay-700 ease-out duration-200"/></button>
                      <button className="p-2"><AlertCircle className="bg-black/70 h-8 w-8 transform delay-700 ease-out duration-200"/></button>
                      <button className="p-2"><AlertCircle className="bg-black/70 h-8 w-8 transform delay-700 ease-out duration-200"/></button>
                    </div>
                :"" }
            </div>
            
        </section>
    )
}


{/* <section className="absolute bottom-0 right-0 w-full ">
    <div className="flex justify-between">
        <div>
            <Slider/>
        </div>
        <Link to="#accomplishments" className="flex flex-col items-center gap-2 absolute right-0 bottom-0">
            <img src={scroll} alt="scroll" className="h-6" />
            <p>SCROLL DOWN</p>
        </Link>   
    </div>
</section> */}