import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
const [info, setInfo] = useState([])
const [isLoading, setIsLoading] = useState(true)

const getTours = async() => {
  setIsLoading(true)
  try {
    const {data} = await axios.get(url)
    setInfo(data)
    setIsLoading(false)
  } catch (error) {
    setIsLoading(false)
    console.log(error);  
  }
  
}

// const clearTour = (id) => {
//   info?.filter((item)=>item.id !== id{

//   })
// }

useEffect(()=>{
getTours()
},[])



// console.log(tour);
if(isLoading){
  return(
    <main>
<Loading/>
    </main>
  )
}

if(info.length === 0){
  return(
    <main>
      <div className='title'>
      <h2>no tours left</h2>
      <button className='btn' onClick={()=>getTours()}>refresh</button>
    </div>
    </main>
  )
}
  return (
    <main>
      {/* {isLoading && } */}
      <Tours info={info} setInfo={setInfo}/>
    </main>
  ) 
}

export default App
