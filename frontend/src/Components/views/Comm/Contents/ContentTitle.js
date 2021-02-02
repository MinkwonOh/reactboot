import React, { useState, useEffect } from "react";
import { Breadcrumb } from "antd";

function ContentTitle() {
  const [Title, setTitle] = useState("");

  useEffect(() => {
    const title = document.location.pathname;
    console.log(title);
    switch (title) {
      case "/":
        setTitle("메인페이지");
        break;
      case "/noty":
        setTitle("공지사항");
        break;
      case "/student":
        setTitle("학생페이지");
        break;
      case "/calendar":
        setTitle("일정");
        break;

      default:
        break;
    }
  }, [Title]);

  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>{Title}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default ContentTitle;
