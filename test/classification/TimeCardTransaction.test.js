import AddHourlyEmployee from '../../src/command/AddHourlyEmployee';
import employeeRepository from '../../src/employeeRepository';
import TimeCardTransaction from '../../src/command/TimeCardTransaction';

import { assert } from 'chai';

describe('time card', () => {
    const empId = 5;
    const t = new AddHourlyEmployee(empId, 'Bill', 'Home', 15.25);
    t.execute();

    const timeMillis = Date.now();
    const hours = 8.0;

    const tct = new TimeCardTransaction(timeMills, hours, empId);
    tct.execute();

    it('hourly class time card test', () => {
        const e = employeeRepository.findOne(empId);
        assert.isNotNull(e);

        const hc = e.getClassfication();
        assert.isNotNull(hc);

        const tc = hc.getTimeCard(timeMillis);
        assert.isNotNull(tc);
        assert.equal(tc.getHours(), hours);
    });
});
