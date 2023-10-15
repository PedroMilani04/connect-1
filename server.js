const express = require('express')
const Employee = require('./dbFiles/Employee')
const dbOperation = require('./dbFiles/dbOperation')
const cors = require('cors')

/* const API_PORT = process.env.port || 5000;
const app = express();

app.use(cors());

app.get('/api', function(req, res) {
    console.log('Called');
    res.send({result: 'Hello'})
})

app.get('/quit', function(req, res) {
    console.log('Called quit');
    res.send({result: 'Bye'})
})
*/


let Pam = new Employee(105602, 'Pam', 'DFG', 29, 'Female');
let Pamr = new Employee(1, 'Parrr4rrm', 'DFG', 29, 'Female');
let Mark = new Employee(1002, 'Mark', 'Mark', 29, 'Male');

dbOperation.getEmployees().then(res => {
    console.log(res.recordset);
}) 

dbOperation.createEmployee(Pam)

//app.listen(API_PORT, () => console.log(`Listening to ${API_PORT}`)) 

