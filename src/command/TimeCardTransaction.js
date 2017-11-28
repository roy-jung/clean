import employeeRepository from '../employeeRepository';
// import TimeCard from '';
export default class {
    constructor (ms, hs, id) {
        this.timeMillis = ms;
        this.hours = hs;
        this.empId = id;
    }
    execute () {
        const e = employeeRepository.findOne(this.empId);
        if (e) {
            const hc = e.getClassification();
            // hc.addTimeCard(new TimeCard(this.timeMillis, this.hours));
        } else {
            throw new Error('no such employee');
        }
    }
}
