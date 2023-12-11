import React from 'react'

const StudentsList = () => {

    const handleClick = () => {
       console.log('worrk')
     alert('working')
      };


  return (
    <div className=' bg-gray-900 mt-20 rounded-md max-w-7xl mx-auto '>



<div className="flex flex-col justify-center ml-20">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left bg-gray-800 text-sm font-light">
              <thead className="border-b font-medium bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-4 text-white">#</th>
                  <th scope="col" className="px-6 py-4 text-white">Firstname</th>
                  <th scope="col" className="px-6 py-4 text-white">Lastname</th>
                  <th scope="col" className="px-6 py-4 text-white">Email</th>
                  <th scope="col" className="px-6 py-4 text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-white">12356dbdabadyub</td>
                  <td className="whitespace-nowrap px-6 py-4 text-white">Shahzaib</td>
                  <td className="whitespace-nowrap px-6 py-4 text-white">Mehmmod</td>
                  <td className="whitespace-nowrap px-6 py-4 text-white">shahzaibbmehmood65@gmail.com</td>
                  <td className=' space-x-2'>
                  <button className="text-blue-500 font-normal text-sm hover:underline mr-2" onclick="editUser(2)">Edit</button>
                    <button className="text-red-500 font-normal text-sm hover:underline" onclick="deleteUser(2)">Delete</button>
                  </td>
                </tr>

                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-white">12356dbdabadyub</td>
                  <td className="whitespace-nowrap px-6 py-4 text-white">Shahzaib</td>
                  <td className="whitespace-nowrap px-6 py-4 text-white">Mehmmod</td>
                  <td className="whitespace-nowrap px-6 py-4 text-white">shahzaibbmehmood65@gmail.com</td>
                  <td className=' space-x-1'>
                  <button className="text-blue-500 font-normal text-sm hover:underline mr-2" onclick="editUser(2)">Edit</button>
                    <button className="text-red-500 font-normal text-sm hover:underline" onclick="deleteUser(2)">Delete</button>
                  </td>
                </tr>

                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-white">12356dbdabadyub</td>
                  <td className="whitespace-nowrap px-6 py-4 text-white">Shahzaib</td>
                  <td className="whitespace-nowrap px-6 py-4 text-white">Mehmmod</td>
                  <td className="whitespace-nowrap px-6 py-4 text-white">shahzaibbmehmood65@gmail.com</td>
                  <td className=' space-x-1'>
                  <button className="text-blue-500 font-normal text-sm hover:underline mr-2" onClick={handleClick}>Edit</button>
                    <button className="text-red-500 font-normal text-sm hover:underline" onclick={()=>{}}>Delete</button>
                  </td>
                </tr>
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default StudentsList
