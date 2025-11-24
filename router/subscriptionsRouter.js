
    const  express  = require("express");
     const  subscriptions =  require("../model/subscriptions")
    const router  = express.Router()


    router.get("/list" ,async (req ,  res)=>{
        try{
            const result  =  await  subscriptions.findAll()

            res.json({status: true , result , msg : "subscriptions  data found"})
        }catch(err){
            console.error(err)
        }
    })

      router.post("/add" ,async (req ,  res)=>{
        try{
            const result  =  await  subscriptions.subscriptionsAdd(req.body)

            res.json({status: true , result , msg : "subscriptions  data added"})
        }catch(err){
            console.error(err)
        }
    })

    module.exports =  router