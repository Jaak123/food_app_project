import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let formName = e.target.formName.value;
    let formEmail = e.target.formEmail.value;
    let formAddress = e.target.formAddress.value;
    let formPassword = e.target.formPassword.value;
    let formPasswordConfirm = e.target.formPasswordCheck.value;
    if (formPassword !== formPasswordConfirm) {
      console.log("password zuruutei");
    } else {
      setUser({
        name: formName,
        email: formEmail,
        address: formAddress,
        password: formPassword,
      });
    }
  };

  return (
    <div className="registerContainer">
      <h1>Бүртгүүлэх</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Нэр</Form.Label>
          <Form.Control type="name" placeholder="Нэрээ оруулна уу." />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>И-мэйл</Form.Label>
          <Form.Control type="email" placeholder="И-мэйл хаягаа оруулна уу." />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Хаяг</Form.Label>
          <Form.Control type="address" placeholder="Хаягаа оруулна уу." />
          <Form.Text className="text-muted">Жишээ: ХУД 89-р 34 тоот</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Нууц үг</Form.Label>
          <Form.Control type="password" placeholder="Нууц үгээ оруулна уу." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPasswordCheck">
          <Form.Label>Нууц үг давтах</Form.Label>
          <Form.Control type="password" placeholder="Нууц үгээ давтана уу." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            htmlFor="https://www.google.com"
            label="Үйлчилгээний нөхцөл зөвшөөрөх"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Бүртгүүлэх
        </Button>
      </Form>
    </div>
  );
}
