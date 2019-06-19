//const utils = require('./utilities');

class State {
    constructor() {
        this.stateName = 'Washington';
        this.capital = 'Olympia';
    }

    getFullName() {
        return this.capital + ', ' + this.stateName;
    }
}

/*
utils.divider("State");
const state = new State();


utils.display("state: " + state.stateName);
utils.display("capital: " + state.capital);
utils.display("state and capital: " + state.getFullName());
*/

module.exports = State;
