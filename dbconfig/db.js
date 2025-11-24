  const mysql =  require("mysql2/promise");

  const pool  =  mysql.createPool({
    host :"localhost",
    user : "root",
    password :"root",
    database :"UserBilling"
  })

   async  function testconnection(){
      try{ 
         await  pool.getConnection()
      console.log("Database connected successfully" )
      }catch(err){
        console.log("Database connection failed" , err)
      }
   }
   testconnection()
  module.exports = pool
