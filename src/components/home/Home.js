import React, { useState,useEffect } from "react";
import Carousel from "../swiper/ImageSlider";
import axios from "axios"
import VideoThumbnail from 'react-video-thumbnail'; 
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const[courses,setCourses] = useState([])

  const key_secret = 'rzp_test_JVqQWR4Ae2STfT'
  const [orderid, setOrderId] = useState(null);

  const data ={
    amount: 1099,
    name: 'E-Learning',
    profile_name: 'Manav',
    email: 'manav@gmail.com',
    product: 'Course',
    number: '9712205783',
    address: 'Gujrant,India',
    callback_url: "https://lms-backend-production-068b.up.railway.app/api/payment-callback",
    cancel: "https://lms-backend-production-068b.up.railway.app/api/payment-cancel"
  }

  const getOrderId = ()=>{
    axios.post('https://lms-backend-production-068b.up.railway.app/api/orders', {...data})
    .then(res => {  
      setTimeout(() => {
        setOrderId(res.data);
      }, 1500);
    })
    .catch(error => {
      console.error(error);
    });   
  }

  useEffect(()=>{
    getOrderId();
    // eslint-disable-next-line
  }, [])


  const handleItemClick = (index) => {
    setSelectedItem(index);
    if(index === 0){
      axios.get("https://lms-backend-production-068b.up.railway.app/api/course/get-course/X")
   .then(async(res)=>{
    setCourses(res.data.courses)
   }).catch((err)=>{
    console.log(err)
   })
    } else if(index === 1){
      axios.get("https://lms-backend-production-068b.up.railway.app/api/course/get-course/XI")
      .then(async(res)=>{
       setCourses(res.data.courses)
      }).catch((err)=>{
       console.log(err)
      })
    }else if(index === 2){
      axios.get("https://lms-backend-production-068b.up.railway.app/api/course/get-course/XII")
      .then(async(res)=>{
       setCourses(res.data.courses)
      }).catch((err)=>{
       console.log(err)
      })
    }
  };

  let slides = [
    "./teacher.jpg",
    "./girl-smile.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  return (
    <div className="w-full pt-0">
      <div>
        <Carousel slides={slides} />
      </div>

      <div className=' flex justify-center items-center'>
   <p className=' items-center  py-4 px-20 font-semibold my-3 rounded-xl text-white bg-gray-950'>Select class from below</p>
   </div>

      <div className=" flex justify-center items-center">
      <Disclosure>
        <div className="flex flex-col px-2 mt-2 md:justify-between md:flex-row md:mx-10 md:py-0">
          <ul className=" flex flex-row space-x-5 my-2 md:my-0">
            <li>
              <Link to="">
                <Disclosure.Button
                  className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm text-center font-medium border border-indigo-600 ${
                    selectedItem === 0
                      ? " bg-gray-500 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => handleItemClick(0)}
                >
                  X
                </Disclosure.Button>
              </Link>
            </li>
            <Link to="">
              <Disclosure.Button
                className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                  selectedItem === 1
                    ? "bg-gray-500 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => handleItemClick(1)}
              >
                XI
              </Disclosure.Button>
            </Link>

            <li>
              <Link to="">
                <Disclosure.Button
                  className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                    selectedItem === 2
                      ? "bg-gray-500 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => handleItemClick(2)}
                >
                  XII
                </Disclosure.Button>
              </Link>
            </li>
          </ul>

          {/* <div className=" w-full md:w-1/4">
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-white dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block p-2 text-white bg-gray-800 pl-10 w-full text-sm rounded-lg border border-indigo-600 focus:ring-gray-500 focus:border-blue-500 placeholder:text-white"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute right-0 bottom-0 bg-indigo-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </Disclosure>
      </div>
    
      <div>
      <>
      <section>
        <div className="container px-2 py-10 mx-auto">
        <div className=" flex justify-end items-end">
          {/* <button className=" text-white bg-indigo-500 rounded-md w-40 h-10">Buy now</button> */}
          <form method="POST" action="https://api.razorpay.com/v1/checkout/embedded">
                <input type="hidden" name="key_id" value={key_secret}/>
                <input type="hidden" name="amount" value={data.amount} />
                <input type="hidden" name="order_id" value={orderid}/>
                <input type="hidden" name="name" value={data.name}/>
                <input type="hidden" name="description" value={data.product}/>
                <input type="hidden" name="image" value={logo}/>
                <input type="hidden" name="prefill[name]" value={data.profile_name}/>
                <input type="hidden" name="prefill[contact]" value={data.number}/>
                <input type="hidden" name="prefill[email]" value={data.email}/>
                <input type="hidden" name="notes[shipping address]" value={data.address}/>
                <input type="hidden" name="callback_url" value={data.callback_url}/>
                <input type="hidden" name="cancel_url" value={data.cancel_url}/>

                 <div className='col-12 center'>
                    <button disabled={!orderid} className='text-white bg-indigo-500 rounded-md w-40 h-10' type="submit">Pay Now</button>
                </div>
                
                
                
            </form>
        </div>

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
      </div>
    </div>
  );
}
