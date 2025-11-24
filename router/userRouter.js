
    const  express  = require("express");
     const  User =  require("../model/user")
      const  summery =  require("../model/billingController")
    const router  = express.Router()


    router.get("/list" ,async (req ,  res)=>{
        try{
            const result  =  await  User.findAll()

            res.json({status: true , result , msg : "user  data found"})
        }catch(err){
            console.error(err)
        }
    })

      router.post("/add" ,async (req ,  res)=>{
        try{
            const result  =  await  User.userAdd(req.body)

            res.json({status: true , result , msg : "user  data added"})
        }catch(err){
            console.error(err)
        }
    })
   router.get("/:id" ,async (req ,  res)=>{
        try{

            const id =  req.params.id
            const result  =  await  summery.billingSummary(id)

            res.json({status: true , result , msg : "user  data added"})
        }catch(err){
            console.error(err)
        }
    })
    module.exports =  router