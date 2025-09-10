import { useState } from "react";
function UploadPage() {
  const [trend, setTrend] = useState<boolean | null>(null);
  return (
    <div className="">
      <div>
        <form className="flex flex-col gap-5">
          <h1>
            Brand Name:{" "}
            <input type="text " value="" placeholder="Enter brand Name" />
          </h1>
          <label>
            Price:{" "}
            <input type="text " value="" placeholder="Enter price" />
          </label>
          <label>
            Discount:{" "}
            <input type="text " value="" placeholder="Enter discount" />
          </label>
          <label>
            Model number:{" "}
            <input type="text " value="" placeholder="Enter model number" />
          </label>

          <select
            value={trend === null ? "" : String(trend)}
            onChange={(e) => setTrend(e.target.value === "true")}
          >
            <option value="">-- Select --</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          
          <label>
            : <input type="text " value="" placeholder="Enter brand Name" />
          </label>
          <label>
            Brand Name:{" "}
            <input type="text " value="" placeholder="Enter brand Name" />
          </label>
          <label>
            Brand Name:{" "}
            <input type="text " value="" placeholder="Enter brand Name" />
          </label>
        </form>
      </div>
    </div>
  );
}
export default UploadPage;
