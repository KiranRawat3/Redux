import React, { useEffect, useState } from "react";
import { Card, Select, Button, Form, Radio, Space } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { reducer, fetchUsers } from "../others/asyncAction";
import store from "../redux/store";
import { AppInput } from "./UserDetail.style";
const APIIntegration = () => {
  const { Option } = Select;
  const [user, setUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    tenantId: "",
    cardType: "",
    gender: "",
    email: "",
    contactNumber: "",
    status: "",
    roleId: "",
    firebaseId: "",
    password: "",
    address: {
      address1: "",
      address2: "",
      country: "",
      state: "",
      city: "",
    },
  });

  return (
    <div
      style={{
        backgroundColor:'lightgrey',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        hoverable
        borderd={true}
        style={{
          backgroundImage: "linear-gradient(to right,white,skyblue)",
          width: 600,
          height:'90%',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <Form style={{ width: 500 }}>
          <h1>SIGN UP</h1>
          <Form.Item
            label="FirstName:"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
          >
            <AppInput
              placeholder="FirstName"
              name="firstName"
              //onChange={onChange}
            />
          </Form.Item>
          <Form.Item
            label="MiddleName:"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
          >
            <AppInput
              placeholder="middleName"
              name="middleName"
              //onChange={onChange}
            />
          </Form.Item>
          <Form.Item
            label="LastName:"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
          >
            <AppInput
              placeholder="LastName"
              name="lastName"
              //onChange={onChange}
            />
          </Form.Item>
          <Form.Item
            label="Email"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
          >
            <AppInput
              placeholder="Email"
              name="email"
              // onChange={onChange}
            />
          </Form.Item>
          <Form.Item
            label="Contact-No:"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
          >
            <AppInput
              placeholder="Contact-number"
              name="contactNumber"
              // onChange={onChange}
            />
          </Form.Item>
          <Form.Item
            label="Password:"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
          >
            <AppInput type="password" placeholder="password" name="password" />
          </Form.Item>
          <Form.Item label="Gender">
            <Radio.Group>
              <Space direction="horizontal">
                <Radio value={1}>Male</Radio>
                <Radio value={2}>Female</Radio>
                <Radio value={3}>Others</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Address">
            <Space.Compact>
              <Form.Item name={["address", "country"]}>
                <Select placeholder="Select country">
                  <Option value="India">India</Option>
                  <Option value="U.S">U.S</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <AppInput
                  style={{
                   height: "30px",
                  }}
                  placeholder="input State"
                ></AppInput>
              </Form.Item>
              <Form.Item>
                <AppInput
                  style={{
                   height: "30px",
                  }}
                  placeholder="input city"
                ></AppInput>
              </Form.Item>
              <Form.Item>
                <AppInput
                  style={{
                   height: "30px",
                  }}
                  placeholder="input street"
                ></AppInput>
              </Form.Item>
            </Space.Compact>
          </Form.Item>
          <Form.Item
            label="Status"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
          >
            <CheckCircleTwoTone
              style={{ fontSize: "15px" }}
              twoToneColor={user.isTrue ? "green" : "red"}
            ></CheckCircleTwoTone>
          </Form.Item>
          <Form.Item>
            <Button style={{ width: "20vw", height: "4vh" }} type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default APIIntegration;









//https://dummyjson.com/users/1
// "firstName": "kim",
// 3 "middleName": "Doe",
// 4 "lastName": "Son",
// 5 "tenantId": null,
// 6 "cardType": "care",
// 7 "gender": "male",
// 8 "email": "kim.doe@example.com",
// 9 "contactNumber": "9988136010",
// 10 "status": "active",
// 11 "roleId": "7a846500-714c-4640-9674-a168e18cf732",
// 12 "firebaseId": null,
// 13 "password": "P@ssw02rd@020",
// 14 "address": {
// 15 "address1": "Street 3",
// 16 "address2": null,
// 17 "country": "India",
// 18 "state": "Uttar Pradesh",
// 19
// "city": "Noida"
