export interface serviceInterface {
  theme: string;
  options: Options[];
}
export interface Options {
  title: string;
  description: string;
  icon: string;
}
export const serviceData: serviceInterface[] = [
  {
    theme: "International",
    options: [
      {
        title: "Air Freight-Export Cargo",
        description:
          "Reliable and hassle free. Broad range of delivery speeds and service options.",
        icon: "/icon/service/global-shipping.png",
      },
      {
        title: "Import Cargo & Customs",
        description:
          "Reliable and hassle free. Broad range of delivery speeds and service options.",
        icon: "/icon/service/cargo-boat.png",
      },
    ],
  },
  {
    theme: "Domestic",
    options: [
      {
        title: "E-commerce Solutions",
        description:
          "Reliable and hassle free. Broad range of delivery speeds and service options.",
        icon: "/icon/service/ecommerce.png",
      },
      {
        title: "Domestic Courier",
        description:
          "Reliable and hassle free. Broad range of delivery speeds and service options.",
        icon: "/icon/service/domestic.png",
      },
    ],
  },
];
