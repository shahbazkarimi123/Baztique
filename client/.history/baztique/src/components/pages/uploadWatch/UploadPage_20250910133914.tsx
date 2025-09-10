import { useState } from "react";
function UploadPage() {
  const [trend, setTrend] = useState<boolean | null>(null);
  return (
    <div className="">
      <div>
        <form className="flex flex-col gap-5">
          <label>
            Brand Name:{" "}
            <input type="text " value="brandName" placeholder="Enter brand Name" />
          </label>
          <label>
            Price: <input type="text " value="price" placeholder="Enter price" />
          </label>
          <label>
            Discount:{" "}
            <input type="text " value="discount" placeholder="Enter discount" />
          </label>
          <label>
            Model number:{" "}
            <input type="text " value="modelNumber" placeholder="Enter model number" />
          </label>

          <label>Trending: 
            <select
              value={trend === null ? "" : String(trend)}
              onChange={(e) => setTrend(e.target.value === "true")}
            >
              <option value="">-- Select --</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </label>

          <label>
            Collection Name: <input type="text " value="collectionName" placeholder="Enter Enter Collection Name" />
          </label>
          
          <label>
            Manufacture/Exported: 
            <input type="text " value="" placeholder="Enter " />
          </label>

          <label>
            Brand Country:
            <input type="text " value="brandCountry" placeholder="Enter Brand Country Name" />
          </label>

          <label>
            Imported By:
            <input type="text " value="importedBy" placeholder="Imported by" />
          </label>

          <label>
            Glass/Crystal:
            <input type="text " value="watchGlassCrystal" placeholder="Enter Watch Glass Crystal" />
          </label>

          <label>
            Warranty:
            <input type="number" value="warranty" placeholder="Warranty" />
          </label>

          <label>
            Water Resistance:
            <input type="text" value="waterResistance" placeholder="Enter Water Resistance" />
          </label>

          <label>
            Case Material:
            <input type="text" value="caseMaterial" placeholder="Enter Case Material" />
          </label>

          <label>
            Gender:
            <input type="text" value="gender" placeholder="Select Gender" />
          </label>

          <label>
            Case Shape:
            <input type="text" value="caseShape" placeholder="Enter Case Shape" />
          </label>

          <label>
            Brand Country:
            <input type="text " value="" placeholder="Enter dial Color" />
          </label>

          <label>
            Brand Country:
            <input type="text " value="" placeholder="Enter Brand Country Name" />
          </label>

          <label>
            Brand Country:
            <input type="text " value="" placeholder="Enter Brand Country Name" />
          </label>

          <label>
            Brand Country:
            <input type="text " value="" placeholder="Enter Brand Country Name" />
          </label>

          <label>
            Brand Country:
            <input type="text " value="" placeholder="Enter Brand Country Name" />
          </label>

          <label>
            Brand Country:
            <input type="text " value="" placeholder="Enter Brand Country Name" />
          </label>

          <label>
            Brand Country:
            <input type="text " value="" placeholder="Enter Brand Country Name" />
          </label>
        </form>
      </div>
    </div>
  );
}
export default UploadPage;
