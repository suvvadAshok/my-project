import { Facebook, Github, Gitlab, Home, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export function Contact(){
    return(
        <div className="flex justify-center items-center bg-gradient-to-br from-[#678488] to-white h-full gap-4">
            <Phone />
            <Mail />
            <Home />
            <Instagram />
            <Facebook />
            <Linkedin />
            <Github />
            <Gitlab />
        </div>
    )
}