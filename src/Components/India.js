import React , {Component} from 'react';
import {Card} from 'react-bootstrap';
import Statedata from "./Statedata";




class India extends Component {

    
    render() {
        return (
          <div className="row ">
            <div className="col-md-12">
              <img src="https://www.countryflags.io/in/flat/64.png" />
              <h3>India</h3>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                  <Card
                    className="badge badge-primary"
                    style={{ width: "18rem" }}
                  >
                    <Card.Body>
                      <Card.Title>TOTAL CASES</Card.Title>
                      <h3>195682</h3>

                      <Card.Text>[Today : 25]</Card.Text>
                    </Card.Body>
                  </Card>
                </div>

                <div className="col-md-3">
                  <Card
                    className="badge badge-warning"
                    style={{ width: "18rem" }}
                  >
                    <Card.Body>
                      <Card.Title>ACTIVE CASES</Card.Title>
                      <h3>195682</h3>
                      <Card.Text>[Today : 25]</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-3">
                  <Card
                    className="badge badge-success"
                    style={{ width: "18rem" }}
                  >
                    <Card.Body>
                      <Card.Title>RECOVERED</Card.Title>
                      <h3>195682</h3>

                      <Card.Text>[Today : 25]</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-3">
                  <Card
                    className="badge badge-danger"
                    style={{ width: "18rem" }}
                  >
                    <Card.Body>
                      <Card.Title>TOTAL DEATHS</Card.Title>
                      <h3>195682</h3>

                      <Card.Text>[Today : 25]</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>

            <div className="col-md-12">
                <Statedata />
            </div>
          </div>
        );
    }
}
export default India;