

// const INTIAL_STATE = {
//     unSort: [],  //getting its value using mapStateToComp()
//     sortedAry: [] // getting its value using getState()
// }

export default function Filter(state = [], action) {

    switch (action.type) {

        // case 'SORTING_ARRAY':
        //     console.log(action.unSortedAry)
        //     return Object.assign({}, state, { unSort: action.unSortedAry });

        case 'LIST_OF_BLOODGROUPS_YOU_CAN_TAKE':
            // var sortList = [];

            // console.log(action.userBloodGroup)
            // console.log(action.unSortedAryFromFB)
            // console.log(action.unSortedAryFromFB.length);

            // if (action.userBloodGroup === 'O+') {
            //     var counter = 0;

            //     for (var i = 0; i < action.unSortedAryFromFB.length; i++) {

            //         if (action.unSortedAryFromFB[i].userBlood === 'O+' || action.unSortedAryFromFB[i].userBlood === 'O-') {

            //             sortList[counter] = action.unSortedAryFromFB[i]
            //             counter++
            //         }
            //     }
            // }
            // else if (action.userBloodGroup === 'A+') {
            //      counter = 0;

            //     for (i = 0; i < action.unSortedAryFromFB.length; i++) {

            //         if (action.unSortedAryFromFB[i].userBlood === 'A+' || action.unSortedAryFromFB[i].userBlood === 'A-' || action.unSortedAryFromFB[i].userBlood === 'O+' || action.unSortedAryFromFB[i].userBlood === 'O-') {

            //             sortList[counter] = action.unSortedAryFromFB[i]
            //             counter++
            //         }
            //     }
            // }
            // else if (action.userBloodGroup === 'B+') {
            //      counter = 0;

            //     for (i = 0; i < action.unSortedAryFromFB.length; i++) {

            //         if (action.unSortedAryFromFB[i].userBlood === 'B+' || action.unSortedAryFromFB[i].userBlood === 'B-' || action.unSortedAryFromFB[i].userBlood === 'O+' || action.unSortedAryFromFB[i].userBlood === 'O-') {

            //             sortList[counter] = action.unSortedAryFromFB[i]
            //             counter++
            //         }
            //     }
            // }
            // else if (action.userBloodGroup === 'AB+') {
            //      counter = 0;

            //     for (i = 0; i < action.unSortedAryFromFB.length; i++) {

            //         if (action.unSortedAryFromFB[i].userBlood === 'B+' || action.unSortedAryFromFB[i].userBlood === 'B-' || action.unSortedAryFromFB[i].userBlood === 'O+' || action.unSortedAryFromFB[i].userBlood === 'O-' || action.unSortedAryFromFB[i].userBlood === 'A+' || action.unSortedAryFromFB[i].userBlood === 'A-' || action.unSortedAryFromFB[i].userBlood === 'AB+' || action.unSortedAryFromFB[i].userBlood === 'AB-') {

            //             sortList[counter] = action.unSortedAryFromFB[i]
            //             counter++
            //         }
            //     }
            // }
            // else if (action.userBloodGroup === 'O-') {
            //     counter = 0;

            //     for (i = 0; i < action.unSortedAryFromFB.length; i++) {

            //         if (action.unSortedAryFromFB[i].userBlood === 'O-') {

            //             sortList[counter] = action.unSortedAryFromFB[i]
            //             counter++
            //         }
            //     }
            // }
            // else if (action.userBloodGroup === 'A-') {
            //     counter = 0;

            //     for (i = 0; i < action.unSortedAryFromFB.length; i++) {

            //         if (action.unSortedAryFromFB[i].userBlood === 'A-' || action.unSortedAryFromFB[i].userBlood === 'O-') {

            //             sortList[counter] = action.unSortedAryFromFB[i]
            //             counter++
            //         }
            //     }
            // }
            // else if (action.userBloodGroup === 'B-') {
            //     counter = 0;

            //     for (i = 0; i < action.unSortedAryFromFB.length; i++) {

            //         if (action.unSortedAryFromFB[i].userBlood === 'B-' || action.unSortedAryFromFB[i].userBlood === 'O-') {

            //             sortList[counter] = action.unSortedAryFromFB[i]
            //             counter++
            //         }
            //     }
            // }
            // else if (action.userBloodGroup === 'AB-') {
            //     counter = 0;

            //     for (i = 0; i < action.unSortedAryFromFB.length; i++) {

            //         if (action.unSortedAryFromFB[i].userBlood === 'A-' || action.unSortedAryFromFB[i].userBlood === 'O-' || action.unSortedAryFromFB[i].userBlood === 'AB-' || action.unSortedAryFromFB[i].userBlood === 'B-') {

            //             sortList[counter] = action.unSortedAryFromFB[i]
            //             counter++
            //         }
            //     }
            // }

            // console.log(sortList)

            return state = action.filtered

        case 'CLEAR':
            return state = []

        default:
            return state;
    }
}
