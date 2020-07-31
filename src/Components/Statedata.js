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
            {
                keys.map((itm,k) => {

                    let districts = this.state.stateData[itm].districtData;
                    let district_keys = Object.keys(districts);

                    let total_active = 0;
                    let total_confirmed = 0;
                    let total_deaths = 0;
                    let total_recover = 0;
                    let district_list = [];

                    for(let x in districts){
                        total_active += districts[x].active;
                        total_confirmed += districts[x].confirmed;
                        total_deaths += districts[x].deceased;
                        total_recover += districts[x].recovered;

                        let ob = districts[x];
                        ob["district_name"] = x;//ob has all info including district name
                        district_list.push(ob);
                    }
                    // console.log(district_list);
                    

                    
                    return (
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} eventKey={k}>
                            {itm} -
                            <span className="btn-dark p-1 mr-2"> Total Cases - {total_confirmed}</span>
                            <span className="btn-dark p-1 mr-2">Active - {total_active} </span>
                            <span className="btn-dark p-1 mr-2">Recovered - {total_recover}</span>
                            <span className="btn-dark p-1 mr-2">Deaths - {total_deaths}</span>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={k}>
                          <Card.Body>
                            <table className="table table-bordered table-striped">
                              <thead>
                                <tr>
                                  <td>District</td>
                                  <td>Active</td>
                                  <td>Confirmed</td>
                                  <td>Recovered</td>
                                  <td>Deaths</td>
                                </tr>
                              </thead>
                              <tbody>
                                {district_list.map((itm, k) => {
                                  return (
                                    <tr>
                                      <td>{itm.district_name}</td>
                                      <td>{itm.confirmed}</td>
                                      <td>{itm.active}</td>
                                      <td>{itm.recovered}</td>
                                      <td>{itm.deceased}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    );

                    
                })
            }



            
            
          </Accordion>
        </div>
      </div>
    );
  }
}
export default Statedata;
