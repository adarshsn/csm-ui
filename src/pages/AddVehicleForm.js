import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import request from "../../node_modules/superagent/superagent";

class AddVehicleForm extends Component {
    constructor() {
        super();

        this.state = {
            vehicleNumber: "faslfa",
            ownerEmail: "atul@jaf.ckdd",
            vehicleType:"CAR",
            vehicleModel:"MARUTI",
            insuranceNumber:"560102"
        };

        this.handleChange = this.handleChange.bind(this);
        this.submit=this.submit.bind(this);
        this.createRequest = this.createRequest.bind(this);
    }
///drop down for vehicle types.

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
    }

    submit(){
        let data = this.createRequest();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        };
        const request = new Request('http://10.177.2.243:8081/signup/signUp',options);
        const response = fetch(request);
        const status = response.status;
    }
    createRequest(){
        let formFields = {};
        formFields.email = this.state.email;
        formFields.name = this.state.name;
        formFields.contactNumber = this.state.contactNumber;
        formFields.zipCode = this.state.zipCode;
        formFields.ownerAddress = this.state.ownerAddress;
        return formFields;
    }
    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.submit} className="FormFields">


                    <div className="FormField">
                        <button className="FormField__Button mr-20">ADD VEHICLE</button>
                        <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddVehicleForm;
