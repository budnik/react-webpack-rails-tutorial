'use strict';

import alt from '../alt'
import SessionActions from '../actions/SessionActions'

class SessionStore {
    constructor() {
        this.bindActions(SessionActions);

        this.Session = {};
        this.errors = ["No Errors!"];
    }

    onLogin(login){
        if (login.err) {
            this.errors = login.err;
        } else {
            this.errors = [];
            this.Session = login.response.body;
        }
    }
}

export default alt.createStore(SessionStore);
