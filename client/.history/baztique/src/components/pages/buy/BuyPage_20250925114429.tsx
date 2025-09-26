import { useEffect, useState } from "react";
import { sendEmail } from "../../../services/sendEmail/SendEmail";
import { getWatchById } from "../../../services/WatchDetailsById";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import type { EmailBody } from "../../models/EmailBody";
import type { Watch } from "../../models/Watch";

const API_EMAIL = import.meta.env.VITE_API_EMAIL;

function BuyPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [address, setAddress] = useState("");
  const [watch, setWatch] = useState<Watch | null>(null);
  const {id} = useParams();
  console.log(id);
  

  const navigate = useNavigate();
   useEffect(() => {
    const fetchWatch = async () => {
      try {
        const result = await getWatchById(1); // await here
        console.log(result)
        setWatch(result!);
      } catch (error) {
        console.error("Error fetching watch:", error);
      }
    };

    fetchWatch();
    
  }, []);

  async function watchDetail(): Promise<string | null> {
    try {
      

      if (!watch) {
        toast.error("Watch not found");
        
        return null;
      }

      if (!phoneNumber) {
        toast.error("Please enter phone number...");
        return null;
      }

      const detail =
        `Watch id: ${watch.id}, Watch Model: ${watch.modelNumber}, ` +
        `Watch Brand: ${watch.brand}, Phone no: ${phoneNumber}, ` +
        `Email id: ${emailId || "N/A"}, Address: ${address}`;

      return detail;
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch watch details");
      return null;
    }
  }

  async function handleEmail(): Promise<void> {
    try {
      const message = await watchDetail();
      if (!message) return;

      const mailBody: EmailBody = {
        to: API_EMAIL,
        subject: "Watch Order placed",
        message,
      };

      const response = await sendEmail(mailBody);

      if (response?.status === 200) {
        toast.success("Your order is successfully placed!");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.error(error);
      toast.error("Order failed. Please try again.");
    }
  }

  return (
    <div className="w-full">
      <h1 className="text-center pt-5 font-semibold text-[22px]">Watch Name</h1>
      <h2 className="flex justify-center font-light">
        <span>{watch!.brand}</span>
        <span>{watch!.modelNumber}</span>
      </h2>

      <div className="flex flex-col gap-6 py-10 items-center">
        <div className="flex flex-col md:w-[40%] w-[80%] border-2 border-gray-400 rounded-2xl py-6 px-4 gap-7 h-[450px]">
          <div className="flex justify-between gap-3">
            <p className="text-[16px] text-gray-700 font-semibold">Phone No</p>
            <input
              className="bg-gray-300 rounded-[5px] py-1 text-center px-2 text-black font-medium shadow-[5px_5px_8px] shadow-black hover:shadow-lg"
              placeholder="Enter Your Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between gap-3">
            <p className="text-[16px] text-gray-700 font-semibold">Address</p>
            <input
              className="bg-gray-300 rounded-[5px] py-1 text-center px-2 text-black font-medium shadow-[5px_5px_8px] shadow-black hover:shadow-lg"
              placeholder="Enter Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between gap-3">
            <p className="text-[16px] text-gray-700 font-semibold">
              Email Id <span className="font-light text-[15px]">(Optional)</span>
            </p>
            <input
              className="bg-gray-300 rounded-[5px] py-1 text-center px-2 text-black font-medium shadow-[5px_5px_8px] shadow-black hover:shadow-lg"
              placeholder="Enter Your Email id"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center md:w-[40%] w-[80%] border-2 border-gray-600 rounded-2xl h-[300px] space-y-5 px-5">
          <h1 className="text-center font-semibold uppercase">Order Summary</h1>
          <div className="space-y-2">
            <h2 className="flex justify-between text-[16px] text-gray-700 font-semibold">
              <span>Subtotal: </span>
              <span>150.59</span>
            </h2>
            <h2 className="flex justify-between text-[16px] text-gray-700 font-semibold">
              <span>Taxes & GST: Included</span>
              <span></span>
            </h2>
            <h2 className="flex justify-between text-[16px] text-gray-700 font-semibold">
              <span>Total Amount: </span>
              <span>150.59</span>
            </h2>
            <div className="flex flex-col items-center">
              <h3 className="font-light text-[15px]">
                Only cash on delivery available
              </h3>
              <button
                onClick={handleEmail}
                className="bg-blue-400 py-2 px-3 rounded-[10px] text-white shadow-[2px_4px_5px] shadow-black hover:shadow-lg font-medium mt-3"
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
