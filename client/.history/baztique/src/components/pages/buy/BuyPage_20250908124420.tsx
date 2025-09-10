function BuyPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-6  py-10 items-center">
        <div className="flex flex-col w-[60%] border-2 border-gray-400 rounded-2xl py-6 gap-7 h-[450px">
          <div className="flex   gap-3">
            <p className="text-[16px] text-gray-700 font-semibold ">
              Phone no:
            </p>
            <p
              className="bg-gray-300 rounded-[5px] py-1  text-center px-2
             text-black font-medium shadow-[-5px_5px_8px] shadow-black hover:shadow-lg"
            >8882501959
            </p>
          </div>

          <div className="flex flex-col ">
            <p className="text-[16px] text-gray-700 font-semibold">
              Home Address
            </p>
            <p
              className="bg-gray-300 w-[90%] rounded-[5px] h-8 border-none px-2
            placeholder-[#023e8a] outline-gray-400 focus:ring-1 focus:ring-yellow-200
            text-black font-medium shadow-[-5px_5px_8px] shadow-black hover:shadow-lg"
            > Ab-</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[16px] text-gray-700 font-semibold">
              Office Address <span className="text-gray-500">(Optional)</span>
            </p>
            <input
              className="bg-gray-300 w-[90%] rounded-[5px] h-8 border-none px-2
            placeholder-[#023e8a] outline-gray-400 focus:ring-1 focus:ring-yellow-200
            text-black font-medium shadow-[-5px_5px_8px] shadow-black hover:shadow-lg"
              type="text"
              placeholder="Enter Office Address"
            />
          </div>
        </div>

        <div className=" flex flex-col justify-evenly w-[60%] border-2 border-gray-600 rounded-2xl h-[300px] space-y-5 px-5">
          <h1 className="text-center">Order Summary</h1>
          <div className="space-y-2">
            <h2 className="text-[16px] text-gray-600 font-semibold ">
              Subtotal:<span> 150</span>
            </h2>
            <h2 className="text-[16px] text-gray-600 font-semibold ">
              Taxes & GST: Included
            </h2>
            <h2 className="text-[16px] text-gray-700 font-semibold ">
              Total Amount: <span>150.59</span>
            </h2>
            <div className="flex flex-col items-center">
              <button
                className="bg-blue-400 py-2 px-3 rounded-[10px] text-white
                shadow-[2px_4px_5px] shadow-black hover:shadow-lg font-mediam"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BuyPage;
