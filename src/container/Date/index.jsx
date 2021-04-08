import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);


export default ({ ...props }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      locale="ko"
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    />
  )
}