
    const  express  = require("express");
     const  usagerecords =  require("../model/usagerecords")
    const router  = express.Router()


    router.get("/list" ,async (req ,  res)=>{
        try{
            const result  =  await  usagerecords.findAll()

            res.json({status: true , result , msg : "usagerecords  data found"})
        }catch(err){
            console.error(err)
        }
    })

      router.post("/add" ,async (req ,  res)=>{
        try{
            const result  =  await  usagerecords.usagerecordsAdd(req.body)

            res.json({status: true , result , msg : "usagerecords  data added"})
        }catch(err){
            console.error(err)
        }
    })

    module.exports =  router