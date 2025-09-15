import {saveWatch} from "../../../services/WatchSave";


function UploadPage() {
  const trendOptions = ["true", "false"];
  const [watch, setWatch] = useState<Watch>({
    id:null,
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

  function handleSubmit() {
    const response = saveWatch(watch);
    console.log(response);

  }