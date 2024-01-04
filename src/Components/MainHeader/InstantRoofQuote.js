
import React from 'react'
import { Button, FormControl, InputGroup, Form } from 'react-bootstrap'
import { FaMapMarkerAlt } from 'react-icons/fa';

function InstantRoofQuote() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <Form style={{ width: "36rem" }} >
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1">
                            <FaMapMarkerAlt />
                        </InputGroup.Text>
                        <FormControl
                            name="searchInput"
                            placeholder="Enter village or city or capital name"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                        />
                        <Button type="submit" style={{backgroundColor: "#B22335", borderColor: "#B22335"}} id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                </Form>
            </div>
            <div style={{ color: "rgb(101, 101, 101)", fontSize: "18px", fontWeight: "500", marginBottom: "4vh" }}>
                example: Hyderabad</div>


        </div>
    );
};
export default InstantRoofQuote