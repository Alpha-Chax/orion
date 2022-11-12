import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import ProductItem from "./ProductItem";

const Products = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const url = "https://dummyjson.com/products";
    const response = await fetch(url);
    const parsedData = await response.json();
    setResults(parsedData.products);
    setLoading(false);
  };
  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 2500);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
          {loading && (
            <>
              <Loader /> <Loader />
              <Loader />
              <Loader />
              <Loader />
              <Loader />
            </>
          )}
          {results.map((element) => {
            return (
              <div className="col-md-4 my-2" key={element.id}>
                <ProductItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  images={element.images[1]}
                  price={element.price}
                  rating={element.rating}
                  category={element.category}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
