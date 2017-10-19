
import React from 'react';
import { Link } from 'react-router';
import './style.css';
import * as firebase from 'firebase';

export default class Register extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            nameTextbox: '',
            emailTextbox: '',
            passwordTextbox: '',
            confirmTextbox: ''
        }
    }

    saveName(event) {
        var name = event.target.value;
        this.setState({
            nameTextbox: name
        })
    }

    saveEmail(event) {
        var email = event.target.value;
        this.setState({
            emailTextbox: email
        })
    }

    savePassword(event) {
        var password = event.target.value;
        this.setState({
            passwordTextbox: password
        })
    }

    saveConfirmPassword(event) {
        var Confpassword = event.target.value;
        this.setState({
            confirmTextbox: Confpassword
        })
    }

    saveAllToDB() {

        if (this.state.nameTextbox !== '' && this.state.emailTextbox !== '' && this.state.passwordTextbox !== '' && this.state.confirmTextbox !== '') {

            if (this.state.emailTextbox.search('@') !== -1 && this.state.emailTextbox.search('.com') !== -1) {

                var obj = {
                    userName: this.state.nameTextbox,
                    userEmail: this.state.emailTextbox,
                    userPass: this.state.passwordTextbox
                }
                // console.log(obj);

                firebase.database().ref().push(obj);

                this.setState({
                    nameTextbox: '',
                    emailTextbox: '',
                    passwordTextbox: '',
                    confirmTextbox: ''
                })

                alert("Successfully Registered!! Now Try Login");
            }
            else {
                alert('Invalid Fields');
            }
        }
        else {
            alert('Invalid Fields');
        }
    }

    render() {
        return (
            <div>
                <div className="container" style={{ marginTop: '90px' }}>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="panel panel-login" style={{ background: 'linear-gradient(to left, #e52d27 , #b31217)' }}>
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            {/*<a href="#" className="active" id="login-form-link">Login</a>*/}
                                            <Link id="login-form-link" to={{ pathname: '/' }}>Login</Link>
                                        </div>
                                        <div className="col-xs-6">
                                            <a className="active" id="register-form-link" style={{ cursor: 'pointer' }}>Register</a>
                                            {/*<Link id="register-form-link" to={{ pathname: './register' }}>register</Link>*/}
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <form id="register-form" role="form">
                                                <div className="form-group">
                                                    <input type="text" onChange={this.saveName.bind(this)} name="username" id="username" className="form-control" placeholder="Username" value={this.state.nameTextbox} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" onChange={this.saveEmail.bind(this)} name="email" id="email" className="form-control" placeholder="Email Address" value={this.state.emailTextbox} required='required' />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" onChange={this.savePassword.bind(this)} name="password" id="password" className="form-control" placeholder="Password" value={this.state.passwordTextbox} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" onChange={this.saveConfirmPassword.bind(this)} name="confirm-password" id="confirm-password" className="form-control" placeholder="Confirm Password" value={this.state.confirmTextbox} />
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-sm-offset-3">
                                                            {/*<input type="submit" style={{ backgroundColor: '#1CA347', color: 'white' }} name="register-submit" id="register-submit" className="form-control btn btn-register" value="Register Now" />*/}

                                                            <Link id="register-submit" style={{ backgroundColor: '#1CA347', color: 'white' }} to={{ pathname: './register' }} className="form-control btn btn-register" onClick={this.saveAllToDB.bind(this)}>Register Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }

}