import { Layout, Table } from "antd";

import "./NotificationPage.css";

import SideMenu from "../Comm/SideMenu/SideMenu";
import HeaderArea from "../Comm/HeaderArea/HeaderArea";
import ContentTitle from "../Comm/Contents/ContentTitle";

import React, { useState, useEffect } from "react";

import axios from "axios";

const { Content, Footer, Sider } = Layout;

export default function StudentPage() {
  //사이드 메뉴 바 접고 펴기 위한 state (고정)
  const [Collapsed, setCollapsed] = useState(false);

  //사이드 메뉴 바 접고 펴기 위한 함수 (고정)
  const onCollapsed = (Collapsed) => {
    setCollapsed(!Collapsed);
  };

  //DB에서 가져온 데이터 배열을 위한 state
  const [Contents, setContents] = useState([]);
  //테이블의 첫번째 컬럼 메뉴
  const columns = [
    { title: "idx", dataIndex: "idx", key: "idx" },
    { title: "작성자", dataIndex: "writer", key: "writer" },
    { title: "제목", dataIndex: "title", key: "title" },
    { title: "내용", dataIndex: "content", key: "content" },
    { title: "작성일", dataIndex: "parsed_date", key: "parsed_date" },
  ];

  //페이지가 로드 될때마다 axios로 백에 통신
  useEffect(() => {
    axios
      //모든 url 리퀘가 8080포트로 감 나중에 수정 예정
      .get("/api/noti")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setContents(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={Collapsed}
        onCollapse={() => onCollapsed(Collapsed)}
      >
        <div className="logo">
          <a href="/">Logo </a>
        </div>
        <SideMenu />
      </Sider>
      <Layout className="site-layout">
        <HeaderArea />
        <Content style={{ margin: "0 16px" }}>
          <ContentTitle />
          <Table
            columns={columns}
            dataSource={Contents}
            pagination={{ pageSize: 10 }}
          />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
