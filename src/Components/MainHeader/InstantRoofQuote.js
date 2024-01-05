
import React from 'react'
import { Button, FormControl, InputGroup, Form } from 'react-bootstrap'
import { FaMapMarkerAlt } from 'react-icons/fa';
import './MainHeader.css'

function InstantRoofQuote() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <Form style={{ width: "36rem" }} >
                    <div className='instant-input-div'>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1" style={{ borderRadius: "0px", backgroundColor: "transparent", borderRight: "0px" }}>
                                <FaMapMarkerAlt />
                            </InputGroup.Text>

                            <FormControl
                                name="searchInput"
                                placeholder="Enter your street address"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                style={{ borderRadius: "0px", marginRight: "2rem", borderLeft: "0px" }}
                            />

                        </InputGroup>
                        <div className='instant-note-text display-style1'>Example: 1506 BroadwayBoulder, CO 80302-6296</div>
                        <Button type="submit" style={{ backgroundColor: "#B22335", borderColor: "#B22335", borderRadius: "0px" }} id="button-addon2">
                            Submit
                        </Button>
                    </div>
                    <div className='instant-note-text display-style2'>Example: 1506 BroadwayBoulder, CO 80302-6296</div>
                </Form>
            </div>



        </div>
    );
};
export default InstantRoofQuote