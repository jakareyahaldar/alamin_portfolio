import TraningCertificationsCard from "../Elements/Training_Certifications_card"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"


export default function Traning_Certifications() {

    const certificateContainer = useRef({})
    const Certificates = useRef({})

    useGSAP(()=>{

        gsap.from(Certificates.current,{
            scrollTrigger : {
                trigger : certificateContainer.current,
                start: "top top",
                end: "+=1500",
                pin: true,
                scrub: 3
            },
            y: 1000,
            
        })

    },{ scope: certificateContainer })



    const Training_Certifications_config = [
        {
            title: "Healthcare Safety",
            organization: "Informal Healthcare Providers by Jeeon",
            icon_class: "fas fa-solid fa-virus-covid",
            src: "https://drive.google.com/file/d/1Q6VbdRvPuRxzPb9_r1xkpo_cih8ccjKI/view?usp=drive_link"
        },
        {
            title: "Teacher Training",
            organization: "Organized by USAID",
            icon_class: "fas fa-chalkboard-user",
            src: "https://drive.google.com/file/d/1Ougf9ONRDYQ53e-8hiQ3sjkCULWh4CzY/view?usp=drive_link"
        },
        {
            title: "Digital Security 2",
            organization: "National Cyber Security Agency",
            icon_class: "fas fa-shield-halved",
            src: "https://drive.google.com/file/d/1vHhZzOnzuHDYQW21Fm73g4Tlgm27S02B/view?usp=drive_link"
        },
        {
            title: "Cyber Security V2",
            organization: "Organized by DIKKHA",
            icon_class: "fas fa-user-shield",
            src: "https://drive.google.com/file/d/1X3opr-QkVyIyhjo9b3b9RMdkDQ9bCZWj/view?usp=drive_link"
        },
        {
            title: "Computer Networking",
            organization: "Organized by DIKKHA",
            icon_class: "fas fa-network-wired",
            src: "https://drive.google.com/file/d/1V7_nZl295GIF4s6n6jr5dJBxxSk4YuGL/view?usp=drive_link"
        },
        {
            title: "Hardware Maintenance",
            organization: "ICT Division",
            icon_class: "fas fa-screwdriver-wrench",
            src: "https://drive.google.com/file/d/1XskTsCPd0k7oC0a5RU0AJQOgZZ7H9qd4/view?usp=drive_link"
        },
        {
            title: "Digital Security",
            organization: "National Cyber Security Agency",
            icon_class: "fas fa-lock",
            src: "https://drive.google.com/file/d/16-hbn3bKn48ZggpnIYpMiqvROT9-cWr0/view?usp=drive_link"
        },
        {
            title: "Teaching Grammar",
            organization: "Teaching Grammar Effectively",
            icon_class: "fas fa-spell-check",
            src: "https://drive.google.com/file/d/1C0lnXTXBEDhDsCExLwi66l0HBufbZCyJ/view?usp=drive_link"
        },
        {
            title: "COVID-19 Awareness",
            organization: "Organized by A2I",
            icon_class: "fas fa-mask-face",
            src: "https://drive.google.com/file/d/1_MuM_FajRNssdaQwTQFJ0UfCo8rLbbCW/view?usp=drive_link"
        },
        {
            title: "COVID-19 Awareness",
            organization: "Organized by BRAC",
            icon_class: "fas fa-hand-holding-medical",
            src: "https://drive.google.com/file/d/1kSjyXiwKKP8g9xKD69nSEMcp3c5hAuGJ/view?usp=drive_link"
        },
        // {
        //     title: "",
        //     organization: "",
        //     icon_class:"",
        //     src:""
        // },
    ]

    return (
        <>
            <div id="training" ref={certificateContainer} className=" px-10 md:px-20 pt-20 max-h-dvh h-dvh">

                <div className="flex flex-col md:flex-row justify-between items-start z-50">
                    <div>
                        <h3 className="text-3xl font-bold">Training & Certifications</h3>
                        <div className="h-2 w-28 mt-3 bg-blue-600 rounded-xl"></div>
                    </div>
                    <div className="px-10 mt-10">
                        <p className="w-full break-words text-sm uppercase text-slate-300">Lifelong Learning</p>
                    </div>
                </div>



                <div ref={Certificates} className="grid md:grid-cols-3 gap-10 my-10 justify-center items-center rotate-style">
                    {
                    Training_Certifications_config.map((data)=>{
                        return <TraningCertificationsCard
                            font_class={data.icon_class}
                            title={data.title}
                            organization={data.organization}
                            src={data.src}
                        />
                    })
                }
                </div>


            </div>
        </>
    )
}