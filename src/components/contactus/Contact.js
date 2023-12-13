import { useState } from 'react'
import axios from "axios"
import { useForm } from "react-hook-form";
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const showToastMessage = () => {
    toast.success("Inquiry submitted !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const errorToastMessage = () => {
    toast.success("Something went wrong !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };


  return (
    <div className=" px-6 py-24 sm:py-32 lg:px-8">
     {
      loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
   <ClipLoader className=' items-center w-full h-full' color="#FFFFFF" loading={loading} size={50} />
   </div>
      ): (
<>
<div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-white">
         Please fill the form then team member will contact with you.
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20"
      noValidate
      onSubmit={handleSubmit(async (data) => {
       
        setLoading(true)
    let jsonObj = {
      "firstName": data.first,
      "lastName": data.last,
      "email": data.email,
      "phoneNo": data.phone,
      "subject": data.message
    }
    
        axios.post("https://lms-backend-production-068b.up.railway.app/api/enquiry/enquiry-user",jsonObj)
        .then(async(res)=>{
          await  showToastMessage()
           setError("");
           setLoading(false);
           reset();   
        }).catch((err)=>{
          setLoading(false)
        errorToastMessage()
        //  alert(err.response.data.message)
        //  setError()
         reset();
        })
      })}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                {...register("first", {
                    required: "First name is required",
                      })}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-white bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.first && (
                  <p className="text-start text-red-500">{errors.first.message}</p>
                )}
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last"
                {...register("last", {
                    required: "last name is required",
                  })}
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.last && (
                <p className="text-red-500">{errors.last.message}</p>
              )}
            </div>
          </div>
         
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "email not valid",
                    },
                  })}
                className="block w-full rounded-md bg-gray-800 border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.email && (
                  <p className="text-start text-red-500">{errors.email.message}</p>
                )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
              Phone number
            </label>
            <div className="relative mt-2.5">
            
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                {...register("phone", {
                    required: "phone number is required",
                  })}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-5 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.phone && (
                  <p className="text-start text-red-500">{errors.phone.message}</p>
                )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-white text-sm font-semibold leading-6 ">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                {...register("message", {
                    required: "message is required",
                  })}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-white bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
               {errors.message && (
                  <p className="text-start text-red-500">{errors.message.message}</p>
                )}
            </div>
          </div>
          {error && (
                <p className="text-red-500 w-full">{error || error.message}</p>
              )}
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send
          </button>
        </div>
        <ToastContainer />
      </form>
</>
      )
     }

     
    </div>
  )
}
