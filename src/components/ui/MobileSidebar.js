import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiMenu3Line } from "react-icons/ri";
import { mobileMenuItems } from "../../data/HeaderLinks";
import { images } from "../../lib/images";
import style from "../../styles/mobileSidebar.module.scss";

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow_hidden");
    } else {
      document.body.classList.remove("overflow_hidden");
    }
  }, [isOpen]);
  return (
    <div className={`${style.mobile__sidebar__container} d-lg-none d-block`}>
      <button onClick={() => setIsOpen(true)}>
        <RiMenu3Line fontSize={18} />
      </button>
      <div className={`${style.mobile__sidebar} ${isOpen ? style.active : ""}`}>
        <div
          className={style.sidebar__overlay}
          onClick={() => setIsOpen(false)}
        ></div>
        <div className={` py-3 px-2 ${style.mobile__sidebar__inner}`}>
          <button className="px-3" onClick={() => setIsOpen(false)}>
            <GrClose size={20} />
          </button>
          <div className="py-4">
            <Link href="/">
              <Image
                src={images["SiyaahatLogo.png"]}
                width={150}
                height={200}
                alt="siyaahat"
              />
            </Link>
          </div>
          <ul className={style.sidebar__links}>
            {mobileMenuItems?.map((link, i) => {
              return (
                <li
                  className={style.sidebarLink}
                  key={link?.Path + i}
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={link?.Path} className="text-capitalize">
                    {link?.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mx-2" onClick={() => setIsOpen(false)}>
            <Link
              href="/login"
              className="btn btn-primary hover-box-shadow w-100 "
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
