import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import "./Dashboard.css";

const Dashboard = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/authors");
        const data = await response.json();
        setAuthors(data);
      } catch (error) {
        console.log("Error fetching authors:", error.massage);
      }
    };
    fetchAuthors();
  }, []);
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="text-center">Authors</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th className="action-column">Action</th>
                </tr>
              </thead>
              <tbody>
                {authors.map((author) => (
                  <tr key={author.id}>
                    <td>{author.firstName}</td>
                    <td>{author.lastName}</td>
                    <td>
                      <Button variant="outline-secondary">Update</Button>{" "}
                      <Button variant="outline-danger">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Dashboard;
