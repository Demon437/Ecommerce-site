import axios from "axios";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

function Register() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!name.trim()) tempErrors.name = "Name is required.";
    if (!email.trim()) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email))
      tempErrors.email = "Email is invalid.";
    if (!pass.trim()) tempErrors.pass = "Password is required.";
    else if (pass.length < 6)
      tempErrors.pass = "Password must be at least 6 characters.";
    if (!mobile.trim()) tempErrors.mobile = "Mobile number is required.";
    else if (!/^\d{10}$/.test(mobile))
      tempErrors.mobile = "Mobile number must be 10 digits.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleApi = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const url = "http://localhost:4000/register";
      const formData = { uname: name, upass: pass, uemail: email, umobile: mobile };
      const response = await axios.post(url, formData);
      alert(response.data.message || "Registration successful!");
      setName("");
      setPass("");
      setEmail("");
      setMobile("");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #ff7e5f, #feb47b)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Container
        style={{
          background: "#fff",
          borderRadius: "15px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          padding: "30px",
          width: "40%",
        }}
      >
        <h3 className="text-center mb-4" style={{ color: "#333" }}>
          Register
        </h3>
        <Form onSubmit={handleApi}>
          {[
            { label: "Name", value: name, onChange: setName, error: errors.name, type: "text" },
            { label: "Password", value: pass, onChange: setPass, error: errors.pass, type: "password" },
            { label: "Email", value: email, onChange: setEmail, error: errors.email, type: "email" },
            { label: "Mobile", value: mobile, onChange: setMobile, error: errors.mobile, type: "text" },
          ].map((field, index) => (
            <Form.Group
              className="mb-3 d-flex align-items-center"
              controlId={`form${field.label}`}
              key={index}
              style={{ gap: "10px" }}
            >
              <Form.Label
                style={{
                  width: "100px",
                  margin: 0,
                  textAlign: "right",
                  fontWeight: "bold",
                }}
              >
                {field.label}:
              </Form.Label>
              <Form.Control
                type={field.type}
                placeholder={`Enter your ${field.label.toLowerCase()}`}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                isInvalid={!!field.error}
                style={{ flex: "1" }}
              />
              <Form.Control.Feedback type="invalid">
                {field.error}
              </Form.Control.Feedback>
            </Form.Group>
          ))}
          <Button
            variant="primary"
            type="submit"
            style={{ width: "100%" }}
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                {"  "}Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
