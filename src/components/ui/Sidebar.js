import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { sidebarLinks } from "../../data/Navlinks";
import { images } from "../../lib/images";
import style from "../../styles/ui/sidebar.module.scss";
import { SidebarAccordian } from "./SidebarAccordian";

const Sidebar = ({ show, handleClose, className, ...props }) => {
  const SidebarLinks = sidebarLinks?.map((item, i) => {
    switch (item?.type) {
      case "group":
        return (
          <SidebarAccordian item={item} key={i} handleClose={handleClose} />
        );
      case "single":
        return (
          <li key={item?.title} className={style.single_accordion__list}>
            <Link
              href={item?.path}
              className={`d-flex align-items-center gap-2 ${style.single_link} `}
              onClick={handleClose}
            >
              {/* // ${pathname.includes(item?.path) && style.active_link} */}

              {item?.icon}
              <span>{item?.title}</span>
            </Link>
          </li>
        );
      default:
        break;
    }
  });

  useEffect(() => {
    if (show && window.innerHeight < 990) {
      document.body.classList.add("overflow_hidden");
    } else {
      document.body.classList.remove("overflow_hidden");
    }
  }, [show]);
  return (
    <div
      className={`${style.sidebar__main} ${
        show ? style.sidebar__container : style.sidebar__mainbox
      }  sidebar__container`}
    >
      <div className={style.overlay__sidebar} onClick={handleClose}></div>

      <div className={style.sidebar__inner}>
        <button
          className="d-lg-none d-block py-3 pe-4 ms-auto"
          onClick={handleClose}
        >
          <GrClose color="gray" fontSize={22} />
        </button>
        <div className="py-3">
          <Image src={images["SiyaahatLogo.png"]} alt="" />
        </div>
        <ul className={`px-2 py-3 ${style.list__box}`}>{SidebarLinks}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
