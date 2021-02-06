import { Layout, Divider } from "antd";

export default function HeaderArea() {
  const { Header } = Layout;

  return (
    <Header
      className="site-layout-background"
    >
      <div>
        <h6
          style={{ padding: 0, textAlign: "right" }}>
          로그인
        <Divider type="vertical" />
          <>공지사항</>
          <Divider type="vertical" />
          <>문의</>
        </h6>
        <h2
          style={{ padding: 0, textAlign: "center" }}>
          Kimohchoi 대학
      </h2>
      </div>
    </Header>
  );
}
