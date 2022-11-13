import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ShowProduct from "./ShowProduct";
import SpLoader from "./SpLoader";

const SingleProduct = () => {
  const { id } = useParams();
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);


  const getProduct = async () => {
    setLoading(true);
    const url = `https://dummyjson.com/products/${id}`;
    const response = await fetch(url);
    const parsedData = await response.json();
    setResult([parsedData]);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    },2000 );  
    //eslint-disable-next-line
  }, []);

  return (
    <>
    <div className="container py-5">
      <div className="row py-4">
        {loading && <SpLoader/>}
        {result.map((element) => {
          return (
            <ShowProduct 
              title={element.title ? element.title : ""} 
              description={element.description ? element.description : ""}
              images={element.images[1]}
              price={element.price}
              rating={element.rating}
              category={element.category}
            />
          );
        })}
      </div>
    </div>
    </>
  );
};

export default SingleProduct;
