const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 8000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
    res.send("Hello World");
});
// Require employee routes
const employeeRoutes = require('./api/routes/employee.routes')
// Require program routes
const programRoutes = require('./api/routes/program.routes')
// using as middleware
app.use('/api/v1/employees', employeeRoutes)
app.use('/api/v1/programs', programRoutes)
// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});