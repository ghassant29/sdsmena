export enum ProdcutsCategoryEnum {
  CHAMBER_BLADE_END_SEALS = "chamber_blade_end_seals",
  DOCTOR_BLADE = "docotr_blade",
  DETERGENT = "detergent",
  PLATE_MOUNTING_TAPE = "plate_mounting_tape",
  SPLICING_TAPE = "splicing_tape"
}

export enum PrinterTypeEnum {
  FLEXOGRAPHY = "flexography",
  ROTOGRAVURE = "rotogravure"
}

export type ProductCategory = {
  id: ProdcutsCategoryEnum;
  name: string;
  description: string;
  image: string;
};

export type Printer = {
  id: PrinterTypeEnum;
  name: string;
  subTitle: string;
  description: string;
  image: string;
  relatedCategories: ProdcutsCategoryEnum[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  category: ProdcutsCategoryEnum;
  printerType: PrinterTypeEnum;
  image: string;
  relatedKeywords?: string[];
};
