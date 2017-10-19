
export default class ActionBundle {

    static ADD_ME_TO_LIST(B, N) {
        return {
            type: 'ADD_ME_TO_LIST',
            block: B,
            none: N
        }
    }

    static OFF_ALERT() {
        return {
            type: 'OFF_ALERT'
        }
    }

    static INVALID_FIELDS() {
        return {
            type: 'INVALID_FIELDS'
        }
    }

    static SORTING_ARRAY(item) {
        return {
            type: 'SORTING_ARRAY',
            unSortedAry: item
        }
    }

    static LIST_OF_BLOODGROUPS_YOU_CAN_TAKE(ls) {
        return {
            type: 'LIST_OF_BLOODGROUPS_YOU_CAN_TAKE',
            filtered: ls
        }
    }

    static IS_USER_CORRECT(val) {
        return {
            type: 'IS_USER_CORRECT',
            tellmeTrueFalse: val
        }
    }

    static FETCHLIST(ls) {
        return {
            type: 'FETCHLIST',
            list: ls
        }
    }
}






