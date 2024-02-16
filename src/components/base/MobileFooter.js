import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Accordion } from "react-bootstrap";
import { Information } from "../../data/footerLinks";
import { images } from "../../lib/images";
import style from "../../styles/mobileFooter.module.scss";

export const MobileFooter = () => {
  return (
    <div className={`d-lg-none d-block ${style.mobile__footer}`}>
      <div className="container">
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
            We are a main online travel organization in Pakistan giving a best
            as far as a class can tell with the objective to be Pakistan Travel
            Planner.
          </div>
        </div>
        <Accordion
          defaultActiveKey="0"
          className={`${style.sidebar_accordian} mobile__footer__accordian`}
        >
          <Accordion.Item eventKey="0" className={style.accordian__button}>
            <Accordion.Header className={style.accordian__header}>
              Have Any Questions?
            </Accordion.Header>
            <Accordion.Body>
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
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className={style.accordian__button}>
            <Accordion.Header className={style.accordian__header}>
              Information
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                {Information?.map((item, i) => (
                  <li className={style.accordion__list} key={item?.label + i}>
                    <Link href={item?.path}>{item?.label}</Link>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className={style.accordian__button}>
            <Accordion.Header lassName={style.accordian__header}>
              Customer Support
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li className={style.accordion__list}>
                  <Link href={"/about"}>FAQS</Link>
                </li>
                <li className={style.accordion__list}>
                  <Link href={"/about"}>Payment Options</Link>
                </li>
                <li className={style.accordion__list}>
                  <Link href={"/about"}>Booking Tips</Link>
                </li>
                <li className={style.accordion__list}>
                  <Link href={"/about"}>How It Works</Link>
                </li>
                <li className={style.accordion__list}>
                  <Link href={"/contactus"}>Contact Us</Link>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
