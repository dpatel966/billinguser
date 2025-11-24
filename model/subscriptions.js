  const pool =  require("../dbconfig/db")

  class  subscriptions{
      
       static async  subscriptionsAdd(data){
          const  [result] =  await pool.query("insert into subscriptions set ?" , [data])

          return result
       }

       static async  findAll(){
        const [result] =  await  await  pool.query("select * from subscriptions ")

        return  result
       }

  }


  module.exports = subscriptions 