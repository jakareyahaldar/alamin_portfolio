export default function Card1({ text, icon, bg_icon, title }) {





    return (
        <>
            <div className=" w-full shrink-0">
                <div className="md:w-2/3 mx-auto p-8 rounded-3xl group relative overflow-hidden bg-slate-800">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <i className={`${icon} text-9xl text-blue-500 transform rotate-12 group-hover:scale-110 transition-transform duration-500`}></i>
                    </div>
                    <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 text-2xl mb-8 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
                        <i className={`${bg_icon}`}></i>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">{title}</h3>
                    <p className="md:text-2xl text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{text}</p>
                </div>
            </div>
        </>
    )
}