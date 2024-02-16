import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Accordion } from "react-bootstrap";
import { FaTelegramPlane } from "react-icons/fa";
import { Layout } from "../../components/layout/layout";
import { Signup } from "../../components/ui/Signup";
import { images } from "../../lib/images";
import style from "../../styles/list-your-business.module.scss";

const Index = () => {
  return (
    <div className={style.main__container}>
      <section className={style.banner__seciton}>
        <div className="container">
          <h1 className={`text-white ${style.banner__heading}`}>
            BECOME A VENDOR AT SIYAAHAT
          </h1>
          <p className={`text-white pb-5`}>
            Get yourself registered as a vendor with Siyaahat. pk and boost your
            Traveling, Hoteling & Tourism business – get started today
          </p>
          <Link href="/register" className={style.banner__link}>
            Become a Vendor
          </Link>
        </div>
      </section>
      <section className={style.weOffer__container}>
        <div className={style.weOffer__overlay}></div>
        <div className={style.weOffer__innercontainer}>
          <div className="text-center">
            <h2 className={`text-center fw-bold mb-3 ${style.offer_heading}`}>
              What We Offer
            </h2>
            <p className={`${style.offer__text} text-center`}>
              We offer our partners to list their businesses and get an instant
              boost. Start welcoming guests today.
            </p>
          </div>
          <div className="grid grid-cols-xl-2 grid-cols-lg-2 grid-cols-md-1 grid-cols-sm-1 gap-3 mt-5">
            <div className={style.about__us}>
              <h4 className={`${style.about__us__heading} fw-bold`}>
                About Us
              </h4>
              <p className={style.about__us__text}>
                Siyaahat.pk is Pakistan No 1 Travel Portal. We are a main online
                travel organization in Pakistan giving a ‘best as far as a class
                can tell with the objective to be Pakistan Travel Planner.
              </p>
              <p className={style.about__us__text}>
                Through our site, www.siyaahat.pk, our versatile applications,
                and our other related stages, recreation, and business voyagers
                can investigate, explore, analyze costs and book an extensive
                variety of administrations taking into account their movement
                needs.
              </p>
              <p className={style.about__us__text}>
                Since our origin in 2017, in excess of 7 million clients have
                utilized at least one of our exhaustive travel-related
                administrations, which incorporate local and global air
                ticketing, lodging appointments, homestays, occasion bundles,
                transport ticketing, rail ticketing, exercises, and subordinate
                administrations. Some of the major highlights of Siyaahat.pk are
                below
              </p>
              <ul className={style.aboutus__list}>
                <li className={style.aboutus__list__item}>Airline Tickets</li>
                <li className={style.aboutus__list__item}>Hotels Booking</li>
                <li className={style.aboutus__list__item}>Car Rental</li>
                <li className={style.aboutus__list__item}>Holiday Packages</li>
              </ul>
            </div>
            <div className={`${style.about_us__image} text-center`}>
              <Image src={images["About-us-2.png"]} alt="about-us" />
            </div>
          </div>
        </div>
      </section>
      <section className={style.benefits__container}>
        <div className={style.innerContainer}>
          <div className={`${style.benifitsText__innercontainer} text-center`}>
            <h3 className={`fw-bold ${style.heading}`}>
              Benefits Of Working With Us
            </h3>
            <p className={`fw-light  ${style.text}`}>
              Our first priority is keeping you stress-free by Communicating
              with your guests and keeping your property safe, no matter where
              you are.
            </p>
          </div>
          <div className={`${style.benefits__card__box} mt-5`}>
            <div className="grid grid-cols-xl-3 grid-cols-lg-2 grid-cols-md-2   gap-3">
              <div className={`${style.benefits__card} text-center`}>
                <Image
                  src={images["Property.png"]}
                  alt="property"
                  className={style.card__img}
                  width={150}
                  height={150}
                />
                <div className={`${style.card__content} mt-5 text-center`}>
                  <h3 className={`${style.card__heading} fw-bold mb-2`}>
                    {" "}
                    List Your Business
                  </h3>
                  <p className={`${style.text} fw-light`}>
                    You may list anything for free, including houses, villas,
                    taxis, tours, and everything in between.
                  </p>
                </div>
              </div>
              <div className={`${style.benefits__card} text-center`}>
                <Image
                  src={images["Instructions.png"]}
                  alt="property"
                  className={style.card__img}
                  width={150}
                  height={150}
                />
                <div className={`${style.card__content} mt-5 text-center`}>
                  <h3 className={`${style.card__heading} fw-bold mb-2`}>
                    {" "}
                    Detailed instructions
                  </h3>
                  <p className={`${style.text} fw-light`}>
                    You will get knowledge about the operation of our platform,
                    recommended procedures, and potential pitfalls.
                  </p>
                </div>
              </div>
              <div className={`${style.benefits__card} text-center`}>
                <Image
                  src={images["Discounts.png"]}
                  alt="property"
                  className={style.card__img}
                  width={150}
                  height={150}
                />
                <div className={`${style.card__content} mt-5 text-center`}>
                  <h3 className={`${style.card__heading} fw-bold mb-2`}>
                    {" "}
                    Exclusive discounts
                  </h3>
                  <p className={`${style.text} fw-light`}>
                    Discounts on services that help customers save time and have
                    a better overall experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.faqs__container}`}>
        <div className={style.inner__container}>
          <div className="grid grid-cols-xl-2 grid-cols-lg-2 gap-4">
            <div className="py-5 text-center">
              <h4 className={`mb-5`}>
                If you are having trouble while listing your business or facing
                any issues in registering you can contact our support team, and
                we will get back to you ASAP.
              </h4>
              <p className="pb-4">
                You can get answers to some major queries here in the FAQ
                column. If anything you need to suggest or ask you can contact
                us.
              </p>
              <Link href="/contactus" className={style.contact__link}>
                Contact US
              </Link>
            </div>
            <div className={style.accordion__container}>
              <Accordion defaultActiveKey="0" className={style.accordion__box}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className={style.accordion__header}>
                    What happens when I register?
                  </Accordion.Header>
                  <Accordion.Body className="fw-light">
                    <ul>
                      <li>
                        After creating an account, you can create listings.
                      </li>
                      <li>
                        {" "}
                        You can verify that your ad is accurate and edit your
                        calendar and rates.{" "}
                      </li>
                      <li>
                        You may open your business for reservations when you’re
                        ready (in some cases, we’ll need to confirm your
                        location before you can start receiving visitors).
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className={style.accordion__header}>
                    When will my business is live for booking?
                  </Accordion.Header>
                  <Accordion.Body className="fw-light">
                    You can make your property available for reservations on our
                    site once you’ve done establishing your listing. Before you
                    may begin accepting reservations, we could require you to
                    validate your property. During this time, you can learn how
                    to utilise our extranet and get ready for your first
                    visitors.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className={style.accordion__header}>
                    Which types of pictures should I upload?
                  </Accordion.Header>
                  <Accordion.Body className="fw-light">
                    We ask you to upload images of your space when you sign up.
                    This is because we are aware that when seeking for a place
                    to stay, our guests enjoy looking through images. You should
                    post pictures of your property’s inside and exterior, as
                    advised. Photos taken with a smartphone will still offer
                    your visitors a positive impression of the room; they don’t
                    even need to be professional shots.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className={style.accordion__header}>
                    Do I have to confirm every reservation for hotels?
                  </Accordion.Header>
                  <Accordion.Body className="fw-light">
                    None of your reservations require confirmation from you. A
                    customer’s online reservation for a stay at your property is
                    quickly confirmed. You can enjoy the convenience of not
                    having to look over every request from customers.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className={style.accordion__header}>
                    Do I have to confirm every reservation for cabs?
                  </Accordion.Header>
                  <Accordion.Body className="fw-light">
                    Yes, you must confirm your cab reservation. A customer’s
                    online cab reservation will be promptly forwarded to you
                    through email or app notification. After confirming the
                    customer, you can either arrange a similar vehicle or verify
                    the availability of the same vehicle.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header className={style.accordion__header}>
                    What occurs if a visitor cancels?
                  </Accordion.Header>
                  <Accordion.Body className="fw-light">
                    When a visitor cancels a reservation, one of two things
                    might occur. If your property offers a no-fee cancellation
                    policy, the guest doesn’t pay anything, and you don’t
                    receive commission. If your business doesn’t offer free
                    cancellations, the guest will pay a fee, and you will
                    receive commission on the sum they pay you.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header className={style.accordion__header}>
                    What will be the action if a visitor harms my property?
                  </Accordion.Header>
                  <Accordion.Body className="fw-light">
                    Visitors may be asked to leave a damage deposit by property
                    owners. Deposits can be used to cover any potential harm
                    that a visitor might do while also guaranteeing that your
                    property will be treated with care. If something goes wrong,
                    you can let our team know by using our misconduct reporting
                    function.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className={style.getStarted__container}>
        <div className={style.inner__container}>
          <div
            className={`grid grid-cols-xl-2 grid-cols-lg-2 grid-cols-md-2 grid-cols-sm-1 text-white ${style.getStarted_text__box}`}
          >
            <div className={style.text__box}>
              <h3 className={style.heading}>Get Started Today</h3>
              <p className={style.text}>
                We cordially invite all proprietors of tourism-related
                businesses to our online portal where we can reach out to
                potential clients.
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-md-end">
              <Link href={"/"} className={style.started__link}>
                <span className="me-3">Start Now</span>{" "}
                <FaTelegramPlane fontSize={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={style.signup__container}>
        <div className={style.inner__container}>
          <div className="grid grid-cols-xl-2 grid-cols-lg-2 grid-cols-md-1 grid-cols-sm-1 gap-4">
            <div className={style.signup_img__box}>
              <Image src={images["Featured-Image.png"]} alt="" />
            </div>
            <div className={`${style.signup__text__box}`}>
              <h3 className={`mb-md-5 mb-3 ${style.signup__text}`}>Signup</h3>
              <Signup />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index;
