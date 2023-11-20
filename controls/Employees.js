const Employees = require('../model/Employees'); 

module.exports.addEmployeesForm = function(req,res){
    res.render('Employees/addEmployees');
}
module.exports.addEmployees = async function(req,res){
    const data = req.body;
    // console.log(data);
    const EmployeeData = new Employees(data); 
    await EmployeeData.save(); 
    res.redirect('')
}
module.exports.showEmployees = async function(req,res){
    const data = await Employees.find();
    // console.log(data);
    res.render('Employees/showEmployees',{data})
}
module.exports.editEmployeesForm = async function(req,res){
    const {id} = req.params
    const data = await Employees.findById(id); 
    res.render('Employees/editEmployees',{data})
}
module.exports.editEmployees = async function(req,res){
    const {id} = req.params; 
    const data = req.body; 
    const updatedData = await Employees.findByIdAndUpdate(id, data , {runValidators:true}); 
    await updatedData.save(); 
    res.redirect('/employees')
}
module.exports.deleteEmployee = async function(req,res){
    const {id} = req.params; 
    await Employees.findByIdAndDelete(id); 
    res.redirect('/employees');
}