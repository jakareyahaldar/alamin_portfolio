import { useEffect, useState } from "react"

export default function Navbar() {

    const [width,setWidth] = useState(window.innerWidth)

    const Mobile = width <= 500 ? true : false

    const [isNavOpen,setNavOpen] = useState()

    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setWidth(window.innerWidth)
        })
    },[])

    function HandleClickNabBtn(){
        setNavOpen(!isNavOpen)
    }



    const NavigationConfig = [
        {
            name: "Home",
            path: "#home"
        },
        {
            name: "Expertise",
            path: "#experties"
        },
        {
            name: "Experience",
            path: "#experience"
        },
        {
            name: "Work",
            path: "#work"
        },
        {
            name: "Training",
            path: "#training"
        },
        {
            name: "Education",
            path: "#education"
        }
    ]


    return (
        <>
            <header className="fixed z-50 top-0 left-0 w-dvw h-20 bg-slate-900 flex justify-between items-center px-10">


                <h2 className="text-2xl font-bold">AH.</h2>
                { Mobile && <i onClick={HandleClickNabBtn} className="fas fa-bars-staggered text-2xl hover:text-yellow-400"></i> }



                {/* DECKTOP VIRTION NAVBAR  */}
                {
                    !Mobile && <div className="flex gap-16 items-center">
                    <nav className="flex gap-5 uppercase">
                        {NavigationConfig.map(e => <a className="nav_links relative" href={e.path}>{e.name}</a>)}
                    </nav>
                    <a className="px-3 py-1 transition-all hover:bg-blue-600 rounded-lg" href="/">Let's Talk</a>
                </div>
                }

                {/* MOBILE VIRTION NAVBAR */}
                {
                    (Mobile && isNavOpen) && <div className="animate-navopen w-full flex items-center flex-col gap-7 bg-slate-900 fixed top-0 right-0 p-7">
                    <i onClick={HandleClickNabBtn} className="fa-solid fa-xmark absolute top-4 right-4 text-2xl"></i>
                    <nav className="flex flex-col items-center gap-5 uppercase mt-5">
                        {NavigationConfig.map(e => <a className="nav_links relative" href={e.path}>{e.name}</a>)}
                    </nav>
                    <a className="px-3 py-1 transition-all  bg-blue-600 rounded-lg" href="/">Let's Talk</a>
                </div>
                }


            </header>
        </>
    )
}