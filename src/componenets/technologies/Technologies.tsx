import {  use, useState } from "react";
import type { Technology } from "../../type/Type";
import TechnologiesCard from "./TechnologiesCard";
import Stack from "./Stack";

 interface TechnologiesProps{
    dataPromise : Promise<Technology[]>
 }

const Technologies = ({dataPromise}:TechnologiesProps) => {

     const [addedStack ,setAddedStack] = useState<Technology[]>([])

    const technologiesData = use(dataPromise)
    return (
        // Heeding Section
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold">Explore the
             <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
             </h2>
             <p className="text-sm text-[#64748B]">
                Pick one technology per category to build your ideal stack.
             </p>

{/* Grid of Technology Cards and Stack */}



<div className="display grid  lg:grid-cols-12  mt-10">

<div className="grid lg:col-span-10 gap-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

    {
        technologiesData.map((technology , index)=> {
            return (

     <TechnologiesCard   key={index} technology={technology} addedStack = {addedStack } setAddedStack = {setAddedStack} />
            
            )
        })
    }




</div>

<div className="bg-base-300 p-10 lg:col-span-2">

 <Stack addedStack = {addedStack } setAddedStack = {setAddedStack} />

</div>


</div>

        </div>
    );
};

export default Technologies;