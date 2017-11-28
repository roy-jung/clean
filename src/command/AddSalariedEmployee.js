import AddEmployeeTransaction from './AddEmployeeTransaction';
/* import SalaryClassification from '';
import MonthlySchedule from '';
 */
export default class extends AddEmployeeTransaction {
    constructor (id, name, address, salary) {
        super(id, name, address);
        this.salary = salary;
    }
    getClassification () {
        return { salary: this.salary };
        // return new SalaryClassification(this.salary);
    }
    getSchedule () {
        return {};
        // return new MonthlySchedule();
    }
    getMethod () {
        return {};
    }
}
