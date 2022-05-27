interface MenuInterface {
  name: string;
  url: string;
}

const data: MenuInterface[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Service",
    url: "/service",
  },
  {
    name: "Contactus",
    url: "/contactus",
  },
  {
    name: "Aboutus",
    url: "/aboutus",
  },
  {
    name: "Network",
    url: "/network",
  },
  {
    name: "Gallery",
    url: "/gallery",
  },
  {
    name: "Branches",
    url: "/gallery",
  },
  {
    name: "Support",
    url: "/gallery",
  },
];

export { data as MenuData };
