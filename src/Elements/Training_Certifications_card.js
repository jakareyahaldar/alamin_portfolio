export default function Training_Certifications_card({ font_class, title, organization, src }) {
    return (
        <>
            <div className="p-6 py-7 pt-9 bg-blue-400/10 rounded-xl group hover:bg-blue-900/20 hover:border-blue-400/5 border-2 border-transparent hover:shadow-inner shadow-blue-600 transition-all">
                <i class={`${font_class} text-xl tcci relative mb-7 ml-2 group-hover:scale-110 transition-all`}></i>
                <div className="flex flex-col gap-2">
                    <p>{title}</p>
                    <p className="text-xs">{organization}</p>
                    <a className="bg-blue-500/10 rounded-lg mt-3 py-1 text-center hover:bg-blue-700" href={src}>View Certificate</a>
                </div>

            </div>
        </>
    )
}