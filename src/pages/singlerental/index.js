import Image from "next/image";
import React, { useState } from "react";
import { images } from "../../lib/images";
import { Layout } from "../../components/layout/layout";
import style from  "../../styles/singlerental/SingleRental.module.scss";

import { CarRentalCard } from "../../components/ui/cards/carrentalcard/CarRentalCard";
import Link from "next/link";
import {TiTick} from "react-icons/ti";

const SingleRental = () => {
  const [activeItem, setActiveItem] = useState("rooms");
  return (
    <>
      <section className="my-4">
        <div className="container">
          <div className="grid grid-cols-4 gap-5">


            <div className="col-span-3 my-3 border-radius-4">
              <div className="mb-3">

              <p className="green_text">Back to Search Results</p>
               <h6 className="card_title">Your deal</h6>
                <span className="label_title ">Next.. Protection options</span>
                </div>

                <div style={{border: '1px solid #68bd72', borderRadius:'8px', backgroundColor:'#e9ffef' }} className="d-flexmt-4 p-3">
<TiTick color="green"/> <span>Free cancellation up to 48 hours before pick-up</span>

                </div>
              <Link href={"/checkout"} className="mt-3">
                {[...new Array(1)].map((_, i) => (
                  <CarRentalCard key={i} />
                ))}
               
              </Link>
              <div className={style.underline_checkbox}></div>
              <h2 className="card_title"> Great choice!</h2>
             
              <div className=" mt-3 grid grid-cols-3">

              <div className="col-span-2 ">
                <div className="d-flex align-items-center flex-wrap gap-5 ">
                <div>
                  <TiTick color="green"/>
                  <span>Most popular company here</span>
                </div>
                <div>
                <TiTick color="green"/>

                <span>Most popular fuel policy</span>

                </div> <br/>
                <div>
                <TiTick color="green"/>

                <span>Free cancellation</span>

                </div>
                <div>
                <TiTick color="green"/>

                <span>well-maintained cars</span>

                </div><br/>
                <div>
                <TiTick color="green"/>

                <span>Customer rating:7.1/10</span>

                </div>
                <div>
                <TiTick color="green"/>

                <span>Clean Cars</span>

                </div>
                </div>

              </div>
              <div className="">
                <Image src={images["keys.png"]} />
              </div>
              </div>

              <div className={style.underline_checkbox}></div>
              <h2 className="card_title"> Included in the price!</h2>
             
              <div className=" mt-3 grid grid-cols-3">

                <div className="col-span-3 d-flex align-items-center flex-wrap gap-5  ">
                <div>
                  <TiTick color="green"/>
                  <span>Free cancellation up to 48 hours before pick-up</span>
                </div>
                <div>
                <TiTick color="green"/>

                <span>Collision Damage Waiver with $2,340 deductible</span>

                </div> 
                <div>
                <TiTick color="green"/>

                <span>Theft Protection with $2,340 excess</span>

                </div>
                <div>
                <TiTick color="green"/>

                <span>Unlimited mileage</span>

                </div>
                </div>

             
              </div>
              <div>
                <button type="submit" className="mt-4 btn btn-primary">
                  Continue to book
                </button>
              </div>
            </div>
            <div>

            <div style={{border: '1px solid #ccc', borderRadius:'8px'}} className={` p-3 `}>
              <h5 className="card_title">Pick-up and drop-Off</h5>
             <div className={` d-flex justify-content-between`}>
                 <div className="d-flex align-items-center">
                 <Image src={images["location.svg"]} alt="location" />

                 </div>
<div>
<div className="  gap-2 mt-4">
                <span className="small-text"> Fri, Oct 12 - 10:00 am </span>

                <div className={`rating d-flex align-items-center gap-1   `}>
                  <span> Lahore Downtown</span>
                </div>
                <span className="small-text">View pick-up instructions</span>
              </div>
              <div className="  gap-2 mt-4">
                <span className="small-text"> Fri, Oct 12 - 10:00 am </span>

                <div className={`rating d-flex align-items-center gap-1   `}>
                  <span> Lahore Downtown</span>
                </div>
                <span className="small-text">View drop-off instructions</span>
              </div>
</div>
             </div>
             
            </div>
<div style={{border: '1px solid #ccc', borderRadius:'8px'}} className={`mt-4 p-3 col-span-2`}>

<h5 className="card_title">Car price breakdown</h5>

<div className="  gap-2 mt-4">

  <div className={`rating d-flex align-items-center justify-content-around gap-1   `}>
    <span> Car hire charge</span>
    <span>$64.01</span>
  </div>
</div>
<div className={style.underline_checkbox}></div>

<div className="  gap-2 mt-4">

  <div className={`rating d-flex align-items-center justify-content-around gap-1   `}>
    <span> Price for 1 day:</span>
    <span>$64.01</span>
  </div>
</div>
</div>
<div style={{border: '1px solid #68bd72', borderRadius:'8px', backgroundColor:'#e9ffef' }} className="mt-4 p-3">
<h6>
  <b> 
  This car is costing you just $64.01 – a fantastic deal…
  </b>
  </h6>
<p>At that time of year, the average medium car at Lahore Downtown costs $72.55!</p>
</div>
</div>

          </div>
        </div>
      </section>
  




     
    </>
  );
};
SingleRental.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SingleRental;
