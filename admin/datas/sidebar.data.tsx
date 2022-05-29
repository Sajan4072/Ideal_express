import React, { ReactElement } from "react";
import {
  HouseFill,
  Speedometer,
  Truck,

  BookmarkPlusFill,
  MortarboardFill,
  PersonBoundingBox,
  FileEarmarkPdfFill,
} from "react-bootstrap-icons";
import { FcShipped, FcHome } from "react-icons/fc";
import { MdLocalShipping, MdRemoveRedEye } from "react-icons/md";
import { BsPlus, BsPlusSquare } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
export interface Sidebar {
  title: string;
  url: string;
  icon: React.ReactNode;
  isSubtitle: boolean;
  subTitle?: {
    title: string;
    url: string;
    icon: React.ReactNode;
  }[];
}
export const sidebarData: Sidebar[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <HouseFill size={20} />,
    isSubtitle: false,
  },
  {
    title: "Dashboard",
    url: "/shipment",
    icon: <MdLocalShipping size={20} color="black" className="text-black" />,
    isSubtitle: true,
    subTitle: [
      {
        title: "View",
        url: "/shipment",
        icon: <MdRemoveRedEye size={20} />,
      },
      {
        title: "Add",
        url: "/notes/approved",
        icon: <FaPlus size={20} />,
      },
    ],
  },
];
