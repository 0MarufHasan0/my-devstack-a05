import { RxCross1 } from "react-icons/rx";
import type { Technology } from "../../type/Type";
import { toast } from "react-toastify";

interface StackCardProps{
    stack : Technology
    addedStack: Technology[]
    setAddedStack :  React.Dispatch<React.SetStateAction<Technology[]>>
}


const StackCard = ({stack , addedStack,setAddedStack}:StackCardProps) => {

    const handleFilterBtn = () => {

        const btnFilter = addedStack.filter(( item )=> item.name !== stack.name)

        // console.log(btnFilter ,"btn")

        setAddedStack(btnFilter)

        toast.warning( `${stack.name} Your Stack Removed`, {
        position: "top-center",
       autoClose: 5000,
     hideProgressBar: false,
      closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
       progress: undefined,
       theme: "light",
      
});



    }
    return (
        <div className=" mt-10 flex items-center  justify-between ">

            <div className="flex items-center gap-2">

                <img src={stack.icon} alt={stack.name} className="h-10 w-10" />


                <div>
                    <h1 className="font-semibold">
                        {stack.name}
                    </h1>
                   <p className="text-[#94A3B8]">
                        {stack.category}
                    </p>
                </div>
                
            </div>

         <button onClick={handleFilterBtn} className="btn border-none">
             
            <RxCross1  className="text-[#94A3B8]" />

         </button>


            
        </div>
    );
};

export default StackCard;