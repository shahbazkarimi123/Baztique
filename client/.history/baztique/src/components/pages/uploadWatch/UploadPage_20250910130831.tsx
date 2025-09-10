import { useState } from "react";
function UploadPage() {
  const [trend, setValue] = useState<boolean | null>(null);
  return (
    <div className="bg-yellow-600">
      <div>
        <form>
          <h1>
            Brand Name:{" "}
            <input type="text " value="" placeholder="Enter brand Name" />
          </h1>
          <h1>
            Price:{" "}
            <input type="text " value="" placeholder="Enter brand Name" />
          </h1>
          <h1>
            Discount:{" "}
            <input type="text " value="" placeholder="Enter brand Name" />
          </h1>
          <h1>
            Model number:{" "}
            <input type="text " value="" placeholder="Enter brand Name" />
          </h1>
          <select
            value={value === null ? "" : String(value)}
            onChange={(e) => setValue(e.target.value === "true")}
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
