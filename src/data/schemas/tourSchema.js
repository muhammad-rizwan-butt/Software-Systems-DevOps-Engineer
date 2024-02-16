import * as Yup from "yup";

const informationValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  images: Yup.array()
    .min(1, "Please select at least one image")
    .max(5, "Not more than five images.")
    .of(
      Yup.mixed().test(
        "fileType",
        "Unsupported file type",
        (value) =>
          value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
      )
    ),
  description: Yup.string().required("Description is required"),
  totalDays: Yup.number().required("Total Days are required"),
  featureImage: Yup.mixed()
    .test(
      "fileType",
      "Unsupported file format",
      (value) =>
        value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
    )
    .required("Please select at least one image"),
  tourType: Yup.string().required("Tour's Type is required"),
});

const locationValidationSchema = Yup.object().shape({
  location: Yup.object({
    departure: Yup.string().required("Departure's Location is required"),
    destination: Yup.string().required("Destination's Location is required"),
  }),
  departureDate: Yup.string().required("Departure's Date is required"),
  completionDate: Yup.string().required("Completion's Date is required"),
  price: Yup.number().required("Price is required"),
  discountPrice: Yup.number().required("Discounted Price is required"),
  details: Yup.object({
    around: Yup.string().required("Around is required"),
    overview: Yup.string().required("Overview is required"),
  }),
});

const itineraryValidationSchema = Yup.object().shape({
  itinerary: Yup.array().of(
    Yup.object({
      title: Yup.string().required("Title is required"),
      image: Yup.mixed()
        .test(
          "fileType",
          "Unsupported file format. Please upload png , jpeg or jpg",
          (value) =>
            value &&
            ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
        )
        .required("Please select at least one image"),
      location: Yup.string().required("Location is required"),
      time: Yup.string().required("Time is required"),
      details: Yup.string().required("Details are required"),
    })
  ),
});

export {
  informationValidationSchema,
  itineraryValidationSchema,
  locationValidationSchema,
};
