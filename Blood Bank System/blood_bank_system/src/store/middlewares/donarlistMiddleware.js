

import * as firebase from 'firebase';
import ActionBundle from '../../actions/actionbundle.js';

export default class donarlistMiddleware {

    static fetchList() {

        return (dispatch) => {
            var list = []
            firebase.database().ref('/DonarList').on('value', (snap) => {
                list = [] // clearing list
                snap.forEach((secSnap) => {

                    list.push(secSnap.val());
                })
                console.log(list)
                dispatch(ActionBundle.FETCHLIST(list));
            })
        }

    }
}