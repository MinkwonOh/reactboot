import { Layout, Divider } from "antd";

export default function HeaderArea() {
  const { Header } = Layout;

  return (
    <Header
      className="site-layout-background"
      >
        <fragment>
            <div>
                <h6
                    style={{ padding: 0, textAlign: "right" }}>
                    <a href="../login">로그인</a>
                    <Divider type="vertical" />
                    공지사항
                    <Divider type="vertical" />
                    <a href="../qna">문의</a>
                </h6>
            </div>
            <div>
                <h2
                    style={{ padding: 0, textAlign: "center" }}>
                    Kimohchoi 대학
                </h2>
            </div>
        </fragment>
    </Header>
  );
}
