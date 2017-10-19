import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import Register from './components/register.js';
import { Login } from './components/login.js';
import { Donarlist } from './components/donarslist.js';
import { Donationform } from './components/donationform.js';
import { RequiredBlood } from './components/requiredBlood.js';
import { Provider } from 'react-redux';
import { Store } from './store/store.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDoUu7190CEx7-jKVoLJ-dKsvb_66-aLFU",
  authDomain: "blood-bank-system-fd3e1.firebaseapp.com",
  databaseURL: "https://blood-bank-system-fd3e1.firebaseio.com",
  storageBucket: "blood-bank-system-fd3e1.appspot.com",
  messagingSenderId: "1011641441644"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={Store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Login} />
        <Route path='./register' component={Register}></Route>
        <Route path='./donarslist' component={Donarlist}></Route>
        <Route path='./donationform' component={Donationform}></Route>
        <Route path='./requiredBlood' component={RequiredBlood}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
