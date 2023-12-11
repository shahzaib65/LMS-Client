import React, { useEffect, useState } from "react";
import axios from "axios"
import VideoThumbnail from 'react-video-thumbnail'; 
import { Link } from "react-router-dom";
export const CoursesList = () => {

   const[courses,setCourses] = useState([])

  useEffect(()=>{
   axios.get("https://lms-backend-production-068b.up.railway.app/api/course/get-course")
   .then(async(res)=>{
    setCourses(res.data.courses)
   }).catch((err)=>{
    console.log(err)
   })
  },[])


  useEffect(()=>{

  //   let headers = {
  //     "accept": "application/json"
  //   }
  // axios.post("https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",headers)
  // .then((res)=>{
  //  console.log(res)
  // }).catch((err)=>{
  // console.log(err);
  // })
  

   
  },[])


  return (
    <>
      <section>
        <div className="container px-2 py-10 mx-auto">
          <div className="grid grid-cols-1 bg-gray-950 gap-8 mt-8 md:mt-4 md:grid-cols-2 xl:grid-cols-3">
    {
        courses.map((e)=>(
            <div key={e._id} className=" py-4">
              <div className="relative">
       <Link  to={`/course/${e._id}`}>
       <VideoThumbnail
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  videoUrl={e.course_video_url}
                  alt=""
                />
       </Link>
                <div className="absolute bottom-0 flex p-3 bg-white">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />

                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">
                      Instructor
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      ABC Academy
                    </p>
                  </div>
                </div>
              </div>

              <h1 className="mt-6 text-xl font-semibold text-white ml-2">
               {e.course_name}
              </h1>

              <p className="text-sm text-white ml-2">
                {e.course_description}
              </p>

              <div className=" flex flex-row justify-between mx-2">
                <p className=" text-white inline mt-4">Standard: {e.standard}</p>
               
              </div>
            </div>
        ))
    }
          </div>
        </div>
      </section>
    </>
  );
};
