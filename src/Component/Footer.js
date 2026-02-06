import { Link } from "react-router-dom"


export default function Footer() {

    return (
        <>
            <footer className="bg-slate-950 border-t border-white/5 py-12 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-2xl font-extrabold text-white tracking-tighter">AH<span className="text-blue-500">.</span></div>
                    <p className="text-slate-500 text-sm">© 2026 Alamin Howlader. All Rights Reserved.</p>
                    <div className="flex space-x-6">
                        <Link to="https://www.facebook.com/share/1AX15YKaYr/" className="w-10 h-10 rounded-full bg-white/5 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all transform hover:scale-110"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="https://www.instagram.com/sumonbbg?igsh=MWxjYmYybjdzdndqZA==" className="w-10 h-10 rounded-full bg-white/5 hover:bg-pink-600 flex items-center justify-center text-slate-400 hover:text-white transition-all transform hover:scale-110"><i className="fab fa-instagram"></i></Link>
                        <Link to="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-sky-500 flex items-center justify-center text-slate-400 hover:text-white transition-all transform hover:scale-110"><i className="fab fa-twitter"></i></Link>
                    </div>
                </div>
            </footer>
        </>
    )
}