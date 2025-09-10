function BuyPage() {

  return (
    <div>
      <div className="flex col-2 justify-evenly py-10">
        <div className="flex-col  justify-center items-center space-y-3">
            <p>Phone</p>
            <input className="bg-gray-300 w-[90%] rounded-[8px]" type="text" placeholder="Enter Phone No"/>
            <p>Home Address</p>
            <input type="text" placeholder="Enter Home Address" required/>
            
            <p>Office Address (Optional)</p>
            <input type="text" placeholder="Enter Office Address"/>

        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}
export default BuyPage;
