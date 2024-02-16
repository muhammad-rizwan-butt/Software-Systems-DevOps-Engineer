import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import { TbBrandBooking } from "react-icons/tb";

export const menuItems = [
  { label: "hotels", Path: "/hotels" },
  { label: "flights", Path: "/flight" },
  { label: "Tours", Path: "/tour" },
  { label: "Car rental", Path: "/carrent" },
  { label: "Corporate Travel", Path: "/corporatetravel" },
  { label: "Villa's & Resort", Path: "/resort" },
];
export const mobileMenuItems = [
  { label: "hotels", Path: "/hotels" },
  { label: "flights", Path: "/flight" },
  { label: "Tours", Path: "/tour" },
  { label: "Car rental", Path: "/carrent" },
  { label: "Corporate Travel", Path: "/corporatetravel" },
  { label: "Villa's & Resort", Path: "/resort" },
  { label: "Adventures", Path: "/resort" },
  { label: "Cruise + Activities", Path: "/resort" },
  { label: "ContactUs", Path: "/contactus" },
  { label: "Offers", Path: "/contactus" },
];

const customerLink = [
  {
    path: "/",
    name: "Home",
    icon: <HiOutlineHome size="20" />,
  },
  {
    path: "/booking",
    name: "Booking",
    icon: <TbBrandBooking size="20" />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <AiOutlineUser size="20" />,
  },
];

const vendorLinks = [
  {
    path: "/",
    name: "Home",
    icon: <HiOutlineHome size="20" />,
  },
  {
    path: "/dashboard/tour",
    name: "Dashboard",
    icon: <AiOutlineDashboard size="20" />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <AiOutlineUser size="20" />,
  },
  {
    path: "/booking",
    name: "Booking",
    icon: <TbBrandBooking size="20" />,
  },
];

export const dropdownLinks = {
  customer: customerLink,
  vendor: vendorLinks,
};
