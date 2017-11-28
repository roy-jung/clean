export default class {
    constructor (ms, hs) {
        this.timeMillis = ms;
        this.hours = hs;
    }
    equalsTimeMillis (ms) {
        return this.timeMillis !== null && this.timeMillis === ms;
    }
    getDate () {
        return new Date(timeMillis);
    }
}
