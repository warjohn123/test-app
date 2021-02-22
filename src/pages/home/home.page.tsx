import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { HeaderComponent } from "../../components/header/header.component";
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import { TabsComponent } from "../../components/tabs/tabs.component";
import { MobileTabsComponent } from "../../components/mobile-tabs/mobile-tabs.component";

export function HomePage() {

    return (
        <div>
            <HeaderComponent></HeaderComponent>

            <Container style={{ marginTop: '30px', marginBottom: '50px' }}>
                <Row>
                    <Col md="2" className="TabsCol">
                        <TabsComponent></TabsComponent>
                    </Col>
                    <Col md="10">
                        <div className="PageTitle">
                            Dashboard
                        </div>
                        <div className="Greeting">
                            Hello, Derek Roye!
                        </div>
                        <div className="PageDescription">
                            Planning to have tiles installed at your place?<br></br>
                            Get the best service for tile installation at your place in just few simple steps with The Hudson Valley.
                        </div>

                        <Row className="CardsContainer">
                            <Col md="4" sm="6" xs="6" style={{ marginBottom: '44px' }}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={img1} />
                                    <Card.Body>
                                        <Card.Title>My Information</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="4" sm="6" xs="6" style={{ marginBottom: '44px' }}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={img2} />
                                    <Card.Body>
                                        <Card.Title>New project</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="4" sm="6" xs="6" style={{ marginBottom: '44px' }}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={img3} />
                                    <Card.Body>
                                        <Card.Title>Past Projects</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="4" sm="6" xs="6" style={{ marginBottom: '44px' }}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={img4} />
                                    <Card.Body>
                                        <Card.Title>Projects In Progress</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </Container>

            <MobileTabsComponent></MobileTabsComponent>
        </div>
    )
}