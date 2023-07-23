import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";

const DatePick = ({
  setRecruitRequest,
  recruitRequest,
  setSaveValue,
  saveValue,
}) => {
  // const [state, setState] = useState({ format: "YYYY-MM-DD" });
  // const [state, setState] = useState(new Date());
  // console.log(state);

  // 오늘 날짜 뽑기
  const today = new DateObject();
  const string = today.format("YYYY-MM-DD");

  // const convert = (date, format = state.format) => {
  //   let object = { date, format };

  //   setState({
  //     jsDate: date.toDate(),
  //     ...object,
  //   });
  // };

  // useEffect(() => {
  //   if (state !== undefined) {
  //     setRecruitRequest({
  //       ...recruitRequest,
  //       endDate: state.format.validatedValue?.[0],
  //     });

  //     setSaveValue({
  //       ...saveValue,
  //       endDate: state.format.validatedValue?.[0],
  //     });
  //   }
  // }, [state]);

  const pickDate = () => {
    // console.log();
  };

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
        // value={state}
        // onChange={setState}
        // value={recruitRequest.endDate}
        // value={string}
        // onChange={convert}
        // onChange={setRecruitRequest}
        // onChange={pickDate}
      />
    </>
  );
};

export default DatePick;
