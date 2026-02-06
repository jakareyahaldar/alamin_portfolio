import Card1 from "../Elements/Card1"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {

    const containar = useRef(null)
    const cards = useRef(null)

    useGSAP(() => {

        gsap.from(cards.current, {
            scrollTrigger: {
                trigger: containar.current,
                start: "top top",
                end: `=+${cards.current.scrollWidth}`,
                pin: true,
                scrub: 1
            },
            x: -cards.current.scrollWidth
        })

    }, { scope: containar })


    const InformationConfig = [
        {
            title: "Sales Strategy",
            text: "Driving high-impact commercial outcomes through a methodological approach to market segmentation and predictive modeling. My focus is on turning raw data into actionable retail strategies.",
            icon: "fas fa-chart-pie",
            bg_icon: "fas fa-chart-line"
        },
        {
            title: "After-Sales Services",
            text: "Expertise in the end-to-end technical service journey. I focus on CRM optimization and process refinement to ensure that every touchpoint reinforces the brand’s value proposition and long-term retention goals",
            icon: "fas fa-users-gear",
            bg_icon: "fas fa-headset"
        },
        {
            title: "Operations Management",
            text: "Proficient in the orchestration of dealer networks and the optimization of supply chain logistics. I lead multidisciplinary teams to ensure that operational infrastructure is both lean and scalable.",
            icon: "fas fa-network-wired",
            bg_icon: "fas fa-layer-group"
        },
    ]




    return (
        <>
            <div id="experties" ref={containar} className="h-dvh pt-20">

                {/* TITLE INFORMATION  */}
                <div id="ttt" className="flex flex-col gap-2 items-center mt-10">
                    <p className="uppercase text-sm font-bold">My Superpowers</p>
                    <p className="text-5xl font-bold">Core Expertise</p>
                    <div className="h-1 mt-4 rounded-lg min-w-28 shrink-0 bg-blue-300"></div>
                </div>

                {/* MAIN CONTENTS */}

                {/* <div class="card mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-9"> */}
                <div ref={cards} className="flex mt-10 gap-6">
                    {
                        InformationConfig.map(e => <Card1
                            title={e.title}
                            text={e.text}
                            icon={e.icon}
                            bg_icon={e.bg_icon}
                        />)
                    }
                </div>


            </div>
        </>
    )
}