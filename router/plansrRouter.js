
    const  express  = require("express");
     const  plan =  require("../model/plan")
    const router  = express.Router()


    router.get("/list" ,async (req ,  res)=>{
        try{
            const result  =  await  plan.findAll()

            res.json({status: true , result , msg : "plan  data found"})
        }catch(err){
            console.error(err)
        }
    })

      router.post("/add" ,async (req ,  res)=>{
        try{
            const result  =  await  plan.planAdd(req.body)

            res.json({status: true , result , msg : "plan  data added"})
        }catch(err){
            console.error(err)
        }
    })

    module.exports =  router