export enum ProdcutsCategoryEnum {
  CHAMBER_BLADE_END_SEALS = "chamber_blade_end_seals",
  DOCTOR_BLADE = "docotr_blade",
  DETERGENT = "detergent",
  PLATE_MOUNTING_TAPE = "plate_mounting_tape",
  SPLICING_TAPE = "splicing_tape"
}

export type FeatureProductCategory = {
  id: ProdcutsCategoryEnum;
  name: string;
  description: string;
  image: string;
};
