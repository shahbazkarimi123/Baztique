import { useState } from "react";
import { Listbox } from '@headlessui/react';
import type { Watch } from "../../models/Watch";
function UploadPage() {
  const trendOptions = ["true", "false"];
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
    <div >
      <div className="relative z-10 max-w-md mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-6">
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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"
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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"
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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

            name="modelNumber"
              type="text "
              value={watch.modelNumber}
              onChange={handleChange}
              placeholder="Enter model number"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Trending:
            <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
  Trending:
  <Listbox value={watch.trend ?? ""} onChange={(val) => setWatch(prev => ({ ...prev, trend: val === "true" }))}>
    <div className="relative mt-1">
      <Listbox.Button className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none">
        {watch.trend === null ? "-- Select --" : watch.trend ? "True" : "False"}
      </Listbox.Button>
      <Listbox.Options className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
        {trendOptions.map((option) => (
          <Listbox.Option
            key={option}
            value={option}
            className={({ active }) =>
              `cursor-pointer select-none px-4 py-2 text-sm ${active ? 'bg-indigo-100' : ''}`
            }
          >
            {option === "true" ? "True" : "False"}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </div>
  </Listbox>
</label>
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Collection Name:
            <input
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

              type="text "
              name="dialColor"
              value={watch.dialColor}
              onChange={handleChange}
              placeholder="Enter Dial Color"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Dial Type:
            <input className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

              type="text"
              name="dialType"
              value={watch.dialType}
              onChange={handleChange}
              placeholder="Enter Dial Type"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Case Size (MM):
            <input className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

            name="caseSizeMM"
              type="number"
              value={watch.caseSizeMM ?? ""}
              onChange={handleChange}
              placeholder="Enter Case Size MM"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Case Thickness MM:
            <input className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

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
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

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
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

              name="strapType"
              value={watch.strapType}
              onChange={handleChange}
              placeholder="Enter Strap Type"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Care Instruction:
            <input
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none"

            name="careInstruction"
              type="text "
              value={watch.careInstruction}
              onChange={handleChange}
              placeholder="Enter Care Instruction"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            First Image:
            <input 
            className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"

            type="file" name="firstImage" onChange={handleFileChange} />
          </label>
          {watch.firstImage && (
            <img className="mt-2 h-28 w-28 rounded-lg object-cover shadow-md border border-gray-200"
            src={URL.createObjectURL(watch.firstImage)} alt="preview" />
          )}

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Second Image:
            <input 
            className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"

            type="file" name="secondImage" onChange={handleFileChange} />
          </label>
          {watch.secondImage && (
            <img className="mt-2 h-28 w-28 rounded-lg object-cover shadow-md border border-gray-200"
src={URL.createObjectURL(watch.secondImage)} alt="preview" />
          )}

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Third Image:
            <input 
            className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"

            type="file" name="thirdImage" onChange={handleFileChange} />
          </label>
          {watch.thirdImage && (
            <img 
            className="mt-2 h-28 w-28 rounded-lg object-cover shadow-md border border-gray-200"

            src={URL.createObjectURL(watch.thirdImage)} alt="preview" />
          )}

          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Fourth Image:
            <input 
            className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"

            type="file" name="fourthImage" onChange={handleFileChange} />
          </label>
          {watch.fourthImage && (
            <img 
            className="mt-2 h-28 w-28 rounded-lg object-cover shadow-md border border-gray-200"

            src={URL.createObjectURL(watch.fourthImage)} alt="preview" />
          )}
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            Description:
            <textarea
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none resize-none" 
            value={watch.description} rows={6} name="description" onChange={handleChange} placeholder="Enter watch description."></textarea>
          </label>
        </form>
      </div>
    </div>
  );
}
export default UploadPage;
