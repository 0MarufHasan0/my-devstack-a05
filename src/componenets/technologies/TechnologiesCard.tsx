
import type { Technology } from "../../type/Type";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";



interface TechnologyCardProps {
    technology : Technology
    addedStack : Technology []
    setAddedStack :  React.Dispatch<React.SetStateAction<Technology[]>>
    
}

const TechnologiesCard = ({technology , addedStack , setAddedStack}:TechnologyCardProps) => {

//     // Button Click 
// const [button , setButton] = useState<boolean>(false)

// After remove from StackCard

const isAdded:boolean = addedStack.some ((Stack )=> Stack.name === technology.name)

// State handle
const handleButton = () => {

//     setButton(!button)
//    toast.success(`${technology.name} Successfully Added`, {
//    position: "top-center",
//    autoClose: 5000,
//    hideProgressBar: false,
//    closeOnClick: false,
//     pauseOnHover: true,
//    draggable: true,
//    progress: undefined,
//   theme: "light",

 
// });

if(isAdded){
  toast.info(`${technology.name} already added!`)
  return;
}

setAddedStack([...addedStack , technology])

 toast.success(`${technology.name} Successfully Added`, {
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

    // console.log(technology ,"tech")
    return (
        <div>

    <div className= {`"card w-96 ${isAdded ? "border-2 border-red-500" : "bg-base-100 shadow-sm"}`}>
  <div className="card-body">

    {/* Icon and Badge */}
    <div className="flex justify-between">
      
     <img src={technology.icon} alt={technology.name} className="w-10 h-10" />
     <span className={`badge badge-xs text-white
     ${technology.badge === 'Popular' || technology.badge === 'Lightning Fast' ? "bg-blue-500" :

     technology.badge === 'Essential' || technology.badge === "Containers"?"bg-green-400" :
     technology.badge === "Fast"|| technology.badge === "Powerful" ? "bg-red-500" : 
     technology.badge === "Flexible"||technology.badge === "Type-Safe" ? "bg-yellow-400" : "bg-amber-600"



      }`}>{technology.badge}</span>

    </div>

    {/* Heading/Name */}
      <h2 className="text-3xl mt-2 font-bold">{technology.name}</h2>
      <p className="text-[#64748B] font-medium">{technology.description}</p>

{/* difficulty , rating , category  */}

<div className="flex justify-between font-light text-[#475569]  mt-4 items-center">

    <p>{technology.category}</p>
    <p>{technology.difficulty}</p>
    
<div className="flex items-center gap-2">
      <FaStar className="text-yellow-400"/>
    <p>{technology.rating}</p>
</div>

</div>

    <div className="mt-6">
      <button

      onClick={handleButton}
      
      // disabled={isAdded}

      className={`btn  btn-block ${isAdded ? "btn-disable cursor-not-allowed" : "btn-neutral"}`}>
        
        
        {isAdded ? "✓ Added to Stack" : "Add to stack"}
      
      
      </button>
      
    </div>
  </div>
</div>



            
            
        </div>
    );
};

export default TechnologiesCard;