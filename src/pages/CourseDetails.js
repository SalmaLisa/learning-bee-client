import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Ratings from "../components/Ratings";
import DownloadPage from "../components/DownLoadPdf";
import { useTitle } from "../Hooks/useTitle";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { _id, title, img, desc, Price, rating } = courseDetails;
  useTitle(title);
  return (
    <div id="downloadPage">
      <div className="hero min-h-screen bg-base-200 pb-20 mb:pb-0">
        <div className="hero-content flex-col lg:flex-row">
          <img
            style={{ width: "520px" }}
            src={img}
            className="mask mask-parallelogram "
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{desc}</p>
            <div className="flex mb-10 ">
              <Ratings rating={rating}></Ratings>
              <p className="font-bold ml-20">Price : {Price}</p>
            </div>
            <div className="md:flex items-center block text-center">
              <Link to={`/premium/${_id}`}>
                <button className="btn btn-warning font-bold md:mr-5 hover:bg-yellow-500 mb-5 md:mb-0">
                  Get Premium Access
                </button>
              </Link>
              <DownloadPage
                roofElementId="downloadPage"
                downloadFileName={`${title}.pdf`}
                img={img}
              ></DownloadPage>
              <Link className="block mt-5 md:flex md:mt-0 " to="/courses">
                <button className="btn  font-bold">Not now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
