function BuyPage() {
  return (
    <div className="w-full">
      <h1 className="text-center py-5">
        Watch Name
      </h1>
      <h2 className="flex ">
        <span>Model</span>
        <span>Design</span>
      </h2>

      <div className="flex flex-col gap-6  py-10 items-center">
        <div className="flex flex-col md:w-[50%] w-[80%] border-2 border-gray-400 rounded-2xl py-6 px-4 gap-7 h-[450px">
          <div className="flex   gap-3">
            <p className="text-[16px] text-gray-700 font-semibold ">
              Phone no:
            </p>
            <p
              className="bg-gray-300 rounded-[5px] py-1  text-center px-2
             text-black font-medium shadow-[5px_5px_8px] shadow-black hover:shadow-lg"
            >8882501959
            </p>
          </div>

          <div className="flex gap-3">
            <p className="text-[16px] text-gray-700 font-semibold">
              Home Address
            </p>
            <p
              className="bg-gray-300 rounded-[5px] py-1  text-center px-2
             text-black font-medium shadow-[5px_5px_8px] shadow-black hover:shadow-lg"
            > Ab-330 amar puri nabi karim pahar ganj new delhi - 110055</p>
          </div>
          <div className="flex gap-5">
            <p className="text-[16px] text-gray-700 font-semibold">
              Office Address <span className="text-gray-500">(Optional)</span>
            </p>
            <p
              className="bg-gray-300 rounded-[5px] py-1  text-center px-2
             text-black font-medium shadow-[5px_5px_8px] shadow-black hover:shadow-lg"
              
            >Not Provided</p>
          </div>
        </div>

        <div className=" flex flex-col justify-center md:w-[40%] w-[80%] border-2 border-gray-600 rounded-2xl h-[300px] space-y-5 px-5">
          <h1 className="text-center">Order Summary</h1>
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
