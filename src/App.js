import React, { useState } from "react";
import Icon from "./components/Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card, CardBody, Container, Button,  Row ,Col} from "reactstrap";
import "./App.css";

const items = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    items.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    //  checking  winner of the game
    
    if (items[0] === items[1] &&items[0] === items[2] &&items[0] !== "empty") {
      setWinMessage(`${items[0]} won`);
    } 
    else if (items[3] !== "empty" &&items[3] === items[4] &&items[4] === items[5]) {
      setWinMessage(`${items[3]} won`);
    } 
    else if (items[6] !== "empty" &&items[6] === items[7] &&items[7] === items[8]) {
      setWinMessage(`${items[6]} won`);
    } 
    else if (items[0] !== "empty" &&items[0] === items[3] &&items[3] === items[6]) {
      setWinMessage(`${items[0]} won`);
    } 
    else if (items[1] !== "empty" &&items[1] === items[4] &&items[4] === items[7]) {
      setWinMessage(`${items[1]} won`);
    } 
    else if (items[2] !== "empty" &&items[2] === items[5] &&items[5] === items[8]) {
      setWinMessage(`${items[2]} won`);
    } 
    else if (items[0] !== "empty" &&items[0] === items[4] &&items[4] === items[8]) {
      setWinMessage(`${items[0]} won`);
    } 
    else if (items[2] !== "empty" &&items[2] === items[4] && items[4] === items[6]
    ) {
      setWinMessage(`${items[2]} won`);
    }
    else{
      if(items.every(ele=>ele!=="empty")){
        setWinMessage(`No body won`);
      }
    }
  };

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (items[itemNumber] === "empty") {
      items[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already filled", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              
            </div>
          ) : (
            <h1 className=" text-success text-center ">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className="grid">
            {items.map((item, index) => (
              <Card color="white" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
          <Button color="success" block onClick={reloadGame} className="mt-2">
                Reload the game
              </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
