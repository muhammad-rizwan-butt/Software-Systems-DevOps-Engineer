import Image from "next/image";
import React from "react";
import ImageGallery from "react-image-gallery";
import { Room_Gallery } from "../../../../data/RoomGallery";
import { images } from "../../../../lib/images";
import style from "../../../../styles/ui/cards/roomcard.module.scss";
// import items from "../../../../data/RoomList"
export const RoomCard = () => {
  // const [room, setRoom] = useState([""]);
  // const addRoom = (el) => setRoom((currentRoom) => [...currentRoom, el]);

  return (
    <>
      <section className={`content-container border border-radius-4`}>
        <div
          className={`d-flex align-items-center justify-content-between card_header px-3 py-3`}
        >
          <h5 className="card_title">Room Detail</h5>
          <h5 className="card_title d-flex align-items-center gap-1">
            <span>For 2 Adults</span>
            <span>For 1 Night</span>
          </h5>
        </div>
        {/* --------------------------------cardbody------------------- */}
        {/* {items && items.map((item) => ( */}

        {/* // {items.map(item => ( */}
        {/* key={items.id} */}

        <div className="grid grid-cols-xl-5 grid-cols-lg-5 grid-cols-2">
          <div className="col-span-2 border-right px-3 py-3">
            <ImageGallery
              items={Room_Gallery}
              showPlayButton={false}
              showNav={false}
            />

            <h6 className={`${style.info_title} my-2`}>Deluxe Room</h6>
            <div className="d-flex align-items-center gap-2 mt-3">
              <Image
                src={images["user.svg"]}
                alt="user_icon"
                className="icon-img"
              />
              <p className={`secondary_info`}>Maximum Room Capacity</p>
            </div>
            <div className="d-flex align-items-center gap-2 mt-2">
              <Image
                src={images["forbid.svg"]}
                alt="user_icon"
                className="icon-img"
              />
              <p className={`secondary_info`}>No smoking room</p>
            </div>
            <p className="red-text my-3">Hurry Up! Only 3 Rooms Left </p>
            <div className="my-3 d-flex align-items-center gap-md-3 gap-2 flex-wrap">
              <div className="d-flex align-items-center gap-2">
                <Image
                  src={images["icon_tick.svg"]}
                  alt="tick"
                  className="icon-img"
                />
                <p className={`secondary_info`}>Ceiling Fan</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Image
                  src={images["icon_tick.svg"]}
                  alt="tick"
                  className="icon-img"
                />
                <p className={`secondary_info`}>Safe / Loacker</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Image
                  src={images["icon_tick.svg"]}
                  alt="tick"
                  className="icon-img"
                />
                <p className={`secondary_info`}>Power Outlet</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Image
                  src={images["icon_tick.svg"]}
                  alt="tick"
                  className="icon-img"
                />
                <p className={`secondary_info`}>Dining Areas</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Image
                  src={images["icon_tick.svg"]}
                  alt="tick"
                  className="icon-img"
                />
                <p className={`secondary_info`}>Toiletries</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Image
                  src={images["icon_tick.svg"]}
                  alt="tick"
                  className="icon-img"
                />
                <p className={`secondary_info`}>Hot water</p>
              </div>
            </div>
          </div>

          {/* -------------------------------------------right-side-------------- */}
          <div className="px-3 py-3 col-span-3">
            <div className="d-flex align-items-start justify-content-between">
              <div className="mw-200">
                <p className="option-button px-2 py-2 border-radius-4 border">
                  Option 1
                </p>
                <div className="d-flex align-items-center gap-2 my-3">
                  <p className="card_title">Refundable</p>
                  <Image
                    src={images["warning_fill.svg"]}
                    alt="warning"
                    className="icon-img"
                  />
                </div>
                <div className="d-flex align-items-center gap-2 my-2">
                  <Image
                    src={images["user.svg"]}
                    alt="user_icon"
                    className="icon-img"
                  />
                  <p className={`secondary_info`}>3 Adults</p>
                </div>
                <div className="d-flex align-items-center gap-2 my-2">
                  <Image
                    src={images["breakfast.svg"]}
                    alt="user_icon"
                    className="icon-img"
                  />
                  <p className={`secondary_info`}>
                    Breakfast included bed and breakfast
                  </p>
                </div>
                <ul className="my-3">
                  <li className="list-style-disc secondary_info">
                    Free cancellation before 00:01 on Sun, 21 May 2023{" "}
                  </li>
                </ul>
              </div>
              {/* ----------------------addroom------------ */}
              <div className="d-flex align-items-center gap-2 flex-column">
                <p className={`discount`}>46% off</p>
                {/* --------------------price------------ */}
                <div
                  data-v-6443285c=""
                  className="price-amount d-flex flex-column align-items-center gap-2"
                >
                  <span data-v-6443285c="" className="price-before-discount">
                    PKR 18,975{" "}
                  </span>
                  <span data-v-6443285c="" className="discount-price">
                    PKR 10,175
                  </span>
                </div>
                <p className={`rent`}>For One Night Per Room</p>
                <button
                  onClick={() => addRoom(items.id, "items")}
                  className="btn btn-primary hover-box-shadow mt-5"
                >
                  Add Room 1
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* // ))}; */}
      </section>
    </>
  );
};
