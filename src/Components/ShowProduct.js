import React from 'react'
import {NavLink} from 'react-router-dom'
const ShowProduct = (props)=>{
      
    let {title, description, price, rating, category, images} = props;
    return(
    <>
    <div className="col-md-6" >
        <img  src={images? images: "https://2.bp.blogspot.com/-jFW67EZStMo/W1-GY0uqMJI/AAAAAAAAE8U/y1ssu7JVNYARmViOZOd2lNM_j82YjhZQACLcBGAs/s1600/samsung-galaxy-note-9.jpg"} alt={title} height="400px" width="400px"/>
    </div>
    <div className="col-md-6">
        <h4 className="text-uppercase text-black-50" >{category}</h4>
        <h1 className="display-5" >{title}</h1>
        <p className="lead" >{rating}
        <i className="fa fa-star"></i>
        </p>
        <h3 className="display-6 fw-bold my-4" >${price}</h3>
        <p className="lead" >{description}</p>
        <button className="btn btn-outline-dark px-4 py-2">Add To Cart</button>
        <NavLink className="btn btn-outline-dark ms-2 px-3 py-2" to="/cart">Go To Cart</NavLink>
    </div>
    </>
    )
    }

    export default ShowProduct;