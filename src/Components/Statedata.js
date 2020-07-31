import React, { Component } from "react";
import {Card,Button,Accordion} from 'react-bootstrap';
import Axios from "axios";

class Statedata extends Component {

    constructor(){
        super();
        this.state = {
            stateData :{}
        }
    }

    componentDidMount(){
        Axios.get("https://api.covid19india.org/state_district_wise.json").then(response => {
            
            this.setState({stateData:response.data})
        });
    }

  render() {
    let keys = Object.keys(this.state.stateData);// array of keys

    return (
      <div className="row">
        <div className="col-md-12">
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            
          </Accordion>
        </div>
      </div>
    );
  }
}
export default Statedata;
