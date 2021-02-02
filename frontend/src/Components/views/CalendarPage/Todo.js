import { Calendar, Badge } from "antd";
import React from "react";
import "./Todo.css";

function CalendarPage() {
  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: "warning", content: "체육대회" },
          { type: "success", content: "중간고사" },
        ];
        break;
      case 10:
        listData = [{ type: "warning", content: "개강" }];
        break;
      case 15:
        listData = [
          { type: "warning", content: "기말고사" },
          { type: "error", content: "종강" },
        ];
        break;
      default:
    }
    return listData || [];
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    console.log("listVAlue", value);
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
