import AddEmployeeTransaction from './AddEmployeeTransaction';
// import HourlyClassification from '';
// import WeaklySchedule from '';

export default class extends AddEmployeeTransaction {
    constructor (id, name, address, hourlyWage) {
        super(id, name, address);
        this.hourlyWage = hourlyWage;
    }
    getClassification () {
        return { hourlyWage: this.hourlyWage };
        // return new HourlyClassification(this.hourlyWage);
    }
    getSchedule () {
        return {};
        // return new WeaklySchedule();
    }
}
