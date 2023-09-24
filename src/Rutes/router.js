const express = require("express")
const router = express.Router()
const morgan = require('morgan')

router.get('/',(req, res, next)=>{
    res.render("index")
})
router.post('/', (req,res,next)=>{
    console.log(req.body)
    res.send('ok')
})

router.get('/docentes',(req, res, next)=>{
    
})
router.post('/docentes', (req,res,next)=>{
    console.log(req.body)
    res.send("ok")
})

module.exports = router