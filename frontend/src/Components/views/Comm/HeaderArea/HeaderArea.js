import { Layout } from "antd";

export default function HeaderArea() {
  const { Header } = Layout;

  return (
    <Header
      className="site-layout-background"
      style={{ padding: 0, textAlign: "center" }}
    >
      <h1>한국ㅈ리텍대학교 ㅈ성캠퍼스 학사관리시스템</h1>
    </Header>
  );
}
