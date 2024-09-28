import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Form, Input } from "antd";
import { Link } from "react-router-dom";
function Signup() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Flex
      justify="center"
      align="center"
      style={{ height: "100vh", backgroundColor: "#f0f0f0" }}
    >
      <Card
        title={
          <Flex gap={10}>
            {/* <LockOutlined style={{ fontSize: "20px", color: "red" }} /> */}
            Login
          </Flex>
        }
        bordered={true}
        style={{ width: 300 }}
      >
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          style={{
            maxWidth: 360,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Login
            </Button>   
            or <Link to={"/auth/signup"}>Sign Up</Link>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
}

export default Signup;