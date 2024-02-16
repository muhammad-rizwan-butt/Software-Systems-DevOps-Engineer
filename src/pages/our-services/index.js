import React from "react";
import { Layout } from "../../components/layout/layout";
import { OurServicesData } from "../../data/OurServices";
import style from "../../styles/our-services.module.scss";

const Index = () => {
  return (
    <div className={style.ourServices___container}>
      <section className={style.banner___container}>
        <div className="container">
          <h1 className={style.banner__heading}>Our Services</h1>
          <p className={style.banner___text}>
            At Siyaahat.pk, we are committed to delivering a seamless and
            exceptional experience when it comes to planning and booking your
            travel accommodations. Our platform offers a range of services that
            cater to your travel needs, ensuring you can find the perfect
            destination, accommodations, and transportation, all in one place.
          </p>
        </div>
      </section>
      <section className={style.ourProduct___container}>
        <div className="container">
          <h2 className={style.heading}>Our Products</h2>
          <div className="grid grid-cols-xl-3 grid-cols-lg-3 grid-cols-md-2 grid-cols-sm-1 gap-4 mt-5">
            {OurServicesData.map((item, i) => (
              <div className={style.ourProduct__card} key={item?.heading + i}>
                <div className={style.card__imageWrapper}>{item?.icon}</div>
                <div className={style.card__content}>
                  <h3 className={style.card__heading}>{item?.heading}</h3>
                  <p className={style.card__text}>{item?.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={style.ourGoal__container}>
        <div className="container">
          <h2 className={style.ourGoal___heading}>Our Goal</h2>
          <p className={style.ourGoal__innerBox_text}>
            At Siyaahat.pk, our goal is to be your one-stop platform for all
            your travel needs. We are dedicated to simplifying your travel
            planning process and providing you with the information and tools
            you need to make informed choices. Whether you're traveling for
            business, leisure, or any other purpose, we're here to make your
            journey smooth and memorable. For any inquiries or assistance, do
            not hesitate to contact us at <b>info@siyaahat.pk</b>. We are here
            to help you with any aspect of your travel planning and booking
            process.
          </p>
        </div>
      </section>
    </div>
  );
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index;
