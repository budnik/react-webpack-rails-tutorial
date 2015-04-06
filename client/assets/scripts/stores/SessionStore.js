'use strict';

import alt from '../alt'
import SessionActions from '../actions/SessionActions'

class SessionStore {
    constructor() {
        this.bindActions(SessionActions);

        this.session = {};
        this.errors = [];
    }

    onLogin(login){
        if (login.err) {
            this.errors = login.err;
        } else {
            this.errors = [];

            this.session = login.response.body;
        }
    }
}

export default alt.createStore(SessionStore);
