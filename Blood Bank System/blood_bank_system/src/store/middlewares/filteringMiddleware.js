
import * as firebase from 'firebase';
import ActionBundle from '../../actions/actionbundle.js';


export default class filteringMiddleware {

    static filterByGivenBlood(bloodGroup) {

        return (dispatch) => {
            var items = [];
            var sortList = [];

            firebase.database().ref('/DonarList').on('value', (snap) => {
                snap.forEach((secSnap) => {

                    items.push(secSnap.val());
                })

                if (bloodGroup === 'O+') {
                    var counter = 0;

                    for (var i = 0; i < items.length; i++) {

                        if (items[i].userBlood === 'O+' || items[i].userBlood === 'O-') {

                            sortList[counter] = items[i]
                            counter++
                        }
                    }
                }
                else if (bloodGroup === 'A+') {
                    counter = 0;

                    for (i = 0; i < items.length; i++) {

                        if (items[i].userBlood === 'A+' || items[i].userBlood === 'A-' || items[i].userBlood === 'O+' || items[i].userBlood === 'O-') {

                            sortList[counter] = items[i]
                            counter++
                        }
                    }
                }
                else if (bloodGroup === 'B+') {
                    counter = 0;

                    for (i = 0; i < items.length; i++) {

                        if (items[i].userBlood === 'B+' || items[i].userBlood === 'B-' || items[i].userBlood === 'O+' || items[i].userBlood === 'O-') {

                            sortList[counter] = items[i]
                            counter++
                        }
                    }
                }
                else if (bloodGroup === 'AB+') {
                    counter = 0;

                    for (i = 0; i < items.length; i++) {

                        if (items[i].userBlood === 'B+' || items[i].userBlood === 'B-' || items[i].userBlood === 'O+' || items[i].userBlood === 'O-' || items[i].userBlood === 'A+' || items[i].userBlood === 'A-' || items[i].userBlood === 'AB+' || items[i].userBlood === 'AB-') {

                            sortList[counter] = items[i]
                            counter++
                        }
                    }
                }
                else if (bloodGroup === 'O-') {
                    counter = 0;

                    for (i = 0; i < items.length; i++) {

                        if (items[i].userBlood === 'O-') {

                            sortList[counter] = items[i]
                            counter++
                        }
                    }
                }
                else if (bloodGroup === 'A-') {
                    counter = 0;

                    for (i = 0; i < items.length; i++) {

                        if (items[i].userBlood === 'A-' || items[i].userBlood === 'O-') {

                            sortList[counter] = items[i]
                            counter++
                        }
                    }
                }
                else if (bloodGroup === 'B-') {
                    counter = 0;

                    for (i = 0; i < items.length; i++) {

                        if (items[i].userBlood === 'B-' || items[i].userBlood === 'O-') {

                            sortList[counter] = items[i]
                            counter++
                        }
                    }
                }
                else if (bloodGroup === 'AB-') {
                    counter = 0;

                    for (i = 0; i < items.length; i++) {

                        if (items[i].userBlood === 'A-' || items[i].userBlood === 'O-' || items[i].userBlood === 'AB-' || items[i].userBlood === 'B-') {

                            sortList[counter] = items[i]
                            counter++
                        }
                    }
                }


                dispatch(ActionBundle.LIST_OF_BLOODGROUPS_YOU_CAN_TAKE(sortList))
            });
        }

    }
}