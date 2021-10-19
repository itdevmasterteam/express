//importing express
const bodyParser = require('body-parser');

//importing fs module
const fs = require('fs')

const express = require('express');
//invoking express function
const app = express();
const empRoutes = require('./routes/employee.route');
app.use(bodyParser.json());


//logger method
const logger = (req, res, next) => {
    let actualRequest = `${req.originalUrl} \n`;
    console.log({ actualRequest })
    // return res.send({ actualRequest })
    fs.appendFile('apiRoutes.txt', actualRequest, () => {
        console.log('data saved')
    })
    next();
}

//using middleware methods
app.use(logger)

//if /employee is the prefix of route then it will go to emp route file
app.use('/employee', empRoutes);

//sending string responses
app.get('/', (req, res) => {
    res.send('iam string to client')
});

//sending static files
app.get('/html', (req, res) => {
    console.log(__dirname)
    res.sendFile('./view.html', { root: __dirname })

})
//sending jsonData
app.get('/json', (req, res) => {
    res.json({
        success: 1,
        message: 'JSON data send successfully'
    })
})


//listeng to a port
app.listen(6000, () => {
    console.log('server listenig at port 6000 ');
})

