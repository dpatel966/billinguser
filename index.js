const express =  require("express")
const  pool =  require("./dbconfig/db")
const server =  express()
 

server.use(express.json())


server.use("/api/user", require("./router/userRouter"))
server.use("/api/plans", require("./router/plansrRouter"))
server.use("/api/subscriptions", require("./router/subscriptionsRouter"))
server.use("/api/usagerecords", require("./router/usagerecordsRouter"))

server.get("/" ,async(req , res)=>{
   res.json({msg : "user billing system is running"})
})

server.listen(9000, ()=>{
    console.log("server is runing on port 9000")
})