import React from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";

export const BootstrapDateRangePicker = ({
  setDates,
  single = false,
  dates,
}) => {
  return (
    <>
      <DateRangePicker
        onApply={setDates}
        initialSettings={{
          singleDatePicker: single,
          startDate: dates?.startDate,
          endDate: dates?.endDate,
        }}
        autoApply={true}
      >
        <input
          type="text"
          style={{
            opacity: 0,
            position: "absolute",
            inset: 0,
            height: "100%",
            width: "100%",
            cursor: "pointer",
          }}
        />
      </DateRangePicker>
    </>
  );
};
