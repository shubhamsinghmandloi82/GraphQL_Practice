const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const graphQlSchema = require("./src/schema")
const graphQlResolvers = require("./src/resolver")
const mongoose = require("mongoose")
const userGraphQlSchema = require("./src/schema/user")
const userGraphQlResolvers = require("./src/resolver/user")
const app = express()

app.use(
  "/graphql",
  graphqlHTTP({
    schema: userGraphQlSchema,
    rootValue: userGraphQlResolvers,
    graphiql: true,
  })
)

const uri = `mongodb://localhost:27017/moviedb`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
  .connect(uri, options)
  .then(() => app.listen(4000, console.log("Server is listening on 4000")))
  .catch(error => {
    throw error
  })