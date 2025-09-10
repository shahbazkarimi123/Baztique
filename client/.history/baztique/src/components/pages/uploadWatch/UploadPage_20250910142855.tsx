import { useState } from "react";
import type {Watch} from "../../models/Watch";
function UploadPage() {
    const [watch, setWatch]=useState<Watch>({
        brandName: "",
  price: "",
  discount: "",
  modelNumber: "",
  trend: null,
  collectionName: "",
  manufacture: "",
  brandCountry: "",
  importedBy: "",
  watchGlassCrystal: "",
  warranty: null,
  waterResistance: "",
  caseMaterial: "",
  gender: "",
  caseShape: "",
  dialColor: "",
  dialType: "",
  caseSizeMM: "",
  caseThicknessMM: "",
  strapColor: "",
  strapMaterial: "",
  strapWidthMM: "",
  strapType: "",
  careInstruction: "",
  firstImage: null,
  secondImage: null,
  thirdImage: null,
  fourthImage: null,
    });
  const [trend, setTrend] = useState<boolean | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value, type, files } = e.target;
  setWatch((prev) => ({
    ...prev,
    [name]: type === "file" ? files?.[0] || null : value,
  }));
};

  return (
    <div className="">
      <div>
        <form className="flex flex-col gap-5">
          <label>
            Brand Name:
            <input type="text " value={watch.brandName} onChange={handleChange} placeholder="Enter brand Name" />
          </label>
          <label>
            Price: <input type="text " value={watch.price} onChange={handleChange} placeholder="Enter price" />
          </label>
          <label>
            Discount:{" "}
            <input type="text " value={watch.discount} onChange={handleChange} placeholder="Enter discount" />
          </label>
          <label>
            Model number:{" "}
            <input type="text " value={watch.modelNumber} onChange={handleChange} placeholder="Enter model number" />
          </label>

          <label>Trending: 
            <select
            
              value={watch.trend === null ? "" : String(watch.trend)}
              onChange={handleChange} 
            >
              <option value="">-- Select --</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </label>

          <label>
            Collection Name: <input type="text" value={watch.collectionName} onChange={handleChange} placeholder="Enter Enter Collection Name" />
          </label>
          
          <label>
            Manufacture/Exported: 
            <input type="text " value="" onChange={handleChange} placeholder="Enter " />
          </label>

          <label>
            Brand Country:
            <input type="text " value={watch.brandCountry} onChange={handleChange} placeholder="Enter Brand Country Name" />
          </label>

          <label>
            Imported By:
            <input type="text " value={watch.importedBy} onChange={handleChange} placeholder="Imported by" />
          </label>

          <label>
            Glass/Crystal:
            <input type="text " value={watch.watchGlassCrystal} onChange={handleChange} placeholder="Enter Watch Glass Crystal" />
          </label>

          <label>
            Warranty:
            <input type="number" name="warranty" value={watch.warranty??""} onChange={handleChange} placeholder="Warranty" />
          </label>

          <label>
            Water Resistance:
            <input type="text" value={watch.waterResistance} placeholder="Enter Water Resistance" />
          </label>

          <label>
            Case Material:
            <input type="text" value={watch.caseMaterial} placeholder="Enter Case Material" />
          </label>

          <label>
            Gender:
            <input type="text" value={watch.gender} placeholder="Select Gender" />
          </label>

          <label>
            Case Shape:
            <input type="text" value={watch.caseShape} placeholder="Enter Case Shape" />
          </label>

          <label>
            Dial Color:
            <input type="text " value={watch.dialColor} placeholder="Enter Dial Color" />
          </label>

          <label>
            Dial Type:
            <input type="text" value={watch.dialType} placeholder="Enter Dial Type" />
          </label>

          <label>
            Case Size (MM):
            <input type="text " value={watch.caseSizeMM} placeholder="Enter Case Size MM" />
          </label>

          <label>
            Case Thickness MM:
            <input type="text " value={watch.caseThicknessMM} placeholder="Enter Case Thickness MM" />
          </label>

          <label>
            Strap Color:
            <input type="text " value={watch.strapColor} placeholder="Enter Strap Color" />
          </label>

          <label>
            Strap Material:
            <input type="text " value={watch.strapMaterial} placeholder="Enter Strap Material" />
          </label>

          <label>
            Strap Width (MM):
            <input type="text " value={watch.strapWidthMM} placeholder="Enter Strap Width MM" />
          </label>

          <label>
            Strap Type:
            <input type="text " value={watch.strapType} placeholder="Enter Strap Type" />
          </label>

          <label>
            Care Instruction:
            <input type="text " value={watch.careInstruction} placeholder="Enter Care Instruction" />
          </label>

          <label>
            First Image:
            <input type="file" value={watch.firstImage}/>
          </label>

          <label>
            Second Image:
            <input type="file" value="secondImage" />
          </label>

          <label>
            Third Image:
            <input type="file" value="thirdImage" />
          </label>

          <label>
            Fourth Image:
            <input type="file" value="fourthImage" />
          </label>
        </form>
      </div>
    </div>
  );
}
export default UploadPage;
