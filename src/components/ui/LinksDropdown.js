import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Axios, baseURL } from "../../axios/axios";
import { dropdownLinks } from "../../data/HeaderLinks";
import { logOut } from "../../store/reducers/auth";
import style from "../../styles/linkstyle.module.scss";

export const LinksDropdown = () => {
  const { token, user } = useSelector((state) => state?.auth);
  const dropdownPath = dropdownLinks[user?.role];
  const dispatch = useDispatch();
  const router = useRouter();

  function handleLogout() {
    Axios.get("user/logout", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch(logOut());
        router.replace("/");
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className={`ml-auto ${style.menubar__container}`}>
      <Dropdown className={style.menubar_dropdown} align="end">
        <Dropdown.Toggle
          id="dropdown-basic"
          className={style.menubar_dropdown_toggle}
        >
          {user?.profileImage ? (
            <Image
              src={baseURL + user?.profileImage}
              alt={user?.name}
              className={`rounded-circle ${style.profileImage}`}
              width={30}
              height={30}
            />
          ) : (
            <RxAvatar size="24" color="green" />
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu className={style.dropdown__menu}>
          <Dropdown.Item>
            <div className={`position-relative ${style.user__info}`}>
              <div className={`position-absolute ${style.image__box}`}>
                {user?.profileImage ? (
                  <Image
                    src={baseURL + user?.profileImage}
                    alt={user?.name}
                    className={`rounded-circle ${style.profileImage}`}
                    width={30}
                    height={30}
                  />
                ) : (
                  <RxAvatar size="30" color="green" />
                )}
              </div>
              {user?.name}{" "}
              <span className="text-capitalize">({user?.role})</span>
            </div>
          </Dropdown.Item>

          {dropdownPath?.map((item, i) => {
            return (
              <Dropdown.Item
                className={style.dropdown__menu_item}
                key={i + item?.name}
              >
                <Link
                  href={item?.path}
                  className="d-flex align-items-center gap-2"
                >
                  {item?.icon} <span>{item?.name}</span>
                </Link>
              </Dropdown.Item>
            );
          })}
          {user?.role == "customer" && (
            <Dropdown.Item className={style.dropdown__menu_item}>
              <Link
                href="/becomeavendor"
                className="d-flex align-items-center gap-2"
              >
                <MdOutlineVerifiedUser size="20" />
                <span>Become a Vendor</span>
              </Link>
            </Dropdown.Item>
          )}
          <Dropdown.Item className={style.dropdown__menu_item}>
            {" "}
            <button
              className="d-flex align-items-center gap-2"
              onClick={handleLogout}
            >
              <AiOutlineLogout size="20" /> <span>Logout</span>
            </button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
