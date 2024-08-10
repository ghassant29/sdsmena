import {
  Printer,
  PrinterTypeEnum,
  ProdcutsCategoryEnum,
  ProductCategory
} from "../../types/products";

export const featuredCategories: Array<ProductCategory> = [
  {
    id: ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
    name: "Chamber Blade End Seals",
    description:
      "Our Chamber Blade End Seals make a decisive contribution to the smooth functioning of the ink chamber With the right application, excellent sealing of the doctor blade chamber, as well as perfect doctoring, is made possible. This reduces downtime and saves time and money. For every ink system, for every chamber type.",
    image: "/products/category/chamber_blade_end_seals.jpg"
  },
  {
    id: ProdcutsCategoryEnum.DOCTOR_BLADE,
    name: "Doctor Blade",
    description:
      "A coordinated doctor blade is a <b>decisive success factor in gravure and flexographic printing</b> With our range of different doctor blades, we can help you achieve the perfect print result",
    image: "/products/category/doctor_blade.jpg"
  },
  {
    id: ProdcutsCategoryEnum.DETERGENT,
    name: "Detergent",
    description:
      "Effective anilox roller Detergent for removing stubborn dirt, ink residue and contamination",
    image: "/products/category/detergent.jpg"
  },
  {
    id: ProdcutsCategoryEnum.PLATE_MOUNTING_TAPE,
    name: "Plate Mounting Tape",
    description:
      "As a <b>3M premium partner</b>, we offer you a wide range of plate mounting tapes for flexographic printing. The plate mounting tapes are available in various hardnesses and different adhesive strengths. With our cutting system, we can produce any width you require. Our strength: express deliveries within 48 hours <b>throughout Germany!</b>",
    image: "/products/category/plate_mounting_tape.jpg"
  },
  {
    id: ProdcutsCategoryEnum.SPLICING_TAPE,
    name: "Splicing Tape",
    description:
      "For splicing film and foil webs at process speeds\n\nFor flying reel changes\n\nSplicing leaves no residue\n\nNo cleaning of fiber residues required",
    image: "/products/category/splicing_tape.jpg"
  }
];

export const printers: Array<Printer> = [
  {
    id: PrinterTypeEnum.FLEXOGRAPHY,
    name: "Flexography",
    subTitle:
      "Top quality in flexographic printing – with the right consumables!",
    description:
      "We pursue one goal: <b>To help you achieve the highest possible quality with the best possible efficiency!</b> With our wide range of products, we want to meet your individual requirements and exceed your expectations.",
    image: "/products/printers/flexography.jpeg",
    relatedCategories: [
      ProdcutsCategoryEnum.CHAMBER_BLADE_END_SEALS,
      ProdcutsCategoryEnum.DOCTOR_BLADE,
      ProdcutsCategoryEnum.PLATE_MOUNTING_TAPE,
      ProdcutsCategoryEnum.SPLICING_TAPE,
      ProdcutsCategoryEnum.DETERGENT
    ]
  },
  {
    id: PrinterTypeEnum.ROTOGRAVURE,
    name: "Rotogravure",
    subTitle: "Top quality gravure printing – with the right consumables!",
    description:
      "We pursue one goal: <b>to help you achieve the highest possible quality with the best possible efficiency!</b> With our wide range of products, we want to meet your individual requirements and exceed your expectations..",
    image: "/products/printers/rotogravure.jpeg",
    relatedCategories: [
      ProdcutsCategoryEnum.DOCTOR_BLADE,
      ProdcutsCategoryEnum.DETERGENT,
      ProdcutsCategoryEnum.SPLICING_TAPE
    ]
  }
];
