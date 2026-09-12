
import { Suspense, useState } from "react"
import Banner from "./componenets/Banner"
import Navbar from "./componenets/Navbar"
import Technologies from "./componenets/technologies/Technologies"
import type { Technology } from "./type/Type"
import ReactLoader from "./componenets/ReactLoader"



const dataFetch = async ():Promise<Technology[]> => {
  const res = await fetch('data.json')
  const data:Technology[] = await res.json()

  //  console.log(data);

  return data

}


function App() {

  const [dataPromise] = useState<Promise<Technology[]>>(dataFetch())


  return (
    <>
    <Navbar />
    <Banner />

 <Suspense fallback ={<ReactLoader/>} > 
  <Technologies dataPromise ={dataPromise} />
  
  </Suspense>
   
    </>
  )
}

export default App
