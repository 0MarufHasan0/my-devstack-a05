import { FcDocument } from "react-icons/fc";
import type { Technology } from "../../type/Type";
import StackCard from "./StackCard";
import { toast } from "react-toastify";

interface StackProps{
    addedStack : Technology []
    setAddedStack :  React.Dispatch<React.SetStateAction<Technology[]>>
}

const Stack = ({addedStack, setAddedStack}:StackProps) => {

    const handleRemoveAll = () => {
        setAddedStack([])

     toast.warn('Removed Item', {
       position: "top-right",
       autoClose: 5000,
      hideProgressBar: false,
     closeOnClick: false,
    pauseOnHover: true,
       draggable: true,
     progress: undefined,
      theme: "light",

});
    }

    // console.log("addedStock " , addedStack)
    return (
        <div>
           <h1 className='font-bold text-xl'>Your Stack</h1>
           <p className='text-[#94A3B8]'>{addedStack.length} Technology Selected</p>


            <div>
               { addedStack.length === 0 ? (
               <div className="flex items-center gap-2 mt-30">

                <FcDocument />

                      <h1 className="text-[#94A3B8]">Your Stack is Empty </h1>

               </div>
                ) : (
                   addedStack.map((stack, index)=> {
                    return (
                        <StackCard key={index } stack={stack} addedStack={addedStack} setAddedStack={setAddedStack} />
                    )
                   })

              )  }


            </div>

            

            {addedStack.length > 0 && 

            <button onClick={handleRemoveAll}  className="btn mt-10 btn-error w-full">

                Remove All
                

                
            </button>
                
                
                }
            
           </div>
    
    );
};

export default Stack;