export default function WorkDemonstrationCard({img,event,org}) {
    return (
        <>
            <div className="overflow-hidden rounded-lg group absolute top-0">
                <img className="group-hover:scale-110 transition duration-700  h-full w-full object-cover" src={img} alt=".." />
                <div className="transition duration-700 group-hover:-translate-y-5 absolute bottom-1 left-5 backdrop-blur-[1px] p-1">
                    <p className="uppercase shadow-md px-2 py-1 rounded-lg text-xs bg-blue-700">{event}</p>
                    <p className="font-bold shadow-md">{org}</p>
                </div>
            </div>
        </>
    )
}