import React from "react";
import Editor from "../../Editor";

export const AdditionalInformation = ({ formik }) => {
  return (
    <>
      <div className="col-12">
        <h4 className="">
          Inclusion & Exclusion <span>(Optional)</span>
        </h4>
      </div>
      <div className="col-12">
        <Editor
          height={300}
          setFormikValue={(value) =>
            formik.setFieldValue("inclusionAndexclusion", value)
          }
        />
      </div>
      <div className="col-12">
        <h4 className="">
          Additional Information <span>(Optional)</span>
        </h4>
      </div>
      <div className="col-12">
        <Editor
          height={300}
          setFormikValue={(value) =>
            formik.setFieldValue("additionalInfo", value)
          }
        />
      </div>
      <div className="col-12">
        <h4 className="">
          Travel Tips <span>(Optional)</span>
        </h4>
      </div>
      <div className="col-12">
        <Editor
          height={300}
          setFormikValue={(value) => formik.setFieldValue("travelTips", value)}
        />
      </div>
      <div className="col-12">
        <h4 className="">
          Policy <span>(Optional)</span>
        </h4>
      </div>
      <div className="col-12">
        <Editor
          height={300}
          setFormikValue={(value) => formik.setFieldValue("policy", value)}
        />
      </div>
    </>
  );
};
