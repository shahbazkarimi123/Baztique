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
    description: "",
    firstImage: null,
    secondImage: null,
    thirdImage: null,
    fourthImage: null,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
      <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-6">
        <form className="flex flex-col gap-5">
          
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Brand Name:
            <input
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"


            name="brandName"
              type="text "
              value={watch.brandName}
              onChange={handleChange}
              placeholder="Enter brand Name"
            />
          </label>


          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Price:
            <input
              name="price"
              type="number"
              value={watch.price ?? ""}
              onChange={handleChange}
              placeholder="Enter price"
            />
          </label>


          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Discount:
            <input
            name="discount"
              type="number"
              value={watch.discount ?? ""}
              onChange={handleChange}
              placeholder="Enter discount"
            />
          </label>


          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Model number:
            <input
            name="modelNumber"
              type="text "
              value={watch.modelNumber}
              onChange={handleChange}
              placeholder="Enter model number"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
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

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Collection Name:
            <input
            name="collectionName"
              type="text"
              value={watch.collectionName}
              onChange={handleChange}
              placeholder="Enter Enter Collection Name"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Manufacture/Exported:
            <input
            name="manufactureOrExported"
              type="text "
              value={watch.manufactureOrExported}
              onChange={handleChange}
              placeholder="Enter "
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Brand Country:
            <input
            name="brandCountry"
              type="text "
              value={watch.brandCountry}
              onChange={handleChange}
              placeholder="Enter Brand Country Name"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Imported By:
            <input
              type="text "
              name="importedBy"
              value={watch.importedBy}
              onChange={handleChange}
              placeholder="Imported by"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Glass/Crystal:
            <input
              type="text "
              name="waterGlassCrystal"
              value={watch.watchGlassCrystal}
              onChange={handleChange}
              placeholder="Enter Watch Glass Crystal"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Warranty:
            <input
              type="number"
              name="warranty"
              value={watch.warranty ?? ""}
              onChange={handleChange}
              placeholder="Warranty"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Water Resistance:
            <input
              type="text"
              name="waterResistance"
              value={watch.waterResistance}
              onChange={handleChange}
              placeholder="Enter Water Resistance"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Case Material:
            <input
              type="text"
              name="caseMaterial"
              value={watch.caseMaterial}
              onChange={handleChange}
              placeholder="Enter Case Material"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Gender:
            <input
              type="text"
              name="gender"
              value={watch.gender}
              onChange={handleChange}
              placeholder="Select Gender"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Case Shape:
            <input
              type="text"
              name="caseShape"
              value={watch.caseShape}
              onChange={handleChange}
              placeholder="Enter Case Shape"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Dial Color:
            <input
              type="text "
              name="dialColor"
              value={watch.dialColor}
              onChange={handleChange}
              placeholder="Enter Dial Color"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Dial Type:
            <input
              type="text"
              name="dialType"
              value={watch.dialType}
              onChange={handleChange}
              placeholder="Enter Dial Type"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Case Size (MM):
            <input
            name="caseSizeMM"
              type="number"
              value={watch.caseSizeMM ?? ""}
              onChange={handleChange}
              placeholder="Enter Case Size MM"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Case Thickness MM:
            <input
            name="caseThicknessMM"
              type="number"
              value={watch.caseThicknessMM ?? ""}
              onChange={handleChange}
              placeholder="Enter Case Thickness MM"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Strap Color:
            <input
              type="text "
              name="strapColor"
              value={watch.strapColor}
              onChange={handleChange}
              placeholder="Enter Strap Color"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Strap Material:
            <input
              type="text "
              name="strapMaterial"
              value={watch.strapMaterial}
              onChange={handleChange}
              placeholder="Enter Strap Material"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Strap Width (MM):
            <input
            name="strapWidthMM"
              type="number"
              value={watch.strapWidthMM ?? ""}
              onChange={handleChange}
              placeholder="Enter Strap Width MM"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Strap Type:
            <input
              type="text "
              name="strapType"
              value={watch.strapType}
              onChange={handleChange}
              placeholder="Enter Strap Type"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Care Instruction:
            <input
            name="careInstruction"
              type="text "
              value={watch.careInstruction}
              onChange={handleChange}
              placeholder="Enter Care Instruction"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            First Image:
            <input type="file" name="firstImage" onChange={handleFileChange} />
          </label>
          {watch.firstImage && (
            <img src={URL.createObjectURL(watch.firstImage)} alt="preview" />
          )}

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Second Image:
            <input type="file" name="secondImage" onChange={handleFileChange} />
          </label>
          {watch.firstImage && (
            <img src={URL.createObjectURL(watch.firstImage)} alt="preview" />
          )}

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Third Image:
            <input type="file" name="thirdImage" onChange={handleFileChange} />
          </label>
          {watch.firstImage && (
            <img src={URL.createObjectURL(watch.firstImage)} alt="preview" />
          )}

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Fourth Image:
            <input type="file" name="fourthImage" onChange={handleFileChange} />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Description:
            <textarea value={watch.description} rows={6} name="description" onChange={handleChange} placeholder="Enter watch description."></textarea>
          </label>
        </form>
      </div>
    </div>
  );
}
export default UploadPage;
