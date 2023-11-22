import ashok from "../../public/ashok.jpg_prev_ui.png"
import ashok_1 from "../../public/ashok_url.png"
export function Main(){
    return (
      <div className="h-full p-4 flex justify-around items-center gap bg-[#678488] bg-gradient-to-br from-[#678488] to-white">
        <section>
          <h1 className="text-6xl font-semibold tracking-[0.5rem] max-lg:text-4xl max-md:text-2xl max-md:tracking-[0.4rem]">ASHOK KUMAR</h1>
          <h1 className="text-8xl font-extrabold tracking-wider max-lg:text-7xl max-md:text-[3.2rem] max-lg:tracking-normal ">SUVVADA</h1>
          <h6 className="font-IBMPlex tracking-[1.3rem] max-lg:tracking-[0.7rem] max-md:tracking-[0.3rem]">SOFTWARE-DEVELOPER</h6>
        </section>
        <div className="">
          <img src={ashok} alt="" className="absolute rounded-b-full" />
          <img src={ashok_1} alt="" className="relative left-20 top-10 rounded-b-full" />
        </div>
          {/* <img src={ashok_1} alt="" className="relative right-40 top-10 rounded-b-full" /> */}
      </div>
  )
}