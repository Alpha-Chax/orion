import React from 'react'
import './Styles/Banner.css'


const Banner = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div className="carousel-item active" data-bs-interval="2500">
      <img src="https://uptownstudios.net/wp-content/uploads/2019/11/Uptown-Blog-2019-AccessibleColor-1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2500">
      <img src="https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2500">
      <img src="https://mobirise.com/extensions/commercem4/assets/images/gallery06.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2500">
      <img src="https://images.unsplash.com/photo-1622324178857-0d889ffee00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwZ3VpdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Banner
