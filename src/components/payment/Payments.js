import React,{useState,useEffect} from 'react'
import axios from "axios"
import logo from "../../assets/logo.png"

function Payments() {

  const key_secret = 'rzp_test_JVqQWR4Ae2STfT'
  const [orderid, setOrderId] = useState(null);
  const [loading2, setLoading2] = useState(false);

  const data ={
    amount: 1099,
    name: 'E-learning',
    profile_name: 'Manav',
    email: 'manav@gmail.com',
    product: 'Course',
    number: '9712205783',
    address: 'Gujrant,India',
    callback_url: "http://localhost:5000/api/payment-callback",
    cancel: "http://localhost:5000/api/payment-cancel"
  }

  const getOrderId = ()=>{
    setLoading2(true)
    axios.post('http://localhost:5000/api/orders', {...data})
    .then(res => {  
      setTimeout(() => {
        setOrderId(res.data)
        setLoading2(false)
      }, 1500);
    })
    .catch(error => {
      setLoading2(false)
      console.error(error);
    });   
  }

  useEffect(()=>{
    getOrderId();
    // eslint-disable-next-line
  }, [])
  return (
    <>
    <div className='main'>
      <img width={50} src={logo} alt="" />
      <h2 className='fs-4 mt-2'>in Reactjs & Nodejs</h2>
      <div className='card px-5 py-4 mt-5'>
        <form className=''>
          <div className='col-12 '>
            <p>Name: {data.profile_name}</p>
          </div>
          <div className='col-12 '>
            <p>Email: {data.email}</p>
          </div>
          <div className='col-12 '>
            <p>Product: {data.product}</p>
          </div>
          <div className='col-12 '>
            <p>Amount: {data.amount}Rs</p>
          </div>

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

                <hr />
                <div className='text-center'>
                  {loading2 && <p className='m-0 my-3 text-danger'>generating order_id...</p>}
                </div>
                <div className='text-center'>
                  {orderid && <p className='m-0 my-3 text-success'>order id generated successfully!</p>}
                  {orderid && <p className='m-0'>{orderid}</p>}
                </div>
                {!loading2? <div className='col-12 center'>
                    <button disabled={!orderid} className='w-100' type="submit">Pay Now</button>
                </div>
                :
                <div className='col-12 center'>
                    <button className='w-100 text-center' type="submit">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Wait...</span>
                    </div>
                    </button>
                </div>
                }
                
            </form>
        </form>
      </div>
    </div>
    <p className='m-0'>@codesense24</p>
    <p className='' style={{fontSize: "14px"}}>Subscribe my youtube channel</p>
    </>
  )
 
//    return (
//      <div className=' bg-gray-900 mt-20 rounded-md max-w-7xl mx-auto '>
 
 
 
//  <div className="flex flex-col justify-center ml-20">
//        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
//          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
//            <div className="overflow-hidden">
//              <table className="min-w-full text-left bg-gray-800 text-sm font-light">
//                <thead className="border-b font-medium bg-gray-700">
//                  <tr>
//                    <th scope="col" className="px-6 py-4 text-white">Payment ID</th>
//                    <th scope="col" className="px-6 py-4 text-white">Course name</th>
//                    <th scope="col" className="px-6 py-4 text-white">Course ID</th>
//                    <th scope="col" className="px-6 py-4 text-white">Email</th>
//                    <th scope="col" className="px-6 py-4 text-white"> Status</th>
//                  </tr>
//                </thead>
//                <tbody>
//                  <tr className="border-b dark:border-neutral-500">
//                    <td className="whitespace-nowrap px-6 py-4 font-medium text-white">12356dbdabadyub</td>
//                    <td className="whitespace-nowrap px-6 py-4 text-white">Chemistry</td>
//                    <td className="whitespace-nowrap px-6 py-4 text-white">348369w6</td>
//                    <td className="whitespace-nowrap px-6 py-4 text-white">shahzaibbmehmood65@gmail.com</td>
//                    <td className="whitespace-nowrap px-6 py-4 text-white bg-green-300 text-center">confirmed</td>
//                  </tr>
 
               
               
//                </tbody>
//              </table>
//            </div>
//          </div>
//        </div>
//      </div>
       
//      </div>
   
//   )
}

export default Payments
