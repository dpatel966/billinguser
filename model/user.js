  const pool =  require("../dbconfig/db")

  class  user{
      
       static async  userAdd(data){
          const  [result] =  await pool.query("insert into user set ?" , [data])

          return result
       }

       static async  findAll(){
        const [result] =  await  await  pool.query("select * from user ")

        return  result
       }

  }


  module.exports = user 