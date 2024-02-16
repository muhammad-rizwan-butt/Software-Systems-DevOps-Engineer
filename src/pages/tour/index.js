import React, { useEffect, useState } from "react";
import { TourCard } from "../../components/ui/cards/tourcard/Tourcard";
// import { HotelCard } from "../../components/ui/cards/hotel/HotelCard.js";
import { Axios } from "../../axios/axios";
import { Layout } from "../../components/layout/layout";
import { TourFilter } from "../../components/ui/cards/filters/TourFilter";
import { MobileFilterModal } from "../../components/ui/MobileFilterModal";

const Tour = () => {
  const [tours, setTours] = useState([]);
  const [tourType, setTourType] = useState("");
  const [price, setPrice] = useState(null);
  const [duration, setDuration] = useState([]);
  const [isReset, setIsReset] = useState(false);

  function getAllTours() {
    let url = `/tour/all-filter-tour?page=0&pageSize=10`;

    if (duration.length > 0) {
      url += `&totalDays=${JSON.stringify(duration)}`;
    }
    if (price) {
      url += `&price=${JSON.stringify(price)}`;
    }
    if (tourType) {
      url += `&tourType=${tourType}`;
    }
    Axios.get(url)
      .then((res) => setTours(res.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getAllTours();
    setIsReset(false);
  }, [isReset]);
  return (
    <>
      <section>
        <div className="container">
          <div
            className={` py-4 grid grid-cols-xl-5 grid-cols-lg-5 grid-cols-1 gap-lg-3 gap-0`}
          >
            <div className="d-lg-block d-none">
              <TourFilter
                duration={duration}
                tourType={tourType}
                setDuration={setDuration}
                setPrice={setPrice}
                setTourType={setTourType}
                getAllTours={getAllTours}
                price={price}
                length={tours?.length}
                setIsReset={setIsReset}
              />
            </div>
            <div className="col-span-4">
              <div className="d-lg-none d-block">
                <MobileFilterModal>
                  <TourFilter
                    duration={duration}
                    tourType={tourType}
                    setDuration={setDuration}
                    setPrice={setPrice}
                    setTourType={setTourType}
                    getAllTours={getAllTours}
                    price={price}
                    length={tours?.length}
                    setIsReset={setIsReset}
                  />
                </MobileFilterModal>
              </div>
              {/* -----------------cards-grid------------------ */}
              <div className="grid grid-cols-1 gap-2 my-3">
                {tours?.map((item, i) => {
                  return <TourCard key={i} tour={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Tour.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Tour;
