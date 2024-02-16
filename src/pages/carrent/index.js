import React from "react";
import { Layout } from "../../components/layout/layout";
import { MobileFilterModal } from "../../components/ui/MobileFilterModal";
import { CarFilter } from "../../components/ui/cards/carfilters/CarFilter";
import { CarRentalCard } from "../../components/ui/cards/carrentalcard/CarRentalCard";
const Index = () => {
  return (
    <>
      <section>
        <div className="container">
          <div
            className={` py-4 grid grid-cols-xl-5 grid-cols-lg-5 grid-cols-1 gap-3`}
          >
            <div className="d-lg-block d-none">
              <CarFilter />
            </div>

            <div className="col-span-xl-4 col-span-lg-4 col-span-1">
              <div className="d-flex justify-content-between align-items-center">
                {/* <h6 className="search-title">15 properties found</h6> */}
                <div className="d-lg-none d-block">
                  <MobileFilterModal>
                    <CarFilter />
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
                  <CarRentalCard key={i} />
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
