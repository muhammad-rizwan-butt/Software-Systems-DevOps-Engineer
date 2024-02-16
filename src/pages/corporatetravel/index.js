import React from "react";

import Image from "next/image";
import { images } from "../../lib/images";
import styles from "../../styles/corporatetravel/corporatetravel.module.scss";

import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { Layout } from "../../components/layout/layout";

const Index = () => {
  return (
    <main className={``}>
      <section className={`grid container`}>
        <h2 className={`${styles.title}`}>FIND A HEALTHY ESCAPE</h2>

        <div className={`grid grid-cols-xl-5 grid-cols-lg-5 grid-cols-1`}>
          <div
            className={`  ${styles.left_imgblock} col-span-xl-3 col-span-lg-3 `}
          ></div>

          <div className={`${styles.right_block} col-span-xl-2 col-span-lg-2 `}>
            <p>
              <span>C</span>
              orporate businesses all share a variety of cultural backgrounds,
              which is one element that unites them all. The necessity to create
              a wholesome environment where people can fully flourish there is
              the second issue. Corporate travel has a role in this. We provide
              thoughtfully designed corporate tour packages that enable people
              to interact with one another and partake in team-building
              exercises.
            </p>

            <p>
              Our business group tours feature icebreaker activities,
              action-packed excursions, nature hikes, and much more. Employees
              can develop their interpersonal skills and reach a level of
              comfort where they can acquire a more improved style of working
              together by participating in the ideal retreat, which enables them
              to come together and have an experience beyond the four walls of
              their working area.
            </p>
          </div>
        </div>
      </section>
      {/* ====================================WE ARE OFFERING========================== */}
      <section>
        <div className={`${styles.offers_section} container`}>
          <h2 className={`${styles.title}`}>WE ARE OFFERING</h2>

          <div
            className={` grid grid-cols-xl-4 grid-cols-lg-4 grid-cols-md-3 grid-cols-sm-2 grid-cols-1  gap_20px`}
          >
            <div className={styles.main_offers}>
              <div className={styles.main_img}>
                <Image
                  src={images["hands_clapping_line.png"]}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <p className={styles.content}>Ice breaking sessions</p>
            </div>

            <div className={styles.main_offers}>
              <div className={styles.main_img}>
                <Image
                  src={images["message_4_line.png"]}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <p className={styles.content}>Communication Activities</p>
            </div>

            <div className={styles.main_offers}>
              <div className={styles.main_img}>
                <Image
                  src={images["build.png"]}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <p className={styles.content}>Team Building Activities</p>
            </div>

            <div className={styles.main_offers}>
              <div className={styles.main_img}>
                <Image
                  src={images["live_photo_line.png"]}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <p className={styles.content}> Live Jamming sessions</p>
            </div>

            <div className={styles.main_offers}>
              <div className={styles.main_img}>
                <Image
                  src={images["tent_line.png"]}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <p className={styles.content}>Off-beat venues</p>
            </div>

            <div className={styles.main_offers}>
              <div className={styles.main_img}>
                <Image
                  src={images["game_2_line.png"]}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <p className={styles.content}>MICE</p>
            </div>

            <div className={styles.main_offers}>
              <div className={styles.main_img}>
                <Image
                  src={images["skateboard_line.png"]}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <p className={styles.content}>Adventure Activities</p>
            </div>

            <div className={styles.main_offers}>
              <div className={styles.main_img}>
                <Image
                  src={images["walk_line.png"]}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <p className={styles.content}>Nature Walks</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================Raise a QUERY=============================== */}

      <section className={`pt-20 `}>
        <form className={`${styles.form_container} container box-shadow`}>
          <h2 className={`${styles.title}`}>RAISE A QUERY</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className={`grid col-span-2 `}>
              {/* <label htmlFor="frm-phone">Name</label> */}
              <input
                id="frm-name"
                type="name"
                name="name"
                autoComplete="name"
                placeholder="Name"
                aria-required
                required
              />
            </div>

            <div className={`grid col-span-2`}>
              <input
                id="frm-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                aria-required
                required
              />
            </div>
            <div className={`grid col-span-2`}>
              <input
                id="frm-comp"
                type="text"
                name="name"
                autoComplete="comp"
                placeholder="Company Name"
                aria-required
                required
              />
            </div>
            <div className={`${styles.name} ${styles.block}`}>
              <input
                id="frm-phone"
                type="phone"
                name="phone no."
                autoComplete="tel"
                placeholder="Phone Number"
                required
                aria-required
              />
            </div>

            <div className={`${styles.name}  `}>
              <input
                id="frm-location"
                type="text"
                name="location"
                autoComplete="location"
                placeholder="Location"
                aria-required
                required
              />
            </div>
            <div>
              <input
                id="frm-phone"
                type="phone"
                name="phone no."
                autoComplete="tel"
                placeholder="No. of People"
                aria-required
                required
              />
            </div>
            <div>
              <input
                id="frm-location"
                type="text"
                name="location"
                autoComplete="location"
                placeholder="No. of Days"
                aria-required
                required
              />
            </div>

            <div className={`col-span-2 `}>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>

      {/* =====================================swiper================================= */}
      <section>
        <h2 className={`${styles.title}`}>Corporate Trip Images</h2>
        <Swiper
          spaceBetween={20}
          loop={true}
          navigation={{
            nextEl: ".banner-swiper-button-next",
            prevEl: ".banner-swiper-button-prev",
          }}
          autoplay={{
            delay: 4000,
            // disableOnInteraction: false,
          }}
          freeMode={true}
          breakpoints={{
            592: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, Autoplay]}
          className={`${styles.mySwiper}`}
        >
          <SwiperSlide className="text-center">
            <Image
              className="corporate-img"
              src="https://siyaahat.pk/wp-content/uploads/2023/02/Featured-Image-4-1024x604.jpg"
              width={100}
              height={100}
              alt=""
            />
            <b> Dubai Desert</b>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <Image
              className="corporate-img"
              src="https://siyaahat.pk/wp-content/uploads/2023/02/Featured-Image-5-1024x604.jpg"
              width={100}
              height={100}
              alt=""
            />
            <b>Naran River</b>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <Image
              className="corporate-img"
              src="https://siyaahat.pk/wp-content/uploads/2023/02/Featured-Image-6-1024x604.jpg"
              width={100}
              height={100}
              alt=""
            />
            <b>sawat Valley</b>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <Image
              className="corporate-img"
              src="https://siyaahat.pk/wp-content/uploads/2023/02/Featured-Image-5-1024x604.jpg"
              width={100}
              height={100}
              alt=""
            />
            <b>Shogran Valley</b>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <Image
              className="corporate-img"
              src="https://siyaahat.pk/wp-content/uploads/2023/02/Featured-Image-5-1024x604.jpg"
              width={100}
              height={100}
              alt=""
            />
            <b>Shogran Valley</b>
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <Image
              className="corporate-img"
              src="https://siyaahat.pk/wp-content/uploads/2023/02/Featured-Image-5-1024x604.jpg"
              width={100}
              height={100}
              alt=""
            />
            <b>Shogran Valley</b>
          </SwiperSlide>
          <div className="banner_swiper__navigation">
            <button className="banner-swiper-button-prev">
              <Image
                src="left_fill.svg"
                className="corporate-swiper-btn"
                width={100}
                height={50}
                alt="arrow left"
              />
            </button>
            <button className="banner-swiper-button-next">
              <Image
                src="right_fill.svg"
                className="corporate-swiper-btn"
                alt="arrow right"
                width={100}
                height={50}
              />
            </button>
          </div>
        </Swiper>
      </section>
    </main>
  );
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Index;
