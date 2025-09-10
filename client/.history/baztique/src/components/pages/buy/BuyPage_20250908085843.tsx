function BuyPage() {

  return (
    <div>
      <div className="flex col-2 justify-evenly py-10">
        <div classNmae>
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
