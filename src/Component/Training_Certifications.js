import TraningCertificationsCard from "../Elements/Training_Certifications_card"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { useSelector } from "react-redux"


export default function Traning_Certifications() {

    const certificateContainer = useRef({})
    const Certificates = useRef({})



    const globalState = useSelector(state => state.state)
    const Training_Certifications_config = globalState?.data?.Certificate || []

    useGSAP(() => {

        if (Training_Certifications_config.length) {
            gsap.from(Certificates.current, {
                scrollTrigger: {
                    trigger: certificateContainer.current,
                    start: "top top",
                    end: "+=1500",
                    pin: true,
                    scrub: 3
                },
                y: 1000,

            })
        }

    }, [Training_Certifications_config], { scope: certificateContainer })



    return (
        <>
            <div id="training" ref={certificateContainer} className=" px-5 md:px-20 pt-20 max-h-dvh h-dvh">

                <div className="flex flex-col md:flex-row justify-between items-start z-50">
                    <div>
                        <h3 className="text-3xl font-bold">Training & Certifications</h3>
                        <div className="h-2 w-28 mt-3 bg-blue-600 rounded-xl"></div>
                    </div>
                    <div className="px-10 mt-10">
                        <p className="w-full break-words text-sm uppercase text-slate-300">Lifelong Learning</p>
                    </div>
                </div>



                <div ref={Certificates} className="grid md:grid-cols-3 gap-10 md:my-10 justify-center items-center rotate-style">
                    {
                        Training_Certifications_config.map((data) => {
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