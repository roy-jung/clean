export default (() => {
    const map = new Map();
    class employeeRepository {
        save (e) {
            map.set(e.empId, e);
        }
        findOne (id) {
            return map.get(id) || null;
        }
        delete (id) {
            return map.delete(id);
        }
    }
    return new employeeRepository();
})();
