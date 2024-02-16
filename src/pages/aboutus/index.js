import Image from "next/image";
import React from "react";
import { Layout } from "../../components/layout/layout";
import { AboutUsData } from "../../data/AboutUs";
import { images } from "../../lib/images";
import style from "../../styles/aboutus.module.scss";

const Index = () => {
  return (
    <div className={`${style.aboutus__container}`}>
      <section className={style.portal__box}>
        <div className="container">
          <h2 className={`${style.portal__box__heading}`}>About Us</h2>
          <div className="row">
            <div className="col-md-8 col-12 order-lg-1 order-2">
              <div className={style.portal__text}>
                Siyaahat.pk’s’ mission is “Around the world – not in 80 days…
                but just what you want your schedule to be!!” The core value we
                offer is convenience, convenience, and convenience.
              </div>
              <div className={style.portal__text}>
                Siyaahat.pk is your portal to effortless and exhilarating
                travel. We connect millions of adventure seekers to
                unforgettable experiences, a diverse range of travel options,
                and incredible accommodations, be it cozy homes or luxurious
                hotels, and much more.
              </div>
              <div className={style.portal__text}>
                Gone are the days of tedious visits to bus terminals or travel
                agents, waiting in long queues, and wasting your precious time.
                Siyaahat.pk has transformed the process with its lightning-fast
                booking system. Our user-friendly app lets you plan your dream
                journey with just a few taps. We're not just a booking platform;
                we're your travel companions. We collaborate closely with Tour
                Operators to ensure top-notch services and captivating packages.
                Our platform empowers you to effortlessly explore upcoming local
                and international tours, compare packages, and find your dream
                adventure. But there's more! At Siyaahat.pk, we're on a mission
                to make Pakistan a top travel destination. We're passionate
                about showcasing our country's beauty and culture to the world.
                Join us on this thrilling journey, and let us be your guide to
                discovering the incredible wonders of Pakistan. Your adventure
                of a lifetime awaits!
              </div>
              <div className={style.portal__text}></div>
            </div>
            <div className="col-md-4 col-12 order-lg-2 order-1 text-center">
              <Image
                src={images["footerLogo.png"]}
                alt=""
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.book_us__box}`}>
        <div className="container">
          <h2 className={style.bookus__heading}>Why book with us?</h2>
          <div
            className={`${style.bookUS__grid} grid grid-cols-xl-4 grid-cols-lg-4 grid-cols-md-2 grid-cols-sm-2 gap-3 mt-5`}
          >
            {AboutUsData?.map((data, i) => (
              <div
                className={`${style.bookUS__card} text-center`}
                key={data?.heading + i}
              >
                <div className={style.bookus__card__img}>{data?.icon}</div>
                <div className={style.bookUS__card__content}>
                  <h4 className={style.bookUS__card_heading}>
                    {data?.heading}
                  </h4>
                  <p className={style.bookUS__card__text}>{data?.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={style.work__container}>
        <div className="container">
          <h2 className={style.work__heading}>What can Siyaahat do for you?</h2>
          <div className="grid grid-cols-xl-3 grid-cols-lg-3 grid-cols-md-2 gap-3 text-center">
            <div className={style.work__card}>
              <h4 className={style.work__card__number}>+636%</h4>
              <p className={style.work__card__text}>
                increase in reach, year over year
              </p>
            </div>
            <div className={style.work__card}>
              <h4 className={style.work__card__number}>+500%</h4>
              <p className={style.work__card__text}>
                growth across all social channels
              </p>
            </div>
            <div className={style.work__card}>
              <h4 className={style.work__card__number}>+250%</h4>
              <p className={style.work__card__text}>
                increase in sourced revenue, year over year
              </p>
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
