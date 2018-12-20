import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Router, browserHistory } from 'react-router'


class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signIn=this.signIn.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    signIn(){
        let data = this.createRequest();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        const options = {
            method: 'GET',
            headers,
            body: JSON.stringify(data)
        };
        const request = new Request('signin api',options);
        const response = fetch(request);
        const role = response.role;

        if(role === 'Owner'){
            ///link to driver owner page
            {/*<Route path="owner/:process" component={ownerpagename} onEnter={requireAuth}/>*/}
        }else {
            //driver page
            //send the email to that page...

        }
    }
    createRequest(){
        let formFields = {};
        formFields.email = this.state.email;
        formFields.password = this.state.password;
        return formFields;
    }
//when we click on the sign in button we need to navigate to
// different page and we will send the email id for the vehicle choosing..

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.signIn} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20" onClick={this.signIn}>Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;
