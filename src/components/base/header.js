import Image from "next/image";
import Link from "next/link";
import React from "react";
import { images } from "../../lib/images";

import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { menuItems } from "../../data/HeaderLinks";
import style from "../../styles/base/header.module.scss";
import { LinksDropdown } from "../ui/LinksDropdown";
import { MobileSidebar } from "../ui/MobileSidebar";
import { NavLink } from "../ui/NavLink/NavLink";

export const Header = () => {
  const { token, user } = useSelector((state) => state?.auth);

  return (
    <header
      className={`w-100 py-lg-0 py-3  bg-white box-shadow sticky-top ${style.header__maincontainer}`}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link href="/">
              <Image
                src={images["SiyaahatLogo.png"]}
                width={60}
                height={40}
                alt="siyaahat"
              />
            </Link>
          </div>
          <div className="d-lg-flex d-none gap-3 uppercase font-heading semibold">
            {menuItems.map((i) => (
              <NavLink key={i.label} href={i.Path} className="menuItem">
                {i.label}
              </NavLink>
            ))}
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="More +"
              menuVariant="light"
              className={style.nav__dropdown}
            >
              <NavDropdown.Item
                href="/contactus"
                className={style.dropdown__item}
              >
                Adventures
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="/contactus"
                className={style.dropdown__item}
              >
                Cruise + Activities
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="/contactus"
                className={style.dropdown__item}
              >
                Offers
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="/contactus"
                className={style.dropdown__item}
              >
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </div>

          <div className="d-flex align-items-center gap-2">
            {token ? (
              <LinksDropdown />
            ) : (
              <Link
                href="/login"
                className="btn btn-primary hover-box-shadow d-lg-block d-none"
              >
                Sign In
              </Link>
            )}
            <MobileSidebar />
          </div>
        </div>
      </div>
    </header>
  );
};
