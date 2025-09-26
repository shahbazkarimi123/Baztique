import { useEffect, useState } from "react";
import { sendEmail } from "../../../services/sendEmail/SendEmail";
import { getWatchById } from "../../../services/WatchDetailsById";
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Watch } from "../../models/Watch";

const API_EMAIL = import.meta.env.VITE_API_EMAIL;

function BuyPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [watch, setWatch] = useState<Watch | null>(null);
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  useEffect(() => {
  if (id) {
    getWatchById(Number(id)).then((data) => {
      if (data) setWatch(data);
    });
  }
}, [id]);


  async function handleEmail(e:React.FormEvent): Promise<void> {
    e.preventDefault();
    try {
      const mailBody = {
        to: API_EMAIL,
        subject: "Watch Order placed",
        message: `Watch id: ${watch!.id}, Watch Model: ${
          watch?.modelNumber
        }, Watch Brand: ${
          watch?.brand
        }, Phone no: ${phoneNumber}, Email id: ${email}, Address: ${address}`,
      };
      const response = await sendEmail(mailBody);
      console.log(response?.status)
      if (response?.status === 200) {
        toast.success("Your order is successfully placed!");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      toast.error("Order failed. Please try again.");
    }
  }

  return (
    <div className="w-full bg-[#c4fcef]">
      <h1 className="text-center pt-5 font-semibold text-[25px]">
        {watch?.brand}
      </h1>
      <h2 className="flex justify-center font-light text-[20px]">
        {watch?.modelNumber} | {watch?.gender}
      </h2>
      
        <form
  onSubmit={handleEmail}
  className="flex flex-col justify-center gap-6  py-10 items-center"
>
          <div className="flex flex-col justify-center md:w-[40%] w-[80%] border-4 border-[#4d8076] rounded-t-xl py-6 px-4 gap-7 h-[450px">
            <div className="flex flex-col justify-center items-center border-[#4d8076] border-2 py-4 rounded-t-xl">
              <p className="text-[16px] text-gray-700 font-semibold text-center">
                Phone No
              </p>
              <input
                className="bg-white rounded-[5px] py-3   text-center px-2 w-[95%]
             text-black font-medium shadow-[5px_5px_8px] shadow-black hover:shadow-lg"
                name="phone"
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter Your Number"
              />
            </div>

            <div className="flex flex-col justify-center items-center border-2 border-[#4d8076] py-4">
              <p className="text-[16px] text-gray-700 font-semibold text-center">
                Address
              </p>
              <input
                onChange={(e) => setAddress(e.target.value)}
                name="address"
                className="bg-white rounded-[5px] py-1  text-center px-2 w-[95%]
            text-black font-medium shadow-[5px_5px_8px]
            shadow-black hover:shadow-lg"
                placeholder="Enter Your Address"
                required
              />
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-b-xl border-[#4d8076] py-4">
              <p className="text-[16px] text-gray-700 font-semibold text-center">
                Email Id{" "}
                <span className="font-light text-[15px]">(Optional)</span>
              </p>
              <input
                className="bg-white rounded-[5px] py-1  text-center px-2 w-[95%]
             text-black font-medium shadow-[5px_5px_8px] shadow-black hover:shadow-lg"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email id"
              />
            </div>
          </div>

          <div
            className=" flex flex-col justify-center md:w-[40%] w-[80%] border-4
        border-[#4d8076] rounded-b-xl h-[300px] space-y-5 px-5"
          >
            <h1 className="text-center font-semibold uppercase text-gray-800">
              Order Summary
            </h1>
            <div className="space-y-2  ">
              <h2 className="flex justify-between text-[16px] text-gray-700 font-semibold ">
                <span>Subtotal: </span>
                <span className="text-green-600">{watch?.price}</span>
              </h2>
              <h2 className="flex justify-between text-[16px] text-gray-700 font-semibold ">
                <span>Taxes & GST: Included</span>
                <span></span>
              </h2>
              <h2 className="flex justify-between text-[16px] text-gray-700 font-semibold ">
                <span>Total Amount: </span>
                <span className="text-green-600">{watch?.price != null ? (Number(watch.price * 105 / 100).toFixed(2)) : "0.00"}</span>
              </h2>
              <div className="flex flex-col items-center">
                <h3 className="font-light text-[15px]">
                  Only cash on delivery available
                </h3>
                <button
                type="submit"
                  className="bg-[#00c9a7] py-2 px-3 rounded-[10px] text-white
                shadow-[2px_4px_5px] shadow-black hover:shadow-lg font-mediam mt-3"
                >
                  Place Order
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </form>
      
    </div>
  );
}
export default BuyPage;
