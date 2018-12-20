import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import request from "../../node_modules/superagent/superagent";
import { makeApiRequest } from '../pages/apiRequest';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            formFields: {email: "email11452098765@gmail.co",

                name: "adarsh115421dvbnq",

                contactNumber: "44a1w2qwegf",
                zipCode: "87sgfga",
                ownerAddress: "andgg"
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.submit=this.submit(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }


    submit(data){
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
    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.submit(this.state.formFields)} className="FormFields">
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

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign Up</button>
                        <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
