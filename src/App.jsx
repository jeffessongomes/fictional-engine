import { useState, useEffect } from "react";

import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCard()
  }, [])

  const getCard = async () => {
    fetch(
      "https://raw.githubusercontent.com/jeffessongomes/fictional-engine/master/data.json",
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json', // Defina o cabeçalho Accept como application/json
          // Outros cabeçalhos personalizados, se necessário
        },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="navmenu-web7">
          7Web7 - Your Dream Cars
      </div>
      <Container className="container-web7">
        <Row xs={2} md={4} lg={6}>
          {data.map((item) => (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item?.image} />
                <Card.Body className="card-content">
                  <Card.Title>{item?.name}</Card.Title>
                  <Card.Text>{item?.description}</Card.Text>
                  <a href={item?.link} className="btn-web7 btn-success-web7" target="_blank">PARTICIPAR</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
