import React from 'react';
import Tour from './Tour';



const Tours = ({info, setInfo}) => {
  // const {id, name, info, image, price} = info;
  
  return (
    <section>
    <h1 className='title'>Our Tours</h1>
    <p className='underline'></p>
    {info?.map((item)=>{
      return <Tour key={item.id} item={item} info={info} setInfo={setInfo}/>
    })}
    </section>
    )
};

export default Tours;
