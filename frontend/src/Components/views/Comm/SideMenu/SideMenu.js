import React from "react";
import { Menu, SubMenu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function SideMenu() {
  const { SubMenu } = Menu;

  return (
    <>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<DesktopOutlined />}>
          증명서 발급
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="학생정보시스템">
          <Menu.Item key="2">학적</Menu.Item>
          <Menu.Item key="3">
            <a href="/student">학생</a>
          </Menu.Item>
          <Menu.Item key="4">수업</Menu.Item>
          <Menu.Item key="5">성적</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="공지사항">
          <Menu.Item key="6">
            <a href="/noty">공지</a>
          </Menu.Item>
          <Menu.Item key="8">
            <a href="/calendar">일정</a>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </>
  );
}
