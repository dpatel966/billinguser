  const pool =  require("../dbconfig/db")

  class  plan{
      
       static async  planAdd(data){
          const  [result] =  await pool.query("insert into plans set ?" , [data])

          return result
       }

       static async  findAll(){
        const [result] =  await  await  pool.query("select * from plans ")

        return  result
       }

  }


  module.exports = plan 