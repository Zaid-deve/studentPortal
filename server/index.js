const express = require('express');
const app = express();
const dotenv = require('dotenv');
const StudentRoute = require('./routes/student');
const ApplcationRoute = require('./routes/application');
dotenv.config();

// routes
app.use(express.json());
app.use('/student', StudentRoute)
app.use('/application', ApplcationRoute)

app.listen(process.env.PORT || 3000, process.env.HOST || '127.0.0.1', () => {
    console.log(`app running on http://${process.env.HOST || '127.0.0.1'}:${process.env.PORT || 3000}`)
})