  const pool =  require("../dbconfig/db")

  class  usagerecords{
      
       static async  usagerecordsAdd(data){
          const  [result] =  await pool.query("insert into usagerecords set ?" , [data])

          return result
       }

       static async  findAll(){
        const [result] =  await  await  pool.query("select * from usagerecords ")

        return  result
       }

  }


  module.exports = usagerecords 