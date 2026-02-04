import CarearPathCard from "../Elements/Career.card"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function CarearPath() {

    const sideLine = useRef({})
    const ball = useRef({})
    const containar2 = useRef({})
    const CarearCards = useRef({})

    useEffect(() => {
        console.log(CarearCards)
        CarearCards.current.scroll(0, 2000)
    }, [])

    useGSAP(() => {

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

    }, { scope: containar2 })



    const carearPathConfig = [
        {
            role: "Customer Success Manager",
            date: "FEBRUARY 2022 — OCTOBER 2025",
            organization: "1000FIX SERVICE LTD",
            points: [
                <span><strong>Operations Leadership:</strong> Orchestrated complete service operation lifecycles across regional hubs, ensuring 99% SLA compliance.</span>,
                <span><strong>Performance Optimization: </strong> Optimized inventory turnover and dealer relationship performance metrics, resulting in a15% reduction in operational costs.</span>,
                <span><strong>Strategic Management:</strong> Direct oversight of managerial activities, including dealer management, inventory logistics, and the integration of sales with after-sales service.</span>
            ]
        },
        {
            role: "Market Sales In-Charge",
            date: "JUNUARY 2021 — JANUARY 2022",
            organization: "Softalogy Limited",
            points: [
                <span><strong>Market Penetration:</strong>Led strategic market penetration initiatives for software solutions specifically targeting the SME sector.</span>,
                <span><strong>Relationship Management:</strong> Managed high-level customer relations and established robust communication channels with retailers to drive brand loyalty.</span>,
                <span><strong>Team Leadership:</strong> Supervised and mentored a sales team to achieve regional targets and improve overall market presence.</span>
            ]
        },
        {
            role: "Mobile Banking Officer",
            date: "JANUARY 2016 — NOVEMBER 2017",
            organization: "Dutch-Bangla Bank PLC",
            points: [
                <span><strong>usiness Development:</strong> pearheaded customer acquisition for Rocket mobile banking services within rural divisions to increase financial inclusion.</span>,
                <span><strong>Stakeholder Engagement:</strong> Managed diverse stakeholder relationships and internal office operations to ensure seamless service delivery.</span>,
                <span><strong>Client Relations:</strong> Provided dedicated customer relations management, serving as a primary point of contact for banking recommendations and troubleshooting.</span>
            ]
        },
        {
            role: "Field Inspector",
            date: "JANUARY 2014 — DECEMBER 2015",
            organization: "Innovative Research & Consultancy Ltd.",
            points: [
                <span><strong>Data Collection & Auditing:</strong> Conducted comprehensive field inspections and site audits to ensure data accuracy and compliance with project specifications.</span>,
                <span><strong>Research Analysis:</strong> Systematically gathered and verified information from diverse rural demographics to support large-scale consultancy projects.</span>,
                <span><strong>Operational Reporting:</strong> Documented field findings and provided detailed reports to stakeholders, ensuring all research activities met strict quality assurance standards.</span>,
                <span><strong>Project Coordination:</strong> Managed local logistics and community outreach to facilitate seamless data gathering in various divisions.</span>
            ]
        },
        // {
        //     role: "",
        //     date: "",
        //     organization: "",
        //     points: [
        //         <span></span>,
        //         <span></span>,
        //         <span></span>
        //     ]
        // },
    ]

    return (
        <>
            <div ref={containar2} className="w-dvw h-dvh md:w-[80%] mx-auto py-32">

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