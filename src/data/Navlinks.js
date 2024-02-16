import { AiFillCar } from "react-icons/ai";
import { MdOutlineTour, MdTour } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
export const sidebarLinks = [
  // {
  //   title: "Dashboard",
  //   icon: <AiOutlineDashboard size="24" />,
  //   type: "single",
  //   path: "/dashboard",
  // },
  {
    title: "Tour",
    icon: <MdOutlineTour size="24" />,
    type: "group",
    permission: "Tour",
    children: [
      {
        title: "Tour",
        path: "/dashboard/tour",
        icon: <MdOutlineTour size="24" />,
        permission: "Tour",
      },
      {
        title: "All Tour",
        path: "/dashboard/all-tour",
        icon: <MdOutlineTour size="24" />,
        permission: "Tour",
      },
    ],
  },

  {
    title: "Car Rental",
    icon: <AiFillCar size="24" />,
    type: "group",
    permission: "Car",
    children: [
      {
        title: "Car",
        path: "/dashboard/car-rental",
        icon: <AiFillCar size="24" />,
        permission: "Car",
      },
      // {
      //   title: "All Cars",
      //   path: "/dashboard/tour-booking",
      //   icon: <AiFillCar size="24" />,
      // },
    ],
  },
  {
    title: "Booking",
    icon: <TbBrandBooking size="24" />,
    type: "group",
    permission: "Tour",
    children: [
      {
        title: "Tour Booking",
        path: "/dashboard/tour-booking",
        icon: <MdTour size="24" />,
        permission: "Tour",
      },
      {
        title: "Car Booking",
        path: "/dashboard/tour-booking",
        icon: <AiFillCar size="24" />,
        permission: "Car",
      },
    ],
  },
];
