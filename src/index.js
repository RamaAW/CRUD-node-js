require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { path } = require('express/lib/application');
const { handle } = require('express/lib/router');
const usersRoutes = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');
const req = require('express/lib/request.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static('public/images'))

app.use('/users', usersRoutes);

// app.use((req, res, next) =>{
//     console.log('middleware kedua');
//     next();
// });

// app.method(path, handler);
// app.use("/", (req, res, next) => {
//     res.send('Hello World');
// });

// app.get("/", (req, res) => {
//     res.json({
//         Method: "GET"
//     });
// });

// app.post("/", (req, res) => {
//     res.send('Hello POST Method');
// });

app.listen(PORT, () => {
    console.log(`Server run successfully on port ${PORT}`);
});