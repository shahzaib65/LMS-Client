import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Pricing from "../pricing/Pricing"
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const DetailPage = () => {

  const { id } = useParams();
  console.log(id)
  const[detail,setDetails] = useState({})

  useEffect(()=>{
    axios.get(`https://lms-backend-production-068b.up.railway.app/api/course/courseDetails/${id}`)
    .then((res)=>{
      setDetails(res.data.course_details)
    }).catch((err)=>{
      console.log(err.message);
    })
  },[])

 const handleOpenPDF = () => {
    const pdfUrl = 'https://res.cloudinary.com/duhiildi0/image/upload/v1702498334/pdfs/mpabvljghssyabwylalo.pdf';

    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  };


 const handleDownload = async () => {
    const pdfUrl = 'https://res.cloudinary.com/duhiildi0/image/upload/v1702498334/pdfs/mpabvljghssyabwylalo.pdf';

    try {
      const suggestedFileName = 'document.pdf';
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = suggestedFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
 

  return (
    <div className=' w-full h-auto'>
    <div className='w-full flex flex-col'>
{/* <div>
<div className="bg-indigo-600 px-4 py-3 text-white">
  <p className="text-center text-sm font-medium">
    Love Alpine JS?
    <a href="#" className="inline-block underline">Check out this new course!</a>
  </p>
</div>
</div> */}


    <div className='mb-2'>
    <h1 className=' text-white m-4 font-bold text-lg'>{detail.course_name}</h1>
    </div>

    <div>
    <ReactPlayer width="100%" className=" mt-3"  url={detail.course_video_url}
   config={{ file: { attributes: { controlsList: 'nodownload' } } }}
     controls

     />
    </div>
  
    <div className='m-4 flex flex-col md:flex-row md:justify-between'>
      <p className='text-lg text-white text-center mb-4'>{detail.course_description}</p>
  <button className="flex w-auto justify-center rounded-md bg-indigo-600 px-3 py-1 h-8 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleDownload}>Open Pdf</button>           
    </div>

  
    {/* <div className=' flex flex-row mx-4'>
   <p className=' text-white text-sm font-bold mx-2'>Rs.400</p>
   <p className=' line-through text-white text-sm font-bold'>Rs.300</p>
    </div> */}
    
 
        <div>
       
        </div>



   </div>
   </div>
  )
}


// flex flex-col md:flex-row md:justify-between