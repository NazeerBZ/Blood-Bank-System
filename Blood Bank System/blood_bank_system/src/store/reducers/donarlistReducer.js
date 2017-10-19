

export default function donarlistReducer(state = [], action) {

    switch (action.type) {

        case 'FETCHLIST':
            console.log(action.list);
            return state = action.list;

        default:
            return state;
    }

}