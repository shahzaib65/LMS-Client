import { UserContext } from "../../App"
import React,{useContext,useState} from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignIn() {

  const [error, setError] = useState("");
  const {state,dispatch} = useContext(UserContext)
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const showToastMessage = () => {
    toast.success("Success Login !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const errorToastMessage = () => {
    toast.error("Bad Credentials !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleOpenPDF = () => {
    const pdfUrl = 'https://res.cloudinary.com/duhiildi0/image/upload/v1702729409/pdfs/TERMS_OF_SERVICE_RETEACH-1_irooju.pdf';

    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">

      {
        loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
   <ClipLoader className=' items-center w-full h-full' color="#FFFFFF" loading={loading} size={50} />
   </div>
        ): (
          <>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" 
          noValidate
          onSubmit={handleSubmit(async (data) => {
    setLoading(true)
  const response = await fetch("https://lms-backend-production-068b.up.railway.app/api/user/login", {
          method: "POST",
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
          headers: { "content-type": "application/json" },
        });
        if (response.ok) {
          const data = await response.json();
          setError("");
          setLoading(false);
          navigate("/home");
         // showToastMessage()
          dispatch({type:"USER", payload:true})  
        }else{
          const error = await response.text()
          setError(error)
          errorToastMessage()
          setLoading(false)
        }
      })} 
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6  text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "email not valid",
                    },
                  })}
                  className="block w-full rounded-md border-0 py-1.5 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="text-start text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  {...register("password", {
                    required: "password is required",
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-900  bg-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 {error && (
                <p className="text-red-500">{error || error.message}</p>
              )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <ToastContainer />
          </form>
        </div>
        <div className=" flex flex-row justify-center items-center w-full h-auto space-x-1">
     <p className=" text-white text-sm font-sans font-light">By continuing, you agree to our</p>
     <p className=" text-white font-semibold text-[13px] underline cursor-pointer" onClick={handleOpenPDF}>Terms Of Service</p>

     </div>
          </>
        )
      }
       
      </div>
    </>
  )
}


