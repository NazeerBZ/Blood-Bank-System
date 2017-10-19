
import React from 'react';
import { Link } from 'react-router';
import icon from '../../icons/signout.png';
import Dp from '../../images/round.png';
// import * as firebase from 'firebase';
// import ActionBundle from '../actions/actionbundle.js';
import { Store } from '../store/store.js';
import { connect } from 'react-redux';
import filteringMiddleware from '../store/middlewares/filteringMiddleware.js';



function mapStateToComp(state) {
    return {
        // unSorted: state.Filter.unSort
        sorted: state.Filter
    }
}

function mapDispatchToComp(dispatch) {
    return {
        // sorting_array: (item) => { Store.dispatch(ActionBundle.SORTING_ARRAY(item)) },
        // send_selected_blood: (Bval, unSt) => { Store.dispatch(ActionBundle.SEND_SELECTED_BLOOD(Bval, unSt)) }
        filterBySelectedBlood: (Bval) => { Store.dispatch(filteringMiddleware.filterByGivenBlood(Bval)) }
    }
}


class RequiredBloodComp extends React.Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         list: []
    //     }
    // }

    // componentDidMount() {
    //     var item = [];
    //     firebase.database().ref('/DonarList').on('value', (snap) => {
    //         snap.forEach((secSnap) => {

    //             item.push(secSnap.val());
    //         })

    //         this.getThatAry(item);
    //     });

    // }

    // getThatAry(item) {

    //     this.props.sorting_array(item);
    // }

    /*dynamicList() {
        return (
            <div>
                {
                    this.state.list.map((info, index) => { return <li key={index} style={{ cursor: 'pointer' }} className="list-group-item"> <div className="row"> <div className="col-xs-2 col-md-1"> <img src={Dp} className="img-circle img-responsive" alt="" /> </div> <div className="col-xs-10 col-md-11"> <div style={{ fontSize: '17px' }}><a href="http://bootsnipp.com/BhaumikPatel/snippets/Obgj">{info.userName}</a></div> <div> <span className="mic-info">Blood Group: </span>{info.userBlood}</div><div><span className="mic-info">Phone: </span>{info.userContact}</div><div><span className="mic-info">CNIC: </span>{info.userCnic}</div><div><span className="mic-info">Address: </span>{info.userAddress}</div>  </div> </div> </li> })
                }
            </div>
        )
    }*/

    clearList() {
        Store.dispatch({ type: 'CLEAR' })
    }

    getDDValue(event) {

        var Bval = event.target.value;
        this.props.filterBySelectedBlood(Bval);

        // this.setState({
        //     list: this.props.sorted
        // })

        // this.setState({
        //     list: Store.getState().Filter.sortedAry
        // })

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
                                <li onClick={this.clearList.bind(this)}><Link to={{ pathname: '/' }}><span><img src={icon} alt="signout" /> </span>Sign out</Link></li>
                                {/*<li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ paddingTop: '80px' }}>
                    <div className="row">

                        <Link className="btn btn-danger" role="button" style={{ background: 'linear-gradient(to left, #e52d27 , #b31217)', fontSize: '17px', marginBottom: '10px', marginLeft: '5px' }} to={{ pathname: './donarslist' }} onClick={this.clearList.bind(this)}>Back</Link>

                        <div className="form-group" style={{ marginBottom: '40px', width: '350px' }}>

                            <select className="form-control form-control-selectpicker" onChange={this.getDDValue.bind(this)}>
                                <option value="0">Recipient Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="B+">B+</option>
                                <option value="AB+">AB+</option>
                                <option value="O+">O+</option>
                                <option value="A-">A-</option>
                                <option value="B-">B-</option>
                                <option value="AB-">AB-</option>
                                <option value="O-">O-</option>
                            </select>

                        </div>
                        <div className="panel panel-default widget">
                            <div className="panel-heading" style={{ background: 'linear-gradient(to left, #e52d27 , #b31217)' }}>
                                <h3 className="panel-title" style={{ color: 'white', fontWeight: 'bold' }}>Matching Blood Group</h3>
                                <span className="label label-info" style={{ width: '50px', fontSize: '12px' }}>{this.props.sorted.length}</span>
                            </div>
                            <div className="panel-body">

                                <ul className="list-group">
                                    {/*{this.dynamicList()}*/}
                                    {
                                        this.props.sorted.map((info, index) => { return <li key={index} style={{ cursor: 'pointer' }} className="list-group-item"> <div className="row"> <div className="col-xs-2 col-md-1"> <img src={Dp} className="img-circle img-responsive" alt="" /> </div> <div className="col-xs-10 col-md-11"> <div style={{ fontSize: '17px' }}><a href="http://bootsnipp.com/BhaumikPatel/snippets/Obgj">{info.userName}</a></div> <div> <span className="mic-info">Blood Group: </span>{info.userBlood}</div><div><span className="mic-info">Phone: </span>{info.userContact}</div><div><span className="mic-info">CNIC: </span>{info.userCnic}</div><div><span className="mic-info">Address: </span>{info.userAddress}</div>  </div> </div> </li> })
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

export const RequiredBlood = connect(mapStateToComp, mapDispatchToComp)(RequiredBloodComp);




