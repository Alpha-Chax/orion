import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = () => {
  return (
    <>
      <div className="card h-100 col-md-4 my-2 text-center p-4">
        <SkeletonTheme highlightColor='seashell'/>
        <div className="card-img-top">
          <Skeleton height={250} width={350} duration={2}/>
        </div>
        <div className="card-body">
          <h5 className="card-title mb-0">
            <Skeleton width={160} duration={2}/>
          </h5>
          <p className="card-text">
            <Skeleton width={320} duration={2}/>
          </p>
          <p className="card-text lead fw-bold">
            <Skeleton width={60} duration={2}/>
          </p>
          <p className="card-text">
            <Skeleton width={120} duration={2}/>
          </p>
          <h6 className="rating">
            <Skeleton width={40} duration={2}/>
          </h6>
        </div>
      </div>
    </>
  )
}

export default Loader
