import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import request from "../../node_modules/superagent/superagent";

class VehicleOwnerSignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: "test@gmail.co",
            name: "test",
            contactNumber: "test",
            zipCode: "test",
            ownerAddress: "test",
            paymentDetailsRequest:{
            bankAccountNumber:"dda",
                branchName:"sdfa",
                bankName:"fss"
        }
        };

        this.handleChange = this.handleChange.bind(this);
        this.submit=this.submit.bind(this);
        this.createRequest = this.createRequest.bind(this);
    }

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
        const request = new Request('http://10.177.2.240:8080/signup/vehicleOwner',options);
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
                        <label className="FormField__Label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name"
                               name="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input"
                               placeholder="Enter your password" name="password" value={this.state.password}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email"
                               name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="contactNumber">Contact Number</label>
                        <input type="number" id="contactNumber" className="FormField__Input" placeholder="Enter your Contact Number"
                               name="contactNumber" value={this.state.contactNumber} onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"
                                   value={this.state.hasAgreed} onChange={this.handleChange}/> I agree all statements
                            in <a href="" className="FormField__TermsLink">terms of service</a>
                        </label>
                    </div>
///////////////////////////////////
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="bankAccountNumber">Bank Account Number</label>
                        <input type="number" id="bankAccountNumber" className="FormField__Input" placeholder="Enter your bank Account Number"
                               name="paymentDetailsRequest.bankAccountNumber" value={this.state.paymentDetailsRequest.bankAccountNumber} onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="contactNumber">Branch Name</label>
                        <input type="text" id="branchName" className="FormField__Input" placeholder="Enter your branch name"
                               name="paymentDetailsRequest.branchName" value={this.state.paymentDetailsRequest.branchName} onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="bankName">Contact Number</label>
                        <input type="text" id="bankName" className="FormField__Input" placeholder="Enter your bank name"
                               name="paymentDetailsRequest.bankName" value={this.state.paymentDetailsRequest.bankName} onChange={this.handleChange}/>
                    </div>
                    //////////////////////////
                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign Up</button>
                        <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default VehicleOwnerSignUpForm;
