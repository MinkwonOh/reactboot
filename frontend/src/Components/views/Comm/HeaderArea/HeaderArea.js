import { Layout, Divider } from "antd";

export default function HeaderArea() {
  const { Header } = Layout;

  return (
<<<<<<< HEAD
    <Header className="site-layout-background">
      <div>
        <h2 style={{ padding: 0, textAlign: "center" }}>Kimohchoi 대학</h2>
        <h6 style={{ padding: 0, textAlign: "right" }}>
          로그인
          <Divider type="vertical" />
          <>공지사항</>
          <Divider type="vertical" />
          <>문의</>
        </h6>
      </div>
=======
    <Header
      className="site-layout-background"
      >
        <fragment>
            <div>
                <h4
                    style={{ padding: 0, textAlign: "right" }}>
                    <a href="../login">로그인</a>
                    <Divider type="vertical" />
                    공지사항
                    <Divider type="vertical" />
                    <a href="../qna">문의</a>
                </h4>
            </div>
            <div>
                <h2
                    style={{ padding: 0, textAlign: "center" }}>
                    Kimohchoi 대학
                </h2>
            </div>
        </fragment>
>>>>>>> refs/remotes/origin/master
    </Header>
  );
}
