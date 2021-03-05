import { Layout, Row, Col } from "antd";
import { Input, Space, Form, Button, Checkbox } from 'antd';

import HeaderArea from "../Comm/HeaderArea/HeaderArea";
import ContentTitle from "../Comm/Contents/ContentTitle";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LoginPage.css";



class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { id: '' ,pwd:''};
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(event) {

        //this.state = 

        /*fetch('/api/login', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
        }).then(function (response) {
            console.log(JSON.stringify(response.json))
            console.log(response.json)
            console.log(response)
        });*/

        /*axios({
            url: '/api/login',
            method: 'post',
            data: {
                id: this.state.id,
                pwd: this.state.pwd
            }
        }).then((res) => {
            console.log(res.data);
            console.log(res);
        }).catch((err) => console.log(err));*/

        console.log('1_'+this.state.id);

        axios
            .post("/api/login", { id: this.state.id, pwd: this.state.pwd })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

        /*axios
            .post(
                url: "/api/login", data: {})
        .then((res) => {
            //가져온 값 쓰기 위해 front state에 [object,...] 형태로 저장
            //setToDoList(res.data);
            console.log(res);
        })
        .catch((err) => console.log(err));*/

        event.preventDefault();

    }

    render() {

        const { Content, Footer, Sider } = Layout;

        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        };

        const onFinish = (values) => {
            console.log('Success:', values);

        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };

        /*//사이드 메뉴 바 접고 펴기 위한 state (고정)
        const [Collapsed, setCollapsed] = useState(false);

        //사이드 메뉴 바 접고 펴기 위한 함수 (고정)
        const onCollapsed = (Collapsed) => {
            setCollapsed(!Collapsed);
        };*/

        /*const onPwdChange = (event) => {
            const { target: { value } } = event;
            console.log(value);
        }*/

        return (
            <Layout style={{ minHeight: "100vh" }}>

                <Layout className="site-layout">
                    <HeaderArea />
                    <Content style={{ margin: "0 16px" }}>
                        <ContentTitle />

                        <Space direction="vertical">
                            <Row style={{ minHeight: "80vh", verticalAlign: "middle" }}>
                                <Col span={12}>
                                    <img src="" />
                                </Col>
                                <Col span={12} style={{ textAlign: "center" }}>
                                    
                                    <Form
                                        {...layout}
                                        name="basic"
                                        labelCol={{ span: 4 }}
                                        wrapperCol={{ span: 10 }}
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}

                                    >
                                        <Form.Item
                                            style={{ width: "250" }}
                                            label="Username"
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username!',
                                                },
                                            ]}
                                        >
                                            <Input value={this.state.id}/>
                                        </Form.Item>

                                        <Form.Item
                                            style={{ width: "250" }}
                                            label="Password"
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                            ]}
                                        >
                                            <Input.Password value={this.state.pwd}/>
                                        </Form.Item>

                                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                            <Checkbox>Remember me</Checkbox>
                                        </Form.Item>

                                        <Form.Item {...tailLayout}>
                                            <Button type="primary" htmlType="submit" onClick={this.submitForm}>
                                                Submit
                                        </Button>
                                        </Form.Item>
                                    </Form>
                                </Col>
                            </Row>
                        </Space>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }

}



export default LoginPage;
