const express = require('express'); 
const router = express.Router(); 
const {addEmployeesForm , addEmployees, showEmployees,editEmployeesForm,editEmployees,deleteEmployee} = require('../controls/Employees');

router.get('', showEmployees);
router.get('/addEmployees',addEmployeesForm);
router.get('/:id/editEmployee', editEmployeesForm)


router.post('/addEmployees',addEmployees);
router.put('/:id/editEmployee', editEmployees)
router.delete('/:id',deleteEmployee);



module.exports = router; 