import {
  HouseFill,
} from "react-bootstrap-icons";
import { MdLocalShipping, MdRemoveRedEye, MdOutlineDrafts } from "react-icons/md";
import { BsTagsFill } from "react-icons/bs";
import { FaPlus, FaUsersCog, FaUserPlus, FaUserClock } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { ImBlogger } from "react-icons/im";
import { GoGitBranch } from 'react-icons/go';
import { GrTest } from 'react-icons/gr'

export interface Sidebar {
  title: string;
  url?: string;
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
    icon: <MdLocalShipping size={20} />,
    isSubtitle: true,
    subTitle: [
      {
        title: "View",
        url: "/shipment",
        icon: <MdRemoveRedEye size={20} />,
      },
      {
        title: "Draft",
        url: "/shipment/draft",
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
    icon: <BiCategory size={20} />,
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
    icon: <ImBlogger size={20} />,
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
    title: "User Management",
    icon: <FaUsersCog size={20} />,
    isSubtitle: true,
    subTitle: [
      {
        title: "View",
        url: "/user",
        icon: <MdRemoveRedEye size={20} />,
      },
      {
        title: "Create User",
        url: "/user/create",
        icon: <FaUserPlus size={20} />,
      },
      {
        title: "Role",
        url: "/user/role",
        icon: <FaUserClock size={20} />,
      },
    ],
  },
  {
    title: "Branch",
    url: "/branch",
    icon: <GoGitBranch size={20} />,
    isSubtitle: false,
  },
  {
    title: "Test Page",
    url: "/test",
    icon: <GrTest size={20} />,
    isSubtitle: false,
  },
];
