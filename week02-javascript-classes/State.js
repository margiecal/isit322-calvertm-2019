const display = require('./utilities').display;

class State {
    constructor() {
        this.stateName = 'Washington';
        this.capital = 'Olympia';
    }

    getFullName() {
        return this.capital + ', ' + this.stateName;
    }
}

const state = new State();
display(state.stateName);
display(state.capital);
display(state.getFullName());
