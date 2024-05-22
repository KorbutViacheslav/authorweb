import Form from "react-bootstrap/Form";
import "./Postauthor.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const Postauthor = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="center-form">
        <h1>Post New Author</h1>
        <Form>
          <Form.Group controlId="formBasicFirstName">
            <Form.Control
              type="text"
              name="firstname"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Control
              type="text"
              name="lastname"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Post Author
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Postauthor;
