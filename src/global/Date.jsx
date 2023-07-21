import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";

const Date = ({
  setRecruitRequest,
  recruitRequest,
  setSaveValue,
  saveValue,
}) => {
  const [state, setState] = useState({ format: "YYYY-MM-DD" });

  // 오늘 날짜 뽑기
  const today = new DateObject();
  const string = today.format("YYYY-MM-DD");

  const convert = (date, format = state.format) => {
    let object = { date, format };

    setState({
      jsDate: date.toDate(),
      ...object,
    });
  };

  useEffect(() => {
    if (state !== undefined) {
      setRecruitRequest({
        ...recruitRequest,
        endDate: state.format.validatedValue?.[0],
      });

      setSaveValue({
        ...saveValue,
        endDate: state.format.validatedValue?.[0],
      });
    }
  }, [state]);

  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <>
      <DatePicker
        className="blue"
        inputClass="custom-input"
        headerOrder={["MONTH_YEAR", "LEFT_BUTTON", "RIGHT_BUTTON"]}
        render={<InputIcon />}
        format="YYYY-MM-DD"
        disableMonthPicker
        monthYearSeparator="|"
        weekDays={weekDays}
        arrow={false}
        animations={[opacity(), transition({ from: 35, duration: 800 })]}
        // value={recruitRequest.endDate}
        value={string}
        onChange={convert}
      />
    </>
  );
};

export default Date;
