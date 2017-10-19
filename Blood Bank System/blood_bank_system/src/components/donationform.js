import React from 'react';
import { Link } from 'react-router';
import ActionBundle from '../actions/actionbundle.js';
import { Store } from '../store/store.js';
import { connect } from 'react-redux';
import './style.css';
import icon from '../../icons/signout.png';
import backicon from '../../icons/back.png';
import donationformMiddleware from '../store/middlewares/donationformMiddleware.js';


function mapStateToComp(state) {
    return {
        green: state.CollectInfo.forGreen,
        red: state.CollectInfo.forRed
    }
}

function mapDispatchToComp(dispatch) {
    return {
        addDonar: (objInfo) => { Store.dispatch(donationformMiddleware.sendToDB(objInfo)) },
        off_alert: () => { Store.dispatch(ActionBundle.OFF_ALERT()) },
        invalid_fields: () => { Store.dispatch(ActionBundle.INVALID_FIELDS()) }
    }
}

class Donarinfo extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: localStorage.getItem('locallySavedName'),
            userCnic: '',
            userEmail: '',
            userContact: '',
            userAddress: '',
            userBlood: ''
        }
    }

    saveCNIC(event) {
        var textbox1 = event.target.value;
        this.setState({
            userCnic: textbox1
        })

        this.props.off_alert();
    }


    saveEmail(event) {
        var textbox2 = event.target.value;
        this.setState({
            userEmail: textbox2
        })
        this.props.off_alert();
    }

    saveContact(event) {
        var textbox3 = event.target.value;
        this.setState({
            userContact: textbox3
        })
        this.props.off_alert();
    }

    saveAddress(event) {
        var textbox4 = event.target.value;
        this.setState({
            userAddress: textbox4
        })
        this.props.off_alert();
    }

    saveBlood(event) {
        var textbox5 = event.target.value;
        this.setState({
            userBlood: textbox5
        })
        this.props.off_alert();
    }

    listMe() {
        if (this.state.userAddress !== '' && this.state.userBlood !== '' && this.state.userCnic !== '' && this.state.userContact !== '' && this.state.userEmail !== '' && this.state.userName !== '') {

            if (this.state.userEmail.search('@') !== -1 && this.state.userEmail.search('.com') !== -1) {

                this.props.addDonar(this.state)
            }
            else {
                this.props.invalid_fields()
            }
        }
        else {
            this.props.invalid_fields()
        }
    }


    render() {
        return (
            <div>
                <div className="menu" style={{ background: 'linear-gradient(to left, #e52d27 , #b31217)' }}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a href="#">Blood Bank System</a>
                        </div>
                        <div>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to={{ pathname: '/' }}><span><img src={icon} alt="signout" /> </span>Sign out</Link></li>
                                {/*<li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: '90px' }} className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">

                            <div className="well text-center" style={{ background: 'linear-gradient(to left, #e52d27 , #b31217)' }}>
                                <p style={{ fontSize: '35px', color: 'white' }}>Blood Donation Form</p>
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" onChange={this.saveCNIC.bind(this)} id="id_nome" maxLength="100" name="nome" placeholder="CNIC no." type="text" />

                                    </div>

                                    <div className="form-group">
                                        <input className="form-control" onChange={this.saveEmail.bind(this)} id="id_email" name="email" placeholder="Email" type="email" />

                                    </div>

                                    <div className="form-group">
                                        <input className="form-control" onChange={this.saveContact.bind(this)} id="id_site" name="site" placeholder="Contact no." type="text" />

                                    </div>

                                    <div className="form-group">
                                        <input className="form-control" onChange={this.saveAddress.bind(this)} id="id_assunto" maxLength="100" name="assunto" placeholder="Address" type="text" />

                                    </div>

                                    <div className="form-group">

                                        <select className="form-control form-control-selectpicker" onChange={this.saveBlood.bind(this)}>
                                            <option value="0">Blood Group</option>
                                            <option value="A+">A+</option>
                                            <option value="B+">B+</option>
                                            <option value="AB+">AB+</option>
                                            <option value="O+">O+</option>
                                            <option value="A-">A-</option>
                                            <option value="B-">B-</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O-">O-</option>
                                        </select>


                                        {/*<textarea className="form-control" cols="40" id="id_mensagem" name="mensagem" placeholder="Mensagem *" rows="10">
                                    </textarea>*/}
                                    </div>

                                    <input type="button" style={{ backgroundColor: '#1CA347', color: 'white', border: '0px' }} onClick={this.listMe.bind(this)} className="btn btn-default" value='List me' />
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="alert alert-success" style={{ display: this.props.green }}>
                        <strong>Success!</strong> Check <Link to={{ pathname: './donarslist' }} className="alert-link" onClick={this.props.off_alert}><u>Donars List</u></Link>
                    </div>

                    <div className="alert alert-danger" style={{ display: this.props.red }}>
                        <strong>Invalid Fields!</strong>
                    </div>

                    <center> <Link to={{ pathname: './donarslist' }} onClick={this.props.off_alert}><img src={backicon} alt="back" /></Link></center>
                </div>

                {/*<p>{this.props.message}</p>*/}
                {/*<button onClick={}>List me</button>*/}
                {/*<button><Link to={{ pathname: './donarslist' }}>Back</Link></button>*/}
            </div>
        )
    }
}

export const Donationform = connect(mapStateToComp, mapDispatchToComp, )(Donarinfo);

