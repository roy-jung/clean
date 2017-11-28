import AddSalariedEmployee from '../../src/command/AddSalariedEmployee';
import employeeRepository from '../../src/employeeRepository';
import { assert } from 'chai';

describe('AddSalariedEmployee Test', () => {
    const empId = 1;
    const name = 'Bob';
    const address = 'Home';
    const salary = 1000.0;
    const t = new AddSalariedEmployee(empId, name, address, salary);
    t.execute();

    const e = employeeRepository.findOne(empId);
    it('employee informations', () => {
        assert.isNotNull(e);
        assert.equal(e.name, name);
        assert.equal(e.address, address);
    });

    it('employee classification', () => {
        const c = e.classification;
        assert.isNotNull(c);
        assert.equal(c.salary, salary);
    });

    it('pay schedule', () => {
        const s = e.schedule;
        assert.isNotNull(s);
    });

    it('method', () => {
        const m = e.method;
        assert.isNotNull(m);
    });
});
