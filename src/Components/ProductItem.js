import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductItem = (props) => {
    let {title, description, price, rating, category, images, id} = props
  return (
    <div className="card h-100 text-center p-4">
  <img src={images? images: "https://2.bp.blogspot.com/-jFW67EZStMo/W1-GY0uqMJI/AAAAAAAAE8U/y1ssu7JVNYARmViOZOd2lNM_j82YjhZQACLcBGAs/s1600/samsung-galaxy-note-9.jpg"} className="card-img-top" alt="..." height="250px"/>
  <div className="card-body">
  <h5 className="card-title mb-0">{title} </h5>
    <p className="card-text">{description}</p>
    <p className="card-text lead fw-bold">${price}</p>
    <p className="card-text">{category}</p>
    <h6 className="rating">{rating}</h6>
    <NavLink to={`/products/${id}`} className="btn btn-outline-dark">Buy Now</NavLink>
  </div>
</div>
  )
}

export default ProductItem
