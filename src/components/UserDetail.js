import React, { useEffect, useState } from "react";
import { Card, Input, Select, Button, Form } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { reducer, fetchUsers } from "../others/asyncAction";
import store from "../redux/store";
import { AppInput } from "./UserDetail.style";
const UserDetail = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    city: "",
    country: "",
    isTrue: false,
  });
  const handleDropdownChange = (value) => {
    user.country = value;
  };
  store.subscribe(() => {
    if (store.getState().isTrue) {
      setUser({ isTrue: true });
    }
  });
  async function handleSubmit(event) {
    // setUser({isTrue : true});
    //console.log(event.target.value)
    store.dispatch(fetchUsers());
    localStorage.setItem("user", user.firstname);
    // onFinish();
    // let item={ firstname,lastname,email,city,country}
    // console.warn(item)
    let result = await fetch("https://dev.samarthonline.in/api/v1/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    //console.warn("result",result)
    localStorage.setItem("user-info", JSON.stringify(result));
  }
  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };
  // const onFinish = (values) => {
  //   console.log("success", values);
  // };
  // const onFinishFailed = (error) => {
  //   console.log("Failed", error);
  // };

  return (
    <div
      style={{
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
          backgroundImage: "linear-gradient(to right,pink,skyblue)",
          width: 600,
          height: 700,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form style={{ width: 400 }}>
          <h1>SIGN UP</h1>
          <Form.Item
            label="firstName"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
          >
            <AppInput
              placeholder="FirstName"
              name="firstName"
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item
            label="lastName"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
          >
            <AppInput
              placeholder="LastName"
              name="lastName"
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item
            label="email"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
          >
            <AppInput placeholder="Email" name="email" onChange={onChange} />
          </Form.Item>
          <Form.Item
            label="City"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
          >
            <AppInput placeholder="City" name="city" onChange={onChange} />
          </Form.Item>
          <Form.Item
            label="Country"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
          >
            <Select
              onChange={handleDropdownChange}
              name="country"
              defaultValue="country"
              options={[
                {
                  value: "India",
                  label: "India",
                },
                {
                  value: "U.S",
                  label: "U.S",
                },
                {
                  value: "Australia",
                  label: "Australia",
                },
              ]}
            ></Select>
          </Form.Item>
          <Form.Item
            label="IsActive"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
          >
            <CheckCircleTwoTone
              style={{ fontSize: "15px" }}
              twoToneColor={user.isTrue ? "green" : "red"}
            ></CheckCircleTwoTone>
          </Form.Item>
         
           <Form.Item>
            <Button
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 19 }}
              style={{ width: "12vw", height: "4vh" }}
              type="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default UserDetail;





//https://dummyjson.com/users/1
