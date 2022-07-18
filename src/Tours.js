import React from "react";
import Tour from "./Tour";

const Tours = ({ info, setInfo }) => {
  // const {id, name, info, image, price} = info;

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <p className="underline"></p>
      </div>
      {info?.map((item) => {
        return <Tour key={item.id} item={item} info={info} setInfo={setInfo} />;
      })}
    </section>
  );
};

export default Tours;
