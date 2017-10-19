

export default function loginReducer(state = false, action) {

    switch (action.type) {

         case 'IS_USER_CORRECT':
          return state = action.tellmeTrueFalse

        default:
            return state;
    }

}