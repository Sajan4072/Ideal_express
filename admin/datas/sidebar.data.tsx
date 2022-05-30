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
import { MdLocalShipping, MdRemoveRedEye, MdOutlineDrafts } from "react-icons/md";
import { BsPlus, BsPlusSquare, BsTagsFill } from "react-icons/bs";
import { FaPlus, FaUserCircle, FaUsersCog, FaUserPlus, FaUserClock } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { ImBlogger } from "react-icons/im";

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
    title: "Shipment",
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
        title: "Draft",
        url: "/shipment",
        icon: <MdOutlineDrafts size={20} />,
      },
      {
        title: "Create",
        url: "/shipment/create",
        icon: <FaPlus size={20} />,
      },
    ],
  },
  {
    title: "Category",
    url: "/category",
    icon: <BiCategory size={20} color="black" className="text-black" />,
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
  {
    title: "Post",
    url: "/category",
    icon: <ImBlogger size={20} color="black" className="text-black" />,
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
  {
    title: "Tag",
    url: "/dashboard",
    icon: <BsTagsFill size={20} />,
    isSubtitle: false,
  },
  {
    title: "Profile",
    url: "/dashboard",
    icon: <FaUserCircle size={20} />,
    isSubtitle: false,
  },
  {
    title: "User Management",
    url: "/shipment",
    icon: <FaUsersCog size={20} color="black" className="text-black" />,
    isSubtitle: true,
    subTitle: [
      {
        title: "View",
        url: "/shipment",
        icon: <MdRemoveRedEye size={20} />,
      },
      {
        title: "Create User",
        url: "/shipment",
        icon: <FaUserPlus size={20} />,
      },
      {
        title: "Role",
        url: "/shipment/create",
        icon: <FaUserClock size={20} />,
      },
    ],
  },
];
