import WorkDemonstrationCard from "../Elements/WorkDemonstrationCard";

export default function WorkDemonstration() {


const WorkDemonstrationConfig = [
    {
        img:"https://lh3.googleusercontent.com/d/1dYf7Y5DoxLPcxbZXwbJYb6Y2mLGo3OCr",
        event:"Summit",
        org:"ICT Division"
    },
    {
        img:"https://lh3.googleusercontent.com/d/14B0jNAzgLu-_lZJUHWMi8r0cVT6n_KoP",
        event:"Event",
        org:"Cloud Connect"
    },
    {
        img:"https://lh3.googleusercontent.com/d/1aNg9RgRKLL7NYw2hD0ZeP2ZSCxkzxl38",
        event:"Operations",
        org:"Service Ops"
    },
    {
        img:"https://lh3.googleusercontent.com/d/1XeTy6_bgh-qXWEQMGKcH0U5HG-9C6t3M",
        event:"Strategy",
        org:"Industry Lead"
    },
    // {
    //     img:"",
    //     event:"",
    //     org:""
    // },
]


    return (
        <>
            <div className="px-20">

                <div className="flex flex-col md:flex-row justify-between  items-start">
                    <div>
                        <h3 className="text-3xl font-bold">Work Demonstration</h3>
                        <div className="h-2 w-28 mt-3 bg-blue-600 rounded-xl"></div>
                    </div>
                    <div className="w-[100%] md:w-[450px] mt-10 border-r-2 border-blue-600">
                        <p className="w-full break-words text-sm">Visual highlights of professional engagements, corporate events, and operational management at 1000FIX and industry summits.</p>
                    </div>
                </div>


                <div className="grid md:grid-cols-4 py-10 justify-between items-center gap-9">

                    {WorkDemonstrationConfig.map( ({img,event,org}) => <WorkDemonstrationCard img={img} event={event} org={org}  />)}
                    
                </div>


            </div>
        </>
    )
}