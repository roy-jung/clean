import employeeRepository from '../employeeRepository';
export default class {
    constructor (id) {
        this.empId = id;
    }
    execute () {
        employeeRepository.delete(this.empId);
    }
}
