import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'assets/less/customDatePicker.less';
import prev from 'assets/images/prev.png';
import next from 'assets/images/next.png';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import ko from 'date-fns/locale/ko';
// registerLocale('ko', ko);

const StyledDate = styled.div`
  margin-top: 10px;
  .react-datepicker {
    width: 100%;
    height: 476px;
    background: #000;

    .react-datepicker__header {
      background: none;
      border: none;
      font-size: 25px;

      .react-datepicker__current-month {
        color: #fff;
        font-weight: 300;
        font-size: 1.7rem;
      }
      .react-datepicker__day-names  {
          margin-top: 1.5rem;
          > * {
            color: #fff;
            width: auto;
            margin: 0 0.64rem;
            font-size: 1.53rem;
        }
      }
    }
    .react-datepicker__month-container {
      width: 100%;
      height: 100%;
      padding: 20px 0;

      .react-datepicker__day {
        color: #7A7585;
        font-size: 1.34rem;
        width: 3.7rem;
        line-height: 3.3rem;
        margin: 0;
        border-radius: 0;
      }
    }

    .react-datepicker__navigation--previous {
      left: 133px;
      top: 36px;
      border: none;
      background: url(${prev}) no-repeat right center;
      width: 20px;
      height: 20px;
      outline: none;
    }
    .react-datepicker__navigation--next {
      right: 139px;
      top: 36px;
      border: none;
      background: url(${next}) no-repeat left center;
      width: 20px;
      height: 20px;
      outline: none;
    }

    .react-datepicker__day--selected {
      color: #A9D3AB !important;
      border-radius: 0 !important;
      background-color: #1F4921 !important;
      border: 2px solid #A9D3AB !important;
    }
    .react-datepicker__day--in-range {
      background: #132C14 !important;
      border-top: 2px solid #A9D3AB !important;
      border-bottom: 2px solid #A9D3AB !important;
      color: #A9D3AB !important;
    }
    .react-datepicker__day--in-selecting-rage {
      border-radius: 0 !important;
    }

    .react-datepicker .react-datepicker__month-container .react-datepicker__day {
        color: #7A7585;
        font-size: 1.34rem;
        width: 3.7rem;
        line-height: 3.3rem;
        margin: 0;
        border-radius: 0;
    }
    .react-datepicker .react-datepicker__day--selected, 
    .react-datepicker__day--range-end {
        color: #A9D3AB !important;
        border-radius: 0 !important;
        background-color: #1F4921 !important;
        outline: none;
    }
    .react-datepicker__day--selected, 
    .react-datepicker__day--in-selecting-range, 
    .react-datepicker__day--in-range, 
    .react-datepicker__month-text--selected, 
    .react-datepicker__month-text--in-selecting-range, 
    .react-datepicker__month-text--in-range, 
    .react-datepicker__quarter-text--selected, 
    .react-datepicker__quarter-text--in-selecting-range, 
    .react-datepicker__quarter-text--in-range, 
    .react-datepicker__year-text--selected, 
    .react-datepicker__year-text--in-selecting-range, 
    .react-datepicker__year-text--in-range {
      background-color: #1F4921 !important;
    }


    .react-datepicker__day-highlighted-start-date.react-datepicker__day-highlighted-end-date {
      border-radius: 10px !important;
      border: 2px solid #A9D3AB !important
    }
    .react-datepicker__day-highlighted-start-date {
      border-radius: 10px 0 0 10px !important;
      border-top: 2px solid #A9D3AB !important;
      border-left: 2px solid #A9D3AB !important;
      border-bottom: 2px solid #A9D3AB !important;
      border-right: none !important;
    }

    .react-datepicker__day-highlighted-end-date {
      border-radius: 0 10px 10px 0 !important;
      border-top: 2px solid #A9D3AB !important;
      border-right: 2px solid #A9D3AB !important;
      border-bottom: 2px solid #A9D3AB !important;
      border-left: none !important;
    }

    .react-datepicker__day--today {
      border: 2px solid #FF8181 !important;
      border-radius: 10px !important;
      position: relative;

      &:after {
        content: 'Today';
        position: absolute;
        top: -17px;
        left: 50%;
        transform: translateX(-50%);
        color: #FF8181;
        font-size: 15px;

      }
      &.react-datepicker__day-highlighted-start-date {
        border-radius: 10px 0 0 10px !important;
        border-top: 2px solid #A9D3AB !important;
        border-left: 2px solid #A9D3AB !important;
        border-bottom: 2px solid #A9D3AB !important;
        border-right: none !important;
        &.react-datepicker__day-highlighted-end-date {
          border-radius: 10px !important;
          border: 2px solid #A9D3AB !important
        }
      }
    }
  }
 `

//todo: repactoring
export default ({ setSelectDate }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

  };

  const highlightDates = [
    {
      'react-datepicker__day-highlighted-start-date': [startDate || new Date()]
    },
    {
      'react-datepicker__day-highlighted-end-date': [endDate || new Date()]
    }
  ]

  useEffect(() => {
    setSelectDate({
      start: startDate,
      end: endDate
    })
  }, [startDate, endDate]);

  return (
    <StyledDate>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        // locale="ko"
        // formatWeekDay={nameOfDay => nameOfDay.substr(0, 3)}
        useWeekdaysShort={true}
        startDate={startDate}
        endDate={endDate}
        highlightDates={highlightDates}
        selectsRange
        inline
      />
    </StyledDate>
  )
}