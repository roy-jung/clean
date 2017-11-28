import AddEmployeeTransaction from './AddEmployeeTransaction';
import HourlyClassification from '';
import BiWeaklySchedule from '';

export default class extends AddEmployeeTransaction {
    constructor (id, name, address, salary, commitionedRate) {
        super(id, name, address);
        this.salary = salary;
        this.commitionedRate = commitionedRate;
    }
    getClassification () {
        return new HourlyClassification(this.salary, this.commitionedRate);
    }
    getSchedule () {
        return new BiWeaklySchedule();
    }
}
