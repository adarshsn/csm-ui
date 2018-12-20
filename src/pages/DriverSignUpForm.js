import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import request from "../../node_modules/superagent/superagent";

class DriversignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: "test@gmail.co",
            name: "test",
            password:"1",
            role:"OWNER",
            hasAgreed: false
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
        const request = new Request('http://10.177.2.243:8081/signup/signUp',options);
        const response = fetch(request);
        const status = response.status;
    }
    createRequest(){
        let formFields = {};
        formFields.email = this.state.email;
        formFields.name = this.state.name;
        formFields.password = this.state.password;
        formFields.role = this.state.role;
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

export default DriversignUpForm;
