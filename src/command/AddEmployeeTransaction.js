import Transaction from '../Transaction';
import Employee from '../Employee';
import employeeRepository from '../employeeRepository';

export default class extends Transaction {
    constructor (empId, name, address) {
        super();
        this.empId = empId;
        this.name = name;
        this.address = address;
    }
    execute () {
        const pc = this.getClassification();
        const ps = this.getSchedule();
        const pm = this.getMethod();
        const e = new Employee(this.empId, this.name, this.address, pc, ps, pm);
        employeeRepository.save(e);
    }
}
