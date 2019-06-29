import express from 'express'
import cors from 'cors'
import graphqlHTTP from 'express-graphql'
import schema from "./schema";
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(cors())

app.use('/graphql',graphqlHTTP((req,res,next) => ({
    schema,
    graphiql:true
})))

app.listen(port, () => console.log(`Server run in port : ${port}!`))
