import { useFormik } from "formik";
import React, { useMemo, useState } from "react";
import { Spinner } from "react-bootstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GiWavyItinerary } from "react-icons/gi";
import { MdOutlinePolicy } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Axios } from "../../../axios/axios";
import { MultiStepForm } from "../../../components/ui/MultiStepForm";
import { AdditionalInformation } from "../../../components/ui/cards/dashboard/AdditionalInformation";
import { Information } from "../../../components/ui/cards/dashboard/Information";
import { Itinerary } from "../../../components/ui/cards/dashboard/Itinerary";
import { LocationAndBooking } from "../../../components/ui/cards/dashboard/LocationAndBooking";
import { initialValues } from "../../../data/schemas/tourInitialValue";
import {
  informationValidationSchema,
  itineraryValidationSchema,
  locationValidationSchema,
} from "../../../data/schemas/tourSchema";
import style from "../../../styles/tour.module.scss";
import Layout from "../layout";

const list = [
  {
    step: 1,
    title: "Information",
    icon: <AiOutlineInfoCircle fontSize={22} />,
  },
  {
    step: 2,
    title: "Location & Booking",
    icon: <SlLocationPin fontSize={22} />,
  },
  { step: 3, title: "Itinerary", icon: <GiWavyItinerary fontSize={22} /> },
  {
    step: 4,
    title: "Additional Information",
    icon: <MdOutlinePolicy fontSize={22} />,
  },
];

const Tour = () => {
  const { token } = useSelector((state) => state?.auth);
  const [activeStep, setActiveStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values) => {
    if (activeStep < 4) {
      setActiveStep((prev) => prev + 1);
      formik.setTouched({});
      formik.setErrors({});
    } else {
      try {
        setIsLoading(true);
        const { featureImage, images, ...props } = values;

        const formValues = {
          ...props,
          itinerary: values?.itinerary?.map(
            ({ title, note, details, time, location }) => {
              return { title, note, details, time, location };
            }
          ),
        };

        let formData = new FormData();

        images.forEach((image, index) => {
          formData.append(`images[${index}]`, image);
        });
        values.itinerary.forEach((itinerary, i) => {
          formData.append(`itinerary[${i}][image]`, itinerary?.image);
        });
        formData.append("featureImage", featureImage);
        const { data } = await Axios.post("tour/upload-images", formData, {
          headers: {
            "Content-type": ["multipart/form-data"],
            Accept: "application/json",
            type: "formData",
          },
        });
        if (data) {
          const { featureImage, images, itinerraryImages } = data;
          const latestData = {
            ...formValues,
            featureImage,
            images,
            itinerary: formValues?.itinerary?.map(
              ({ title, note, details, time, location }, index) => {
                return {
                  title,
                  note,
                  details,
                  time,
                  location,
                  image: itinerraryImages[index],
                };
              }
            ),
          };
          toast
            .promise(
              Axios.post("/tour/create-tour", latestData, {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-type": "application/json",
                  Accept: "application/json",
                },
              }),
              { success: "You have successfully added a Tour", error: "Error" }
            )
            .then((res) => setIsLoading(false))
            .catch((error) => {
              console.log(error);
              setIsLoading(false);
            });
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };
  const validationSchema = useMemo(() => {
    switch (activeStep) {
      case 1:
        return informationValidationSchema;
      case 2:
        return locationValidationSchema;
      case 3:
        return itineraryValidationSchema;
      case 4:
        return null;
      default:
        break;
    }
  }, [activeStep]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  console.log(formik);

  const memoStep = () => {
    switch (activeStep) {
      case 1:
        return <Information formik={formik} />;
      case 2:
        return <LocationAndBooking formik={formik} />;
      case 3:
        return <Itinerary formik={formik} />;
      case 4:
        return <AdditionalInformation formik={formik} />;
      default:
        return null;
    }
  };

  return (
    <div className={` px-3 py-4 my-5 ${style.vendor__tour_container} shadow`}>
      <div className="container-fluid">
        <h1 className="mb-4">Tour</h1>
        <MultiStepForm activeStep={activeStep} list={list} />
        <div className="row g-3 mt-4">{memoStep()}</div>
        <div className="d-flex align-items-center justify-content-between my-4">
          <button
            className="btn btn-primary"
            disabled={activeStep == 1}
            onClick={() =>
              setActiveStep((prev) => {
                if (prev == 1) {
                  return prev;
                } else {
                  return prev - 1;
                }
              })
            }
          >
            Back
          </button>
          {isLoading ? (
            <button className="btn btn-primary" type="button">
              <Spinner />
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={formik.handleSubmit}
              type="submit"
            >
              {activeStep < 4 ? "Next" : "Add Tour"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Tour.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
export default Tour;
