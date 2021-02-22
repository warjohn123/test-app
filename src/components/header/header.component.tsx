import React from "react";
import { Container, Form, FormControl, InputGroup, Navbar } from "react-bootstrap";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

export function HeaderComponent() {
    return (
        <div>
            <Navbar expand="lg" className="justify-content-between">
                <Container>
                    <Navbar.Brand href="/">
                        <div className="AppLogo">
                        </div>
                    </Navbar.Brand>
                    <Form inline>
                        <div className="SearchBarContainer">
                            <InputGroup>
                                <FormControl type="text" placeholder="Search for projects here" className="SearchBar" />
                                <InputGroup.Append>
                                    <Search></Search>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                        <div className="SearchContainer">
                            <Search></Search>
                        </div>

                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}