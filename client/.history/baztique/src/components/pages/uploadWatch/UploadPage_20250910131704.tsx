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
          </label>
          <h1>
            Price:{" "}
            <input type="text " value="" placeholder="Enter price" />
          </h1>
          <h1>
            Discount:{" "}
            <input type="text " value="" placeholder="Enter discount" />
          </h1>
          <h1>
            Model number:{" "}
            <input type="text " value="" placeholder="Enter model number" />
          </h1>

          <select
            value={trend === null ? "" : String(trend)}
            onChange={(e) => setTrend(e.target.value === "true")}
          >
            <option value="">-- Select --</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          
          <h1>
            : <input type="text " value="" placeholder="Enter brand Name" />
          </h1>
          <h1>
            Brand Name:{" "}
            <input type="text " value="" placeholder="Enter brand Name" />
          </h1>
          <h1>
            Brand Name:{" "}
            <input type="text " value="" placeholder="Enter brand Name" />
          </h1>
        </form>
      </div>
    </div>
  );
}
export default UploadPage;
