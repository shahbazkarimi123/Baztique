import axios from "axios";
import type { Watch } from "../components/models/Watch";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const saveWatch = async (watch: Watch) => {
  try {
    const formData = new FormData();
    formData.append("brandName", watch.brandName);
    formData.append("price", watch.price?.toString() ?? "");
    formData.append("discount", watch.discount?.toString() ?? "");
    formData.append("modelNumber", watch.modelNumber);
    formData.append("trend", watch.trend?.toString() ?? "");
    formData.append("collectionName", watch.collectionName);
    formData.append("manufactureOrExported", watch.manufactureOrExported);
    formData.append("brandCountry", watch.brandCountry);
    formData.append("importedBy", watch.importedBy ?? "");
    formData.append("watchGlassOrCrystal", watch.watchGlassOrCrystal);
    formData.append("warranty", watch.warranty?.toString() ?? "");
    formData.append("waterResistance", watch.waterResistance);
    formData.append("caseMaterial", watch.caseMaterial);
    formData.append("gender", watch.gender);
    formData.append("caseShape", watch.caseShape);
    formData.append("dialColor", watch.dialColor);
    formData.append("dialType", watch.dialType);
    formData.append("caseSizeMM", watch.caseSizeMM?.toString() ?? "");
    formData.append("caseThicknessMM", watch.caseThicknessMM?.toString() ?? "");
    formData.append("strapColor", watch.strapColor);
    formData.append("strapMaterial", watch.strapMaterial);
    formData.append("strapWidthMM", watch.strapWidthMM?.toString() ?? "");
    formData.append("strapType", watch.strapType);
    formData.append("careInstruction", watch.careInstruction ?? "");
    formData.append("description", watch.description);

    if (watch.firstImage) formData.append("firstImage", watch.firstImage);
    if (watch.secondImage) formData.append("secondImage", watch.secondImage);
    if (watch.thirdImage) formData.append("thirdImage", watch.thirdImage);
    if (watch.fourthImage) formData.append("fourthImage", watch.fourthImage);
    const response = await axios.post(
      `${API_BASE_URL}/watches/upload`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        auth: { username: "karimi", password: "12345" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to save watch", error);
  }
};

