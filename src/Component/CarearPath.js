import CarearPathCard from "../Elements/Career.card"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useSelector } from "react-redux";
gsap.registerPlugin(ScrollTrigger);

export default function CarearPath() {

    const sideLine = useRef({})
    const ball = useRef({})
    const containar2 = useRef({})
    const CarearCards = useRef({})


    const globalState = useSelector(state => state.state)
    const carearPathConfig = globalState?.data?.carearPath || []


    useGSAP(() => {

        if (carearPathConfig.length) {
            gsap.to(ball.current, {
                scrollTrigger: {
                    trigger: containar2.current,
                    start: "top top",
                    end: `=+5000`,
                    pin: true,
                    scrub: 1
                },
                y: (sideLine.current.clientHeight) - 50
            })
            gsap.from(CarearCards.current, {
                scrollTrigger: {
                    trigger: containar2.current,
                    start: "top top",
                    end: `=+5000`,
                    scrub: 1
                },
                y: -CarearCards.current.clientHeight,
            })
        }

    }, [carearPathConfig], { scope: containar2 })





    return (
        <>
            <div id="experience" ref={containar2} className="w-dvw h-dvh md:w-[80%] mx-auto py-32">

                <div className="flex items-center gap-5 px-6" >
                    <h3 className="text-3xl font-bold inline-block shrink-0">Career path</h3>
                    <div className="bg-gradient-to-r from-blue-600 to-transparent inline-block h-px w-[90%] flex-grow"></div>
                </div>


                <div className="h-full mt-9 relative">

                    {/* SIDE LINE ANIMATED WHEN SCROLL */}
                    <div ref={sideLine} className="h-full w-1 bg-blue-500 rounded-2xl absolute left-3">
                        <div ref={ball} className="ping-boll h-5 w-5 border-[2px] border-blue-500 rounded-full absolute right-[-200%] top-2"></div>  {/*Inner Ball */}
                    </div>

                    {/* ALL CARDS  */}
                    <div className="max-h-full overflow-hidden">
                        <div ref={CarearCards} className="p-10 grid gap-9 ">
                            {
                                carearPathConfig.map((e) => {
                                    return (
                                        <CarearPathCard
                                            role={e.role}
                                            date={e.date}
                                            organization={e.organization}
                                            points={e.points}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}