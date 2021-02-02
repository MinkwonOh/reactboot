import React, { useState } from "react";
import { Layout } from "antd";

import "./CalendarPage.css";

import SideMenu from "../Comm/SideMenu/SideMenu";
import HeaderArea from "../Comm/HeaderArea/HeaderArea";
import ContentTitle from "../Comm/Contents/ContentTitle";
import Todo from "./Todo";

const { Content, Footer, Sider } = Layout;

function CalendarPage() {
  const [Collapsed, setCollapsed] = useState(false);

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
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Todo />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default CalendarPage;
