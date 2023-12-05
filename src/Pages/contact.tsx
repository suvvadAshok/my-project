import { motion } from "framer-motion";
import {
  Github,
  Gitlab,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const icons = [
  { id: 1, icon: <Phone />, data: "6305749515" },
  { id: 2, icon: <Mail />, data: "ashokkumar.suvvada14@gmail.com" },
  { id: 3, icon: <Home />, data: "Durgam cheruvu, Hyderabad" },
  {
    id: 4,
    icon: <Instagram />,
    data: "https://www.instagram.com/suvvadashok/",
  },
  {
    id: 6,
    icon: <Linkedin />,
    data: "https://www.linkedin.com/in/suvvadashok/",
  },
  { id: 7, icon: <Github />, data: "https://github.com/suvvadAshok" },
  { id: 8, icon: <Gitlab />, data: "https://gitlab.com/Suvvada_Ashok" },
];

const buttonVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1.5,
    transition: {
      mass: 0.5,
      damping: 5,
      type: "spring",
      stiffness: 400,
    },
  },
};

export function Contact() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-primary to-white h-full w-full gap-10">
      {icons.map((i) => (
        <motion.button
          variants={buttonVariant}
          initial="hidden"
          animate="visible"
          key={i.id}
        >
          <Link
            target="blank"
            to={`${i.data}`}
            key={i.id}
            className="text-xl font-extrabold"
          >
            {i.icon}
          </Link>
        </motion.button>
      ))}
    </div>
  );
}
