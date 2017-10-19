

import * as firebase from 'firebase';
import ActionBundle from '../../actions/actionbundle.js';

export default class donationformMiddleware {

    static sendToDB(objInfo) {
        return (dispatch) => {
            console.log(objInfo);
            firebase.database().ref('/DonarList').push(objInfo);
            dispatch(ActionBundle.ADD_ME_TO_LIST('block', 'none'))
        }

    }
}