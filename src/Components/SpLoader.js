import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SpLoader = () => {
  return (
    <>
    <SkeletonTheme highlightColor="beige">
      <div className="col-md-6">
        <Skeleton height="400px" width="400px"/>
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50"><Skeleton height={33} width={250}/></h4>
        <h1 className="display-5"><Skeleton height={54} width={250}/></h1>
        <p className="lead">
         <Skeleton width={50} height={30}/>
        </p>
        <h3 className="display-6 fw-bold my-4"><Skeleton height={50} width={100}/></h3>
        <p className="lead"><Skeleton height={50} width={420}/></p>
        <div className="px-4 py-2"><Skeleton height={50} width={200}/></div>
      </div>
      </SkeletonTheme>
    </>
  );
};

export default SpLoader;
