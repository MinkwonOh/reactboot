import React, { useState } from "react";
import { Layout, Calendar } from "antd";

import ContentTitle from "./views/Comm/Contents/ContentTitle";
import "./LandingPage.css";

import SideMenu from "./views/Comm/SideMenu/SideMenu";
import HeaderArea from "./views/Comm/HeaderArea/HeaderArea";

const { Content, Footer, Sider } = Layout;

function LandingPage() {
  //사이드 메뉴 바 접고 펴기 위한 state (고정)
  const [Collapsed, setCollapsed] = useState(false);

  //사이드 메뉴 바 접고 펴기 위한 함수 (고정)
  const onCollapsed = (Collapsed) => {
    console.log(Collapsed);
    setCollapsed(!Collapsed);
  };

  const onPanelChange = (value, mode) => {
    console.log(value, mode);
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
          <div className="site-calendar-demo-card">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          ></div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default LandingPage;
