export default function CarearPathCard({ role, date, organization, points }) {
    return (

        <>
            <div className="relative p-2 md:p-8 rounded-2xl hover:bg-slate-800/50 transition-colors bg-slate-900">
                {/* <div className="h-[95%]  w-px bg-blue-400 rounded-md absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2">
                    <div className="ping-boll  h-4 w-4 absolute bg-blue-600 rounded-full top- left-1/2 -translate-x-1/2 "></div>
                </div>  Right side line */}

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{role}</h3>
                    <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold border border-blue-500/20">{date}</span>
                </div>

                <p className="text-lg text-slate-300 font-medium mb-6 flex items-center">
                    <i className="fas fa-briefcase mr-2 text-slate-500"></i> {organization}
                </p>
                <ul className="space-y-3">

                    {
                        points.map((point) => {

                            const strongTxt = point.slice(0, point.indexOf(":") + 1)
                            const normal = point.slice(point.indexOf(":") + 1)

                            console.log(strongTxt, normal)

                            return (
                                <li className="flex items-start text-slate-400 group-hover:text-slate-300 transition-colors">
                                    <i className="fas fa-check-circle text-blue-500 mt-1.5 mr-3 text-sm flex-shrink-0"></i>
                                    <span><strong>{strongTxt}</strong>{"  " + normal}</span>
                                </li>
                            )
                        })
                    }



                </ul>
            </div></>
    )
}