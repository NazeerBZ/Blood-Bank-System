
import { createStore, combineReducers, applyMiddleware } from 'redux';
import CollectInfo from './reducers/collectinfo.js';
import Filter from './reducers/filter.js';
import loginReducer from './reducers/loginReducer.js';
import donarlistReducer from './reducers/donarlistReducer.js';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    CollectInfo,
    Filter,
    loginReducer,
    donarlistReducer
})

export const Store = createStore(rootReducer, applyMiddleware(thunk));