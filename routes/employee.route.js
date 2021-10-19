//importing router
const router = require('express').Router();
const empData = require('../employee')
//here we are doing crud operation
//listing all employee data
//get
router.get('/list', (req, res) => {
    //sendong employee list
    res.json({
        success: 1,
        items: empData
    })
});

//post
router.post('/create', (req, res) => {
    let dataFromClient = req.body;
    let firstName = req.body.firstName;
    //throwing error messages
    if (!firstName) {
        res.send({
            success: 0,
            message: 'please send firstName'
        })
    }
    //pushing to the employee array
    empData.push(dataFromClient)

    console.log('dataFromClient', dataFromClient)
    res.json({
        sendData: dataFromClient,
        item: empData

    })

})

//getById

router.get('/list/:empId', (req, res) => {
    //declaring an emptyObject
    let oneItem = {}
    //to get id
    let id = req.params.empId;
    empData.filter((item) => {
        if (Number(id) === item.id) {
            console.log({ item })
            oneItem = item
        }
    })
    res.send({
        id: id,
        item: oneItem
    })
})

//update
router.put('/list/:empId', (req, res) => {
    let id = req.params.empId;
    let updatebody = req.body;
    let modifiedEmpData = empData.map((item) => {
        if (Number(id) === item.id) {
            console.log({ item })
            item = updatebody;
        }
        return item
    });

    res.send({
        success: 1,
        items: modifiedEmpData
    })


})

//delete

router.delete('/list/:empId', (req, res) => {
    let id = req.params.empId;
    let deletedData = empData.filter((item) => {
        return item.id !== Number(id)
    })
    console.log('inside', empData)

    res.send({
        success: 1,
        items: deletedData
    })

})



module.exports = router
