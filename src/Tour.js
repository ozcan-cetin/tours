import React, { useState } from 'react';

const Tour = ({item, info:data, setInfo}) => {
  const {id, name, info, image, price} = item;

const clearTour = (id) => {
  setInfo(data.filter((item)=>item.id !== id))
}

const [show, setShow] = useState(true)

  return (
    <article className='single-tour'>
      <div>
        <img className='img' src={image} alt="" />
      </div>
      <footer>
        <div className='tour-info'>
    <h4>{name}</h4>
    <h4 className='tour-price'>{price}</h4>
      </div>
     {show ? ( <p>
        {info}<button onClick={()=>setShow(!show)}>Show Less</button> </p>
      ) : (
        <p> {info.slice(0, 200)}<button onClick={()=>setShow(!show)}>...Read More</button> </p>
      )}
        
      <button className='delete-btn' onClick={()=>clearTour(id)}>not interested</button>
      </footer>
      
    </article>
  );
};

export default Tour;
