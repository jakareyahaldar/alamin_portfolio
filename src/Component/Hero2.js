import me from "../assets/me2.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { useSelector } from "react-redux"



export default function Hero() {

    const homeContainer = useRef({})
    const firstSection = useRef({})
    const SecundSection = useRef({})


    const globalState = useSelector( state => state.state )
    const userData = globalState?.data?.user || {}

    useGSAP(() => {

        gsap.from(SecundSection.current, {
            scrollTrigger: {
                trigger: homeContainer.current,
                start: "top top",
                end: "+=1000",
                scrub: 2,
                pin: true
            },
            y: "100%",
            borderRadius: 100
        })
        gsap.to(firstSection.current, {
            scrollTrigger: {
                trigger: SecundSection.current,
                start: "top 80%",
                end: "+=1000",
                scrub: 5,
            },
            y: "50%",
        })

    }, { scope: homeContainer })

    return (
        <>
            <div id="home" ref={homeContainer} className="h-dvh max-h-dvh overflow-hidden relative">

                {/* FIRST SHOW SECTION  */}
                <div ref={firstSection} className="absolute bottom-0 w-full h-full flex items-end justify-center">
                    <h2 data-splitting className="bungee-regular md:text-[9dvw] text-3xl font-bold absolute z-10 top-[40%]">Alamin Howlader</h2>
                    <img className="z-20 md:h-[100%]" src={userData.image || (!globalState.isLodding && me)} alt="Alamin Howlader" />

                    <div className="inline-flex z-50 absolute bottom-2 left-4 items-center space-x-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8 hover:bg-blue-500/20 transition-colors cursor-default">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                        </span>
                        <span>Exploring New Roles</span>
                    </div>

                </div>


                {/* SECUND SHOW SECTION  */}
                <div ref={SecundSection} className="z-50 absolute bottom-0 h-full w-full bg-slate-500 flex items-center justify-center">
                    <p className="md:text-3xl text-2xl md:w-1/2 w-3/4">Customer Success Manager at 1000Fix Services. Optimizing sales ecosystems and bridging the gap between corporate goals and consumer satisfaction.</p>


                    <div className="flex flex-col sm:flex-row gap-5 absolute bottom-3 left-5">
                        <a href="#contact" className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-white transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)] flex items-center justify-center overflow-hidden">
                            <span className="relative z-10">Start a Conversation</span>
                            <i className="fas fa-arrow-right ml-2 text-sm group-hover:translate-x-1 transition-transform relative z-10"></i>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a href="#work" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl font-bold text-white transition-all backdrop-blur-sm flex items-center justify-center group">
                            <i className="fas fa-play-circle mr-2 text-slate-400 group-hover:text-white transition-colors"></i>
                            See Work Demo
                        </a>
                    </div>

                </div>

            </div>
        </>
    )
}