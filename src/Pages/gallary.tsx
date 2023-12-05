import cheek_1 from "/cheek1.jpg"
import cheek_2 from "/cheek_2.jpg"
import cheek_3 from "/cheek_3.jpg"
import cheek_4 from "/cheek_4.jpg"
import cheek_5 from "/cheek_5.jpg"
import cheek_6 from "/cheek_6.jpg"
import butterfly from "/butterfly.jpg"
import butterfly_1 from "/butterfly_1.jpg"
import butterfly_2 from "/butterfly_2.jpg"
import butterfly_3 from "/butterfly_3.jpg"  
import butterfly_4 from "/butterfly_4.jpg"
import flower from "/flower.jpg"
import flower_1 from "/flower_1.jpg"
import flower_2 from "/flower_2.jpg"
import flower_3 from "/flower_3.jpg"
import flower_4 from "/flower_4.jpg"
import tree_1 from "/tree_1.jpg"
import tree_2 from "/tree_2.jpg"
import tree_3 from "/tree_3.jpg"
import { motion } from "framer-motion"


const a:string[] = [cheek_1, cheek_2, cheek_3, cheek_4, cheek_5, 
    cheek_6, butterfly, butterfly_1, butterfly_2, butterfly_3, 
    butterfly_4, flower, flower_1, flower_2, flower_3, flower_4, tree_1, tree_2, tree_3];

export function Gallery(){
    return(
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 auto-cols-auto bg-gradient-to-br from-primary to-white p-4">
            { a.map(i=> <motion.img src={i} key={i} alt="hii" className="object-fill" whileTap={{scale:1.3, boxShadow:"0 0 16px rgb(250 250 250)"}} /> )}
        </div>
    )
}