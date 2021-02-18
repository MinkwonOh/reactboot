import { Calendar, Badge } from "antd";
import React, { useState, useEffect } from "react";
import "./Todo.css";
import axios from "axios";

function CalendarPage() {
  //DB에서 가져온 todo
  const [ToDoList, setToDoList] = useState([]);

  useState(() => {
    //back get
    axios
      .get("/api/cal")
      .then((res) => {
        //가져온 값 쓰기 위해 front state에 [object,...] 형태로 저장
        setToDoList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //todo 분류하는 함수
  const getListData = (value) => {
    //가변형 함수 let 선언
    let listData;

    //todo index별 실행하는 반복문 map
    ToDoList.map((data) => {
      //DB todo 와 front ToDo 비교 후 형태 맞춰서 listdata에 저장
      if (
        data.parsed_toDoDate ==
        `${value.year()}-${
          value.month() + 1 < 10 ? `0${value.month()}` : value.month()
        }-${value.date() < 10 ? `0${value.date()}` : value.date()}`
      ) {
        listData = [{ content: data.content, type: data.type }];
      }
    });

    return listData || [];
  };

  //날짜 그리는 함수
  const dateCellRender = (value) => {
    //todos 분류하는 함수
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

  return (
    <div>
      <Calendar dateCellRender={dateCellRender} />
    </div>
  );
}

export default CalendarPage;
