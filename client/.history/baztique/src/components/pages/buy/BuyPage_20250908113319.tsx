function BuyPage() {

  return (
    <div>
      <div className="flex justify-evenly py-10">
        <div className="flex flex-col justify-center items-center border-2 border-gray-400 rounded-2xl py-6 gap-7">
            <div className="flex flex-col items-center">
                <p>Phone</p>
                <input className="bg-gray-300 w-[90%] rounded-[5px] h-8 border-none px-2
            placeholder-[#023e8a] outline-gray-400 focus:ring-1 focus:ring-yellow-200
            text-black font-medium shadow-[-5px_5px_8px] shadow-black hover:shadow-lg" type="text" placeholder="Enter Phone No"/>
            </div>
            
            <div className="flex flex-col items-center">

            <p>Home Address</p>
            <input className="bg-gray-300 w-[90%] rounded-[5px] h-8 border-none px-2
            placeholder-[#023e8a] outline-gray-400 focus:ring-1 focus:ring-yellow-200
            text-black font-medium shadow-[-5px_5px_8px] shadow-black hover:shadow-lg" type="text" placeholder="Enter Home Address" required/>
            </div>
            <div className="flex flex-col items-center">

            <p>Office Address (Optional)</p>
            <input className="bg-gray-300 w-[90%] rounded-[5px] h-8 border-none px-2
            placeholder-[#023e8a] outline-gray-400 focus:ring-1 focus:ring-yellow-200
            text-black font-medium shadow-[-5px_5px_8px] shadow-black hover:shadow-lg" type="text" placeholder="Enter Office Address"/>
            </div>

        </div>


        <div className="border-2 border-gray-600 rounded-2xl space-y-5 px-5">
            <h1 className="text-center">Order Summary</h1>
            <div className="space-y-2">
                <h2>Subtotal:<span></span></h2>
                <h2>Taxes & GST: Included</h2>
                <h2>Total Amount: <span></span></h2>
            </div>
            <div className="flex flex-col justify">

                <button className="pt-8 ">Place Order</button>
            </div>
            
        </div>
      </div>
    </div>
  );
}
export default BuyPage;
