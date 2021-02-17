import { Calendar, Badge } from "antd";
import React, { useState, useEffect } from "react";
import "./Todo.css";
import axios from "axios";

function CalendarPage() {
  const [ToDoList, setToDoList] = useState([]);

  useState(() => {
    axios
      .get("/api/cal")
      .then((res) => {
        console.log("testDate", res.data);
        setToDoList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const getListData = (value) => {
    console.log("listValue", value);
    // console.log("value.date", value.date());
    // console.log(
    //   "year,month,date",
    //   value.year(),
    //   value.month() + 1,
    //   value.date()
    // );

    let listData;

    ToDoList.map((data) => {
      console.log(data);
      console.log(data.parsed_toDoDate);
      console.log(
        "year,month,date",
        `${value.year()}-${value.month() + 1}-${value.date()}`
      );
      if (
        data.parsed_toDoDate ==
        `${value.year()}-${
          value.month() + 1 < 10 ? `0${value.month()}` : value.month()
        }-${value.date() < 10 ? `0${value.date()}` : value.date()}`
      ) {
        listData = [{ content: data.content, type: data.type }];
        console.log("listData", listData);
      }
    });

    return listData || [];
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);

    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const getMonthData = (value) => {
    console.log("monthValue", value);
    if (value.month() === 8) {
      return 123123;
    }
  };

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  return (
    <div>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </div>
  );
}

export default CalendarPage;
