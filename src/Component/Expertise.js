import Card1 from "../Elements/Card1"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useSelector } from "react-redux";
gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {

    const containar = useRef(null)
    const cards = useRef(null)


    const globalState = useSelector(state => state.state)
    const InformationConfig = globalState?.data?.Experties || []

    useGSAP(() => {
        if (InformationConfig.length) {
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

        }
    },[InformationConfig], { scope: containar })





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

                <div ref={cards} className="flex mt-10 gap-6">
                    {
                        InformationConfig.map(e => <Card1
                            unique={window.crypto.randomUUID()}
                            title={e.title}
                            text={e.description}
                            icon={e.icon}
                            bg_icon={e.iconBg}
                        />)
                    }
                </div>


            </div>
        </>
    )
}