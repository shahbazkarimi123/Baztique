export interface Watch {
  description: string;
  brandName: string;
  price: number | null;
  discount: number | null;
  modelNumber: string;
  trend: boolean | null;
  collectionName: string;
  manufactureOrExported: string;
  brandCountry: string;
  importedBy?: string;
  watchGlassCrystal: string;
  warranty: number | null;
  waterResistance: string;
  caseMaterial: string;
  gender: string;
  caseShape: string;
  dialColor: string;
  dialType: string;
  caseSizeMM: number | null;
  caseThicknessMM: number | null;
  strapColor: string;
  
  strapMaterial: string;
  strapWidthMM: number | null;
  strapType: string;
  careInstruction?: string;
  firstImage: File | null;
  secondImage: File | null;
  thirdImage: File | null;
  fourthImage: File | null;
}
