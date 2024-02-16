import Link from "next/link";
import React from "react";

import style from "../../styles/base/footer.module.scss";

import Image from "next/image";
import { images } from "../../lib/images";
import { MobileFooter } from "./MobileFooter";

export const Footer = () => {
  return (
    <>
      <footer className={`${style.footer} d-lg-block d-none `}>
        <div className="container">
          <div className="grid grid-cols-4 gap-5">
            <div className={style.footer_col}>
              <Link href="/home">
                <Image
                  src={images["footerLogo.png"]}
                  width={100}
                  height={100}
                  alt="syaahat footer Logo"
                  className={style.footerLogo}
                />
              </Link>

              <div>
                We are a main online travel organization in Pakistan giving a
                best as far as a class can tell with the objective to be
                Pakistan Travel Planner.
              </div>
            </div>
            <div className={style.footer_col}>
              <h4 className={style.footerHeading}>Have Any Questions?</h4>
              <div>
                +92 3111-154 -155 <br />
                info@siyaahat.pk
              </div>
              <div>
                <Image
                  src={images["credit-card-icons.png"]}
                  alt="credit cards"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className={style.footer_col}>
              <h4 className={style.footerHeading}>Information</h4>
              <div>
                <Link href={"/aboutus"}>About Us</Link>
                <Link href={"/blog"}>Blogs</Link>
                <Link href={"/our-services"}>Our Services</Link>
                <Link href={"/terms-conditions"}>Terms & Conditions</Link>
                <Link href={"/list-your-business"}>Become a Partner</Link>
                <Link href={"/aboutus"}>Best Price Guarantees</Link>
                <Link href={"/privacy"}>Privacy Policy</Link>
              </div>
            </div>
            <div className={style.footer_col}>
              <h4 className={style.footerHeading}>Customer Support</h4>
              <div>
                <Link href={"/about"}>FAQS</Link>
                <Link href={"/about"}>Payment Options</Link>
                <Link href={"/about"}>Booking Tips</Link>
                <Link href={"/about"}>How It Works</Link>
                <Link href={"/about"}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <MobileFooter />
      <section className={style.copyright}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-3">
            <p className={`m-0 semibold ${style.copyright__text}`}>
              Copyright © 2023 Siyaahat.pk
            </p>
            <div className="d-flex gap-3 ">
              <div>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  fill="#557dbc"
                >
                  <path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z"></path>
                </svg>
              </div>
              <div>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  fill="#7acdee"
                >
                  <path d="M20,3.8c-0.7,0.3-1.5,0.5-2.4,0.6c0.8-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-0.7-0.8-1.8-1.3-3-1.3c-2.3,0-4.1,1.8-4.1,4.1c0,0.3,0,0.6,0.1,0.9C6.4,6.7,3.4,5.1,1.4,2.6C1,3.2,0.8,3.9,0.8,4.7c0,1.4,0.7,2.7,1.8,3.4C2,8.1,1.4,7.9,0.8,7.6c0,0,0,0,0,0.1c0,2,1.4,3.6,3.3,4c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1c0.5,1.6,2,2.8,3.8,2.8c-1.4,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.8,6.3,1.8c7.5,0,11.7-6.3,11.7-11.7c0-0.2,0-0.4,0-0.5C18.8,5.3,19.4,4.6,20,3.8z"></path>
                </svg>
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  fill="#ed1376"
                >
                  <circle cx="10" cy="10" r="3.3"></circle>
                  <path d="M14.2,0H5.8C2.6,0,0,2.6,0,5.8v8.3C0,17.4,2.6,20,5.8,20h8.3c3.2,0,5.8-2.6,5.8-5.8V5.8C20,2.6,17.4,0,14.2,0zM10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,15,10,15z M15.8,5C15.4,5,15,4.6,15,4.2s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S16.3,5,15.8,5z"></path>
                </svg>
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  fill="#FF0000"
                >
                  <path d="M15,0H5C2.2,0,0,2.2,0,5v10c0,2.8,2.2,5,5,5h10c2.8,0,5-2.2,5-5V5C20,2.2,17.8,0,15,0z M14.5,10.9l-6.8,3.8c-0.1,0.1-0.3,0.1-0.5,0.1c-0.5,0-1-0.4-1-1l0,0V6.2c0-0.5,0.4-1,1-1c0.2,0,0.3,0,0.5,0.1l6.8,3.8c0.5,0.3,0.7,0.8,0.4,1.3C14.8,10.6,14.6,10.8,14.5,10.9z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
