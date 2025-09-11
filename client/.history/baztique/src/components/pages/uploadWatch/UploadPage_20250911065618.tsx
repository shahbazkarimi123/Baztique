import { useState } from "react";
import type { Watch } from "../../models/Watch";
function UploadPage() {
  const [watch, setWatch] = useState<Watch>({
    brandName: "",
    price: null,
    discount: null,
    modelNumber: "",
    trend: null,
    collectionName: "",
    manufactureOrExported: "",
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
    caseSizeMM: null,
    caseThicknessMM: null,
    strapColor: "",
    strapMaterial: "",
    strapWidthMM: null,
    strapType: "",
    careInstruction: "",
    firstImage: null,
    secondImage: null,
    thirdImage: null,
    fourthImage: null,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setWatch((prev) => ({
      ...prev,
      [name]:
        type === "number"
          ? value === "" ? null : Number(value)
          : name === "trend"
          ? value === "true"
          : value,
    }));
  };

  // handle file changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setWatch((prev) => ({
      ...prev,
      [name]: files && files[0] ? files[0] : null,
    }));
  };

  return (
    <div className="">
      <div>
        <form className="flex flex-col gap-5">
          <label>
            Brand Name:
            <input
            name="brandName"
              type="text "
              value={watch.brandName}
              onChange={handleChange}
              placeholder="Enter brand Name"
            />
          </label>
          <label>
            Price:
            <input
              name="price"
              type="number"
              value={watch.price ?? ""}
              onChange={handleChange}
              placeholder="Enter price"
            />
          </label>
          <label>
            Discount:
            <input
            name="discount"
              type="number"
              value={watch.discount ?? ""}
              onChange={handleChange}
              placeholder="Enter discount"
            />
          </label>
          <label>
            Model number:
            <input
            name="modelNumber"
              type="text "
              value={watch.modelNumber}
              onChange={handleChange}
              placeholder="Enter model number"
            />
          </label>

          <label>
            Trending:
            <select
            name="trend"
              value={watch.trend === null ? "" : String(watch.trend)}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </label>

          <label>
            Collection Name:
            <input
            name="collectionName"
              type="text"
              value={watch.collectionName}
              onChange={handleChange}
              placeholder="Enter Enter Collection Name"
            />
          </label>

          <label>
            Manufacture/Exported:
            <input
            name="manufactureOrExported"
              type="text "
              value={watch.manufactureOrExported}
              onChange={handleChange}
              placeholder="Enter "
            />
          </label>

          <label>
            Brand Country:
            <input
            name="brandCountry"
              type="text "
              value={watch.brandCountry}
              onChange={handleChange}
              placeholder="Enter Brand Country Name"
            />
          </label>

          <label>
            Imported By:
            <input
              type="text "
              name="importedBy"
              value={watch.importedBy}
              onChange={handleChange}
              placeholder="Imported by"
            />
          </label>

          <label>
            Glass/Crystal:
            <input
              type="text "
              name="waterGlassCrystal"
              value={watch.watchGlassCrystal}
              onChange={handleChange}
              placeholder="Enter Watch Glass Crystal"
            />
          </label>

          <label>
            Warranty:
            <input
              type="number"
              name="warranty"
              value={watch.warranty ?? ""}
              onChange={handleChange}
              placeholder="Warranty"
            />
          </label>

          <label>
            Water Resistance:
            <input
              type="text"
              name="waterResistance"
              value={watch.waterResistance}
              onChange={handleChange}
              placeholder="Enter Water Resistance"
            />
          </label>

          <label>
            Case Material:
            <input
              type="text"
              name="caseMaterial"
              value={watch.caseMaterial}
              onChange={handleChange}
              placeholder="Enter Case Material"
            />
          </label>

          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={watch.gender}
              onChange={handleChange}
              placeholder="Select Gender"
            />
          </label>

          <label>
            Case Shape:
            <input
              type="text"
              name="caseShape"
              value={watch.caseShape}
              onChange={handleChange}
              placeholder="Enter Case Shape"
            />
          </label>

          <label>
            Dial Color:
            <input
              type="text "
              name="dialColor"
              value={watch.dialColor}
              onChange={handleChange}
              placeholder="Enter Dial Color"
            />
          </label>

          <label>
            Dial Type:
            <input
              type="text"
              name="dialType"
              value={watch.dialType}
              onChange={handleChange}
              placeholder="Enter Dial Type"
            />
          </label>

          <label>
            Case Size (MM):
            <input
            name="caseSizeMM"
              type="number"
              value={watch.caseSizeMM ?? ""}
              onChange={handleChange}
              placeholder="Enter Case Size MM"
            />
          </label>

          <label>
            Case Thickness MM:
            <input
            name="caseThicknessMM"
              type="number"
              value={watch.caseThicknessMM ?? ""}
              onChange={handleChange}
              placeholder="Enter Case Thickness MM"
            />
          </label>

          <label>
            Strap Color:
            <input
              type="text "
              name="strapColor"
              value={watch.strapColor}
              onChange={handleChange}
              placeholder="Enter Strap Color"
            />
          </label>

          <label>
            Strap Material:
            <input
              type="text "
              name="strapMaterial"
              value={watch.strapMaterial}
              onChange={handleChange}
              placeholder="Enter Strap Material"
            />
          </label>

          <label>
            Strap Width (MM):
            <input
            name="strapWidthMM"
              type="number"
              value={watch.strapWidthMM ?? ""}
              onChange={handleChange}
              placeholder="Enter Strap Width MM"
            />
          </label>

          <label>
            Strap Type:
            <input
              type="text "
              name="strapType"
              value={watch.strapType}
              onChange={handleChange}
              placeholder="Enter Strap Type"
            />
          </label>

          <label>
            Care Instruction:
            <input
            name="careInstruction"
              type="text "
              value={watch.careInstruction}
              onChange={handleChange}
              placeholder="Enter Care Instruction"
            />
          </label>

          <label>
            First Image:
            <input type="file" name="firstImage" onChange={handleFileChange} />
          </label>
          {watch.firstImage && (
            <img src={URL.createObjectURL(watch.firstImage)} alt="preview" />
          )}

          <label>
            Second Image:
            <input type="file" name="secondImage" onChange={handleFileChange} />
          </label>
          {watch.firstImage && (
            <img src={URL.createObjectURL(watch.firstImage)} alt="preview" />
          )}

          <label>
            Third Image:
            <input type="file" name="thirdImage" onChange={handleFileChange} />
          </label>
          {watch.firstImage && (
            <img src={URL.createObjectURL(watch.firstImage)} alt="preview" />
          )}

          <label>
            Fourth Image:
            <input type="file" name="fourthImage" onChange={handleFileChange} />
          </label>
          {watch.firstImage && (
            <img src={URL.createObjectURL(watch.firstImage)} alt="preview" />
          )}
          
        </form>
      </div>
    </div>
  );
}
export default UploadPage;
