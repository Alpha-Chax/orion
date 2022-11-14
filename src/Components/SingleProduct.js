import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../Redux/action/index.js";
import { useParams } from "react-router";
import ShowProduct from "./Pages/ShowProduct";
import SpLoader from "./SpLoader";
import { NavLink } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddProduct = () => {
    return addProduct(product);
  };

  const dispatch = useDispatch();
  const addProduct = (result) => {
    dispatch(addCart(result));
  };

  const getProduct = async () => {
    setLoading(true);
    const url = `https://dummyjson.com/products/${id}`;
    const response = await fetch(url);
    const parsedData = await response.json();
    setProduct([parsedData]);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1500);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container py-5">
        <div className="row py-4 col-md-14">
          {loading && <SpLoader />}
          {product.map((element) => {
            return (
              <>
                <ShowProduct
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  images={element.images[1]}
                  price={element.price}
                  rating={element.rating}
                  category={element.category}
                />
                <div className="my-3  d-flex justify-content-center">
                  <NavLink
                    className="btn btn-outline-dark mx-4 px-3 py-2"
                    to="/cart"
                  >
                    Go To Cart
                  </NavLink>
                  <button
                    className="btn btn-outline-dark px-3 py-2"
                    onClick={handleAddProduct}
                  >
                    Add To Cart
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
