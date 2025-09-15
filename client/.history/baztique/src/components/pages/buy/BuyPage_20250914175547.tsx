
import { sendEmail } from "../../../services/sendEmail/SendEmail";
import { getWatchById } from "../../../services/WatchDetailsById";
import { useNavigate } from "react-router-dom";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const API_EMAIL = import.meta.env.VITE_API_EMAIL;


function BuyPage() {
  
  const navigate = useNavigate();


  async function handleEmail(): Promise<void> {
    try{
      const watch = await getWatchById(1);
      
      const phoneNumber = "";
      const emialId = "fd";
      const address = "address";
      
      const mailBody = {to:API_EMAIL,subject:"Watch Order placed",message:
        `Watch id: ${watch!.id}, Watch Model: ${watch?.modelNumber}, Watch Brand: ${watch?.brand}, Phone no: ${phoneNumber}, Email id: ${emialId}, Address: ${address}`
      }
      const response =await sendEmail(mailBody);
      
      if(response?.status===200){
        toast.success('Your order is successfully placed!');
        setTimeout(() => {
        navigate("/");
      }, 3000);
      }
    }catch(error){
      toast.error('Order failed. Please try again.');
      
    }

  }

  return (
    <div className="w-full">
      <h1 className="text-center pt-5 font-semibold text-[22px]">
        Watch Name
      </h1>
      <h2 className="flex justify-center font-light text-[">
        <span>Model</span>
        <span>Design</span>
      </h2>

      <div className="flex flex-col gap-6  py-10 items-center">
        <div className="flex flex-col md:w-[40%] w-[80%] border-2 border-gray-400 rounded-2xl py-6 px-4 gap-7 h-[450px">
          <div className="flex justify-center gap-3">
            <p className="text-[16px] text-gray-700 font-semibold ">
              Phone no:
            </p>
            <input className="bg-gray-300 rounded-[5px] py-1  text-center px-2 
             text-black font-medium shadow-[5px_5px_8px] shadow-black hover:shadow-lg" placeholder="Enter your number" required/>
          </div>

          <div className="flex justify-center gap-3">
            <p className="text-[16px] text-gray-700 font-semibold">
              Address
            </p>
            <input className="bg-gray-300 rounded-[5px] py-1  text-center px-2
             text-black font-medium shadow-[5px_5px_8px] shadow-black hover:shadow-lg" placeholder="Enter your address" required/>
          </div>
          <div className="flex justify-center gap-3">
            <p className="text-[16px] text-gray-700 font-semibold">
              Email Id <span className="font-">(Optional)</span>
            </p>
            <input className="bg-gray-300 rounded-[5px] py-1  text-center px-2
             text-black font-medium shadow-[5px_5px_8px] shadow-black hover:shadow-lg" placeholder="Enter your address" required/>
          </div>
          
        </div>

        <div className=" flex flex-col justify-center md:w-[40%] w-[80%] border-2 border-gray-600 rounded-2xl h-[300px] space-y-5 px-5">
          <h1 className="text-center font-semibold uppercase">Order Summary</h1>
          <div className="space-y-2  ">
            <h2 className="flex justify-between text-[16px] text-gray-700 font-semibold ">
              <span>Subtotal: </span><span className="">150.59</span>
            </h2>
            <h2 className="flex justify-between text-[16px] text-gray-700 font-semibold ">
              <span>Taxes & GST: Included</span><span></span>
            </h2>
            <h2 className="flex justify-between text-[16px] text-gray-700 font-semibold ">
              <span>Total Amount: </span><span className="">150.59</span>
            </h2>
            <div className="flex flex-col items-center">
              <h3 className="font-light text-[15px]">Only cash on delivery available</h3>
              <button onClick={handleEmail}
                className="bg-blue-400 py-2 px-3 rounded-[10px] text-white
                shadow-[2px_4px_5px] shadow-black hover:shadow-lg font-mediam mt-3"
              >
                Place Order
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BuyPage;
