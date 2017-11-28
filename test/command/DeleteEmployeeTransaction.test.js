import employeeRepository from '../../src/employeeRepository';
import AddSalariedEmployee from '../../src/command/AddSalariedEmployee';
import DeleteEmployeeTransaction from '../../src/command/DeleteEmployeeTransaction';
import { assert } from 'chai';

describe('delete employee', () => {
    const empId = 4;
    const t = new AddSalariedEmployee(empId, 'Lance', 'Home', 2500);
    t.execute();

    it('delete employee works', () => {
        const dt = new DeleteEmployeeTransaction(empId);
        dt.execute();

        assert.isNull(employeeRepository.findOne(empId));
    });
});
