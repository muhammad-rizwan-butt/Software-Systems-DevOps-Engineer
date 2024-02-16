import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Accordion } from "react-bootstrap";
import { useSelector } from "react-redux";
import style from "../../styles/ui/sidebar.module.scss";

export const SidebarAccordian = ({ item, i, handleClose }) => {
  const { pathname } = useRouter();
  const { user } = useSelector((state) => state?.auth);
  if (user?.rights?.includes(item?.permission)) {
    return (
      <Accordion
        defaultActiveKey={["0"]}
        alwaysOpen
        key={item?.title}
        className={style.sidebar_accordian}
      >
        <Accordion.Item eventKey={i} className={style.accordian__button}>
          <Accordion.Header className={style.accordian__header}>
            {item?.icon} {item?.title}
          </Accordion.Header>
          <Accordion.Body>
            {item?.children?.map((data, i) => {
              const { icon } = data;
              if (user?.rights?.includes(data?.permission)) {
                return (
                  <li key={data?.title} className={style.accordion__list}>
                    <Link
                      href={data?.path}
                      className={`d-flex gap-2
                      ${pathname.includes(data?.path) && style.active_link}`}
                      onClick={handleClose}
                    >
                      {icon}
                      <span>{data?.title}</span>
                    </Link>
                  </li>
                );
              } else {
                return null;
              }
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  } else {
    return null;
  }
};
