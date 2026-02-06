export default function Contact() {
    return (
        <>
            <section id="contact" className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="glass-card rounded-3xl p-10 md:p-20 text-center border border-blue-500/30 shadow-2xl relative overflow-hidden reveal active">
                    
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/10 blur-3xl pointer-events-none"></div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to Collaborate?</h2>
                        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto relative z-10">
                            Open to discussing customer success strategies, operational excellence, or new opportunities in the retail sector.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <a href="mailto:alaminhowlader40@gmail.com" className="group flex items-center justify-center space-x-3 bg-gray-700 hover:bg-slate-600 text-black px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1">
                                <i className="fas fa-envelope text-lg group-hover:scale-110 transition-transform"></i>
                                <span>Email Me</span>
                            </a>
                            <a href="https://www.linkedin.com/in/alamin-howlader-64303610b?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app" className="group flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/30">
                                <i className="fab fa-linkedin text-lg group-hover:scale-110 transition-transform"></i>
                                <span>LinkedIn</span>
                            </a>
                            <a href="tel:+8801994190889" className="group flex items-center justify-center space-x-3 border border-slate-600 hover:border-slate-400 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/5">
                                <i className="fas fa-phone text-lg group-hover:scale-110 transition-transform"></i>
                                <span>Call Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}