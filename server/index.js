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

const host = process.env.production ? '0.0.0.0' : process.env.HOST

app.listen(process.env.PORT || 3000, host, () => {
    console.log(`app running on http://${host}:${process.env.PORT || 3000}`)
})