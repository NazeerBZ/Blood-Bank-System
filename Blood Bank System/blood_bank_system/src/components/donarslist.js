
import React from 'react';
import { Link } from 'react-router';
import './style.css';
import icon from '../../icons/signout.png';
import Dp from '../../images/round.png';
// import * as firebase from 'firebase';
import ActionBundle from '../actions/actionbundle.js';
import { connect } from 'react-redux';
import { Store } from '../store/store.js';
import donarlistMiddleware from '../store/middlewares/donarlistMiddleware.js';


function mapStateToComp(state) {
    return {
        wholeListOfDonar: state.donarlistReducer
    }
}

function mapDispatchToComp(dispatch) {
    return {
        fetchMeTheDonarList: () => { Store.dispatch(donarlistMiddleware.fetchList()) }
    }
}

class DonarlistComp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

    componentDidMount() {

        this.props.fetchMeTheDonarList();

        // firebase.database().ref('/DonarList').on('value', (snap) => {
        //     this.state.list = []
        //     snap.forEach((secSnap) => {

        //         this.state.list.push(secSnap.val());
        //     })
        //     console.log("componentDidMount")

        //     this.setState({
        //         list: this.state.list
        //     })
        // })
    }

    /*dynamicList() {
        return (
            <div>
                {
                    this.props.wholeListOfDonar.map((info, index) => { return <li key={index} style={{ cursor: 'pointer' }} className="list-group-item"> <div className="row"> <div className="col-xs-2 col-md-1"> <img src={Dp} className="img-circle img-responsive" alt="" /> </div> <div className="col-xs-10 col-md-11"> <div style={{ fontSize: '17px' }}><a href="#">{info.userName}</a></div> <div className="mic-info">Blood Group {info.userBlood}</div><div><span className="mic-info">Phone: </span>{info.userContact}</div><div><span className="mic-info">CNIC: </span>{info.userCnic}</div><div><span className="mic-info">Address: </span>{info.userAddress}</div>  </div> </div> </li> })
                }
            </div>
        )
    }*/

    render() {

        return (
            <div>
                {/*{console.log(this.props.wholeListOfDonar)}*/}
                <div className="menu" style={{ background: 'linear-gradient(to left, #e52d27 , #b31217)' }}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a href="#">Blood Bank System</a>
                        </div>
                        <div>
                            <ul className="nav navbar-nav navbar-right">
                                <li onClick={() => { return Store.dispatch(ActionBundle.IS_USER_CORRECT(false)) }}><Link to={{ pathname: '/' }}><span><img src={icon} alt="signout" /> </span>Sign out</Link></li>
                                {/*<li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ paddingTop: '100px' }}>
                    <div className="row">

                        <Link className="btn btn-danger" role="button" style={{ background: 'linear-gradient(to left, #e52d27 , #b31217)', fontSize: '17px', marginBottom: '10px' }} to={{ pathname: './donationform' }}>Donate Blood</Link>

                        <Link className="btn btn-danger" role="button" style={{ background: 'linear-gradient(to left, #e52d27 , #b31217)', fontSize: '17px', marginBottom: '10px', marginLeft: '5px' }} to={{ pathname: './requiredBlood' }}>Required Blood</Link>

                        <div className="panel panel-default widget">
                            <div className="panel-heading" style={{ background: 'linear-gradient(to left, #e52d27 , #b31217)' }}>
                                <h3 className="panel-title" style={{ color: 'white', fontWeight: 'bold' }}>Donars List</h3>
                                <span className="label label-info" style={{ width: '50px', fontSize: '12px' }}>{this.props.wholeListOfDonar.length}</span>
                            </div>
                            <div className="panel-body">

                                <ul className="list-group">
                                    {
                                        this.props.wholeListOfDonar.map((info, index) => { return <li key={index} style={{ cursor: 'pointer' }} className="list-group-item"> <div className="row"> <div className="col-xs-2 col-md-1"> <img src={Dp} className="img-circle img-responsive" alt="" /> </div> <div className="col-xs-10 col-md-11"> <div style={{ fontSize: '17px' }}><a href="#">{info.userName}</a></div> <div className="mic-info">Blood Group {info.userBlood}</div><div><span className="mic-info">Phone: </span>{info.userContact}</div><div><span className="mic-info">CNIC: </span>{info.userCnic}</div><div><span className="mic-info">Address: </span>{info.userAddress}</div>  </div> </div> </li> })
                                    }
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export const Donarlist = connect(mapStateToComp, mapDispatchToComp)(DonarlistComp)