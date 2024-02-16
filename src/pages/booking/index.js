import React from "react";

// import BookNavbar from "../../components/ui/bookingNav";

import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { FaBus } from "react-icons/fa";
import { GiHiking } from "react-icons/gi";
import { MdHotel } from "react-icons/md";
import { RiFlightLandFill } from "react-icons/ri";
import { Layout } from "../../components/layout/layout";
import { TourBooking } from "../../components/ui/booking/TourBooking";
import style from "../../styles/booking/booking.module.scss";

const Booking = () => {
  return (
    <>
      <div className={style.booking___mainContainer}>
        <div className="container">
          <div className="mt-5 mb-5 gap-5 grid grid-cols-12">
            <Tab.Container
              id="left-tabs-example"
              className="grid grid-cols-12 "
              defaultActiveKey="first"
            >
              <Nav
                className={`col-span-3 col-xl-span-3 col-lg-span-3 col-md-span-12 col-sm-span-12 col-xs-span-12 flex-column ${style.nav} ${style.booking__nav}`}
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <RiFlightLandFill size={24} />
                    <span className="ms-3">Flight</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <MdHotel size={24} />
                    <span className="ms-3">Hotel</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <FaBus size={24} />
                    <span className="ms-3">Bus</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    <GiHiking size={24} />
                    <span className="ms-3">Tour</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="col-span-9 col-xl-span-9 col-lg-span-9 col-md-span-12 col-sm-span-12 col-xs-span-12 bg">
                <Tab.Pane eventKey="first">
                  <div className="d-flex align-items-center justify-content-center vh-100">
                    <h1>No Result Found</h1>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="d-flex align-items-center justify-content-center vh-100">
                    <h1>No Result Found</h1>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="d-flex align-items-center justify-content-center vh-100">
                    <h1>No Result Found</h1>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <TourBooking />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </>
  );
};
Booking.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Booking;

