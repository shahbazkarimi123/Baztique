function BuyPage() {

  return (
    <div>
      <div className="flex col-2 justify-evenly py-10">
        <div className="flex-col  justify-center items-center space-y-1">
            <p>Phone</p>
            <input type="text" placeholder="Enter Phone No"/>
            <p>Home Address</p>
            <input type="text" placeholder="Enter Home Address" required/>
            
            <p>Office Address (Optional)</p>
            <input type="text" placeholder="Enter Office Address"/>

        </div>
        <div>watch summery</div>
      </div>
    </div>
  );
}
export default BuyPage;
