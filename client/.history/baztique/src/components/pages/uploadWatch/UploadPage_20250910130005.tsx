
function UploadPage(){
    const [value, setValue] = useState(false);
    return (
        <div className="bg-yellow-600">
            <div>
                <form>
                    <h1>
                        Brand Name: <input type="text " value="" placeholder="Enter brand Name"/>
                    </h1>
                    <h1>
                        Price: <input type="text " value="" placeholder="Enter brand Name"/>
                    </h1>
                    <h1>
                        Discount: <input type="text " value="" placeholder="Enter brand Name"/>
                    </h1>
                    <h1>
                        Model number: <input type="text " value="" placeholder="Enter brand Name"/>
                    </h1>
                    <input type="checkbox" onChange={(e)=>{


                    }} value="true"/>
                    <h1>
                        : <input type="text " value="" placeholder="Enter brand Name"/>
                    </h1>
                    <h1>
                        Brand Name: <input type="text " value="" placeholder="Enter brand Name"/>
                    </h1>
                    <h1>
                        Brand Name: <input type="text " value="" placeholder="Enter brand Name"/>
                    </h1>
                </form>
            </div>
            
        </div>
    );
}
export default UploadPage;