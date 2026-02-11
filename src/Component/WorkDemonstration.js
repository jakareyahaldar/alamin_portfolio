import WorkDemonstrationCard from "../Elements/WorkDemonstrationCard";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useSelector } from "react-redux";
gsap.registerPlugin(ScrollTrigger);


export default function WorkDemonstration() {


    const container3 = useRef({})
    const cards1 = useRef({})
    const cards2 = useRef({})

    const globalState = useSelector(state => state.state)
    const Config = globalState?.data?.WorkDemon || []

    const WorkDemonstrationConfig = [Config.slice(0, Config.length / 2), Config.slice(Config.length / 2, Config.length)]


    useGSAP(() => {

        if (Config.length) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container3.current,
                    start: "top top",
                    end: "+=1000",
                    scrub: 2,
                    pin: true
                }
            })
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: container3.current,
                    start: "top top",
                    end: "+=1000",
                    scrub: 2,
                }
            })


            const Cards1AllEl = cards1.current.children
            for (let i = 1; i < Cards1AllEl.length; i++) {
                tl.from(Cards1AllEl[i], {
                    x: "-200%",
                    display: "none"
                })
            }

            const Cards1AllE2 = cards2.current.children
            for (let i = 1; i < Cards1AllE2.length; i++) {
                tl2.from(Cards1AllE2[i], {
                    x: "200%",
                    display: "none"
                })
            }
        }

    }, [Config], { scope: container3 })



    return (
        <>
            <div id="work" ref={container3} className="md:px-20 px-10 max-h-dvh h-dvh pt-24 w-dvw">

                <div className="flex flex-col md:flex-row justify-between  items-start">
                    <div>
                        <h3 className="text-3xl font-bold">Work Demonstration</h3>
                        <div className="h-2 w-28 mt-3 bg-blue-600 rounded-xl"></div>
                    </div>
                    <div className="w-[100%] md:w-[450px] mt-7 border-r-2 border-blue-600">
                        <p className="w-full break-words text-sm text-slate-400">Visual highlights of professional engagements, corporate events, and operational management at 1000FIX and industry summits.</p>
                    </div>
                </div>






                <div className="grid md:grid-cols-2 md:gap-10 gap-60 md:mt-11 mt-5 md:mt-0 ">
                    <div ref={cards1} className="relative">

                        {WorkDemonstrationConfig[0].map(({ img, event, org }) => <WorkDemonstrationCard img={img} event={event} org={org} />)}

                    </div>
                    <div ref={cards2} className="relative">

                        {WorkDemonstrationConfig[1].map(({ img, event, org }) => <WorkDemonstrationCard img={img} event={event} org={org} />)}

                    </div>
                </div>


            </div>
        </>
    )
}