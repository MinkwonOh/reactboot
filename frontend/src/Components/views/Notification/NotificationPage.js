import { Layout, Pagination, Table } from "antd";

import "./NotificationPage.css";

import SideMenu from "../Comm/SideMenu/SideMenu";
import HeaderArea from "../Comm/HeaderArea/HeaderArea";
import ContentTitle from "../Comm/Contents/ContentTitle";

import React, { useState } from "react";

const { Content, Footer, Sider } = Layout;

export default function StudentPage() {
  const [Collapsed, setCollapsed] = useState(false);

  const [Contents, setContents] = useState([
    { num: 1, noti: "공지1" },
    { num: 2, noti: "공지2" },
    { num: 3, noti: "공지3" },
    { num: 4, noti: "공지4" },
    { num: 5, noti: "공지5" },
    { num: 6, noti: "공지6" },
    { num: 7, noti: "공지7" },
    { num: 8, noti: "공지8" },
    { num: 9, noti: "공지9" },
    { num: 10, noti: "공지10" },
    { num: 11, noti: "공지11" },
    { num: 12, noti: "공지12" },
    { num: 13, noti: "공지13" },
    { num: 14, noti: "공지14" },
    { num: 15, noti: "공지15" },
    { num: 16, noti: "공지16" },
    { num: 17, noti: "공지17" },
    { num: 18, noti: "공지18" },
    { num: 19, noti: "공지19" },
    { num: 20, noti: "공지20" },
  ]);
  const columns = [
    { title: "num", dataIndex: "num", key: "num" },
    { title: "공지", dataIndex: "noti", key: "noti" },
  ];

  const onCollapsed = (Collapsed) => {
    console.log(Collapsed);
    setCollapsed(!Collapsed);
  };

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
