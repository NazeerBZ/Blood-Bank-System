
// import * as firebase from 'firebase';

const INTIAL_STATE = {
    forGreen: "none",
    forRed: "none"
}

export default function CollectInfo(state = INTIAL_STATE, action) {

    switch (action.type) {

        case 'ADD_ME_TO_LIST':

            // firebase.database().ref('/DonarList').push(action.donarInformation);
            // console.log(action.donarInformation);
            return state = { forGreen: action.block, forRed: action.none}

        case 'OFF_ALERT':
            return state = { forGreen: 'none', forRed: 'none' }

        case 'INVALID_FIELDS':
            return state = { forGreen: 'none', forRed: 'block' }

        default:
            return state;
    }

}