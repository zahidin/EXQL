import Knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export const connect = Knex({
    client:process.env.KNEX_CLIENT,
    connection:{
        host:process.env.HOST,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME,
        port:process.env.DB_PORT
    }
})

//check error connection knex
connect.raw('select 1+1 as result').catch(err => {
    console.log(err);
    process.exit(1);
});
  
