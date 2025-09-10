function BuyPage() {

  return (
    <div>
      <div className="flex col-2 justify-evenly py-10">
        <div>
            <p>Phone</p>
            <input type="text" placeholder=""/>
            <p>Home Address</p>
            <input type="text" placeholder="Home Address" required/>
            
            <p>Office Address (Optional)</p>
            <input type="text" placeholder="Office Address"/>

        </div>
        <div>watch summery</div>
      </div>
    </div>
  );
}
export default BuyPage;
