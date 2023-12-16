import React from 'react'
import { Link } from 'react-router-dom';
const Success = () => {
    return (
        <div className=" flex justify-center items-center w-full h-full">
         
                <div className=" text-white flex flex-col font-serif font-bold items-center">
                    <h4 className="alert-heading">Payment Successfull</h4>
                    <Link className='text-white' to='/home'>Back to Home</Link>
                </div>
                
            
         
        </div>
      );
}

export default Success
