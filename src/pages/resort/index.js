import React from "react";

import { Layout } from "../../components/layout/layout";
import { MobileFilterModal } from "../../components/ui/MobileFilterModal";
import { Filter } from "../../components/ui/cards/filters/Filter";
import { HotelCard } from "../../components/ui/cards/hotel/Hotelcard";
// import { VillasCard } from "../../components/ui/cards/resortcard/Resortcard";
const Index = () => {
  return (
    <>
      <section>
        <div className="container">
          <div
            className={` py-4 grid grid-cols-xl-5 grid-cols-lg-5 grid-cols-1 gap-3`}
          >
            <div className="d-lg-block d-none">
              <Filter />
            </div>
            <div className="col-span-xl-4 col-span-lg-4 ">
              <div className="d-flex justify-content-between align-items-center">
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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((arr, i) => {
                  return <HotelCard key={i} />;
                })}
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
