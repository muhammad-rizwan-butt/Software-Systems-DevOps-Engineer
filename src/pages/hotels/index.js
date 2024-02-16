import React from "react";
// import { HotelCard } from "../../components/ui/cards/hotel/Hotelcard";

// import { HotelCard } from "../../components/ui/cards/hotel/HotelCard.js";
import { Layout } from "../../components/layout/layout";
import { Filter } from "../../components/ui/cards/filters/Filter";
import { HotelCard } from "../../components/ui/cards/hotel/Hotelcard";
import { MobileFilterModal } from "../../components/ui/MobileFilterModal";
const Index = () => {
  return (
    <>
      <section>
        <div className="container">
          <div
            className={` py-4 grid grid-cols-xl-5 grid-cols-lg-5 grid-cols-4 gap-3`}
          >
            <div className="d-lg-block d-none">
              <Filter />
            </div>
            <div className="col-span-4">
              <div className="d-flex justify-content-between align-items-center">
                {/* <h6 className="search-title">15 properties found</h6> */}
                <div className="d-lg-none d-block">
                  <MobileFilterModal>
                    <Filter />
                  </MobileFilterModal>
                </div>
                <select className="select-field">
                  <option>Popularity</option>
                  <option>Price</option>
                </select>
              </div>
              {/* -----------------cards-grid------------------ */}
              <div className="grid grid-cols-1 gap-2 my-3">
                {[...new Array(10)].map((_, i) => (
                  <HotelCard key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Index;
