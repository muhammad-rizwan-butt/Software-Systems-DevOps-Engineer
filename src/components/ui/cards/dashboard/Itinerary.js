import React from "react";
import { Accordion } from "react-bootstrap";
import { ItineraryForm } from "./ItineraryForm";

export const Itinerary = ({ formik }) => {
  return (
    <>
      <div className="col-12">
        <Accordion defaultActiveKey="0">
          <div className="row g-2">
            {formik?.values?.itinerary?.map((itinerary, index) => (
              <div className="col-lg-6 col-12">
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>Day {index + 1}</Accordion.Header>
                  <Accordion.Body>
                    <ItineraryForm
                      formik={formik}
                      itinerary={itinerary}
                      index={index}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            ))}
          </div>
        </Accordion>
      </div>
    </>
  );
};
