//importing express
const express = require('express');
//invoking express function
const app = express();

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
app.listen(5000, () => {
    console.log('server listenig at port 5000 ');
})