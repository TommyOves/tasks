import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is a header</h1>
            <p>Tommy Oves</p>
            <p>ovest@udel.edu</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <ul>
                <li>Hello World!</li>
                <li>Welcome to my website, thank you for visiting</li>
                <li>This is my town below!</li>
            </ul>
            <img
                src="https://static.wixstatic.com/media/d84bc7_61f3af8878f04dd4abdcf0f468e251ce~mv2.jpg/v1/fill/w_640,h_582,al_c,q_85,usm_0.66_1.00_0.01/d84bc7_61f3af8878f04dd4abdcf0f468e251ce~mv2.webp"
                alt="This is my town."
                width="300"
                height="300"
            />
            <div>
                <Container>
                    <Row>
                        <Col>
                            Column 1
                            <div
                                style={{
                                    height: 50,
                                    width: 600,
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            Column 2
                            <div
                                style={{
                                    height: 50,
                                    width: 600,
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
