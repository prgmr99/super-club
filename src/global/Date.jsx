import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";

const Date = () => {
  // console.log(new Date(2023, 7, 5));
  // console.log(new Date().getFullYear());
  // console.log(new Date().getMonth() + 1);
  // console.log(new Date().getDate());
  const date = new DateObject();
  // console.log(date.format("YYYY-MM-dd"));

  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <>
      <DatePicker
        className="blue"
        inputClass="custom-input"
        headerOrder={["MONTH_YEAR", "LEFT_BUTTON", "RIGHT_BUTTON"]}
        render={<InputIcon />}
        format="YYYY-MM-dd"
        disableMonthPicker
        monthYearSeparator="|"
        weekDays={weekDays}
        arrow={false}
        animations={[opacity(), transition({ from: 35, duration: 800 })]}
      />
    </>
  );
};

export default Date;
