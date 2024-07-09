const express=require('express')
const router=express.Router()
const users=[{name:'Gugan'}]
router.get('/',(req,res) => {
    res.send('Users list')
})

router.get('/new',(req,res)=>{
    res.render('index',{firstName:req.body.firstName})
})

router.post('/',(req,res) => {
    const flag=true
    if(flag){
        users.push({name:req.body.firstName})
        res.redirect(`/users/${users.length-1}`)
    }
    else{
        console.log('error')
        res.render('index',{firstName:req.body.firstName})
    }
})

router.get('/:id',(req,res) => {
    console.log(users[req.params.id])
    res.send(`Get user with ID ${req.params.id}`)
})

module.exports = router