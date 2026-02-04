import me from "../assets/me.png"

export default function Hero() {

    return (
        <>
            <div className="w-full flex flex-col items-center gap-4 mt-10 ">

                <div className="mt-20 mx-auto w-52 h-52 relative">

                    <div className="heroImgBg absolute h-full w-full">
                        <div className=" animate-spinR shadow-lg shadow-blue-600 w-full h-full absolute  rounded-[40%]"></div>
                        <div className="animate-spinL shadow-lg shadow-yellow-400 w-full h-full absolute rounded-[40%]"></div>
                    </div>
                    <div className="absolute h-full w-full rounded-full overflow-hidden">
                        <img className="h-full w-full object-cover hover:scale-110 transition-all" src={me} alt=".." />
                    </div>

                </div>
                <div class="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8 hover:bg-blue-500/20 transition-colors cursor-default">
                    <span class="relative flex h-2.5 w-2.5">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                    </span>
                    <span>Exploring New Roles</span>
                </div>

                <div className="-translate-y-5 w-[80%] md:w-[50%] flex flex-col gap-2 items-center text-center">
                    <h1 className=" text-5xl md:text-8xl font-bold">
                        <span>Alamin  </span>
                        <span>Haldar</span>
                    </h1>
                    <p className=""><span className="font-bold text-2xl">Customer Success Manager</span> at 1000Fix Services. Optimizing sales ecosystems and bridging the gap between corporate goals and consumer satisfaction.</p>
                    <div class="flex flex-col sm:flex-row gap-5 w-full sm:w-auto animate-fade-in-up delay-400">
                        <a href="#contact" class="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-white transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)] flex items-center justify-center overflow-hidden">
                            <span class="relative z-10">Start a Conversation</span>
                            <i class="fas fa-arrow-right ml-2 text-sm group-hover:translate-x-1 transition-transform relative z-10"></i>
                            <div class="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a href="#work" class="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl font-bold text-white transition-all backdrop-blur-sm flex items-center justify-center group">
                            <i class="fas fa-play-circle mr-2 text-slate-400 group-hover:text-white transition-colors"></i>
                            See Work Demo
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}