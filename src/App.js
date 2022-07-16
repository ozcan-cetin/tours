import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
const [info, setInfo] = useState()
const [isLoading, setIsLoading] = useState(true)

const getTours = async() => {
  const {data} = await axios.get(url)
  setInfo(data)
  setIsLoading(false)
}

// const clearTour = (id) => {
//   info?.filter((item)=>item.id !== id{

//   })
// }

useEffect(()=>{
getTours()
},[])



// console.log(tour);

  return (
    <main>
      {isLoading && <Loading/>}
      <Tours info={info} setInfo={setInfo}/>
    </main>
  ) 
}

export default App
