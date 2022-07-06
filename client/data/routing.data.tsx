import { AiOutlineHome } from 'react-icons/ai'
import { RiCustomerService2Fill, RiUserLocationLine } from 'react-icons/ri'
import { AiOutlinePhone } from 'react-icons/ai'
import { MdPhotoLibrary, MdOutlineHomeWork } from 'react-icons/md'
import { FaGlobeAfrica } from 'react-icons/fa'
import { BiHome } from 'react-icons/bi'
interface MenuInterface {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const data: MenuInterface[] = [
  {
    name: "Home",
    url: "/",
    icon: <BiHome />
  },
  {
    name: "Service",
    url: "/service",
    icon: <RiCustomerService2Fill />
  },
  {
    name: "Contactus",
    url: "/contactus",
    icon: <AiOutlinePhone />
  },
  {
    name: "Aboutus",
    url: "/aboutus",
    icon: <RiUserLocationLine />
  },
  {
    name: "Network",
    url: "/network",
    icon: <FaGlobeAfrica />
  },
  {
    name: "Gallery",
    url: "/gallery",
    icon: <MdPhotoLibrary />
  },


];

export { data as menuData };
