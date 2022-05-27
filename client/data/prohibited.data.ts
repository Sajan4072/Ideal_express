export interface ProhibitedInterface {
  title: string;
  icon: string;
}

export const prohibitedData: ProhibitedInterface[] = [
  {
    title: "Corrosives",
    icon: "/icon/prohibited/corrosive.png",
  },
  {
    title: "Gases",
    icon: "/icon/prohibited/gas.png",
  },
  {
    title: "Flammable Liquids",
    icon: "/icon/prohibited/kerosene.png",
  },
  {
    title: "Oxidising Material",
    icon: "/icon/prohibited/toxic.png",
  },
  {
    title: "Organic Preoxides",
    icon: "/icon/prohibited/organic-toxic.png",
  },
  {
    title: "Toxic Substances",
    icon: "/icon/prohibited/flask.png",
  },
  {
    title: "Radioactive Materials",
    icon: "/icon/prohibited/nuclear-power.png",
  },
  {
    title: "Infectious Substances",
    icon: "/icon/prohibited/coronavirus.png",
  },
  {
    title: "Expolsives",
    icon: "/icon/prohibited/bomb.png",
  },
  {
    title: "Miscellaneous including dry ice and petrol engines",
    icon: "/icon/prohibited/garbage.png",
  },
  {
    title: "Flammable Solids",
    icon: "/icon/prohibited/flammable.png",
  },
  {
    title: "Magnetised Material",
    icon: "/icon/prohibited/magnet.png",
  },
];
