const { buildSchema } = require("graphql")

module.exports = buildSchema(`
    type user{
        _id :ID!
        name: String!
        email: String!
        password: String!
        mobileNo: String!
        createdAt: String
    }
    input userInput{
        name: String!
        email: String!
        password: String!
        mobileNo: String!
    }

    type Query{
        getAllUser: [user!],
        getUserById(_id:String!):user! 
    }
    type Mutation{
        addUser(user: userInput) : user,
        updateUser(_id:String , name:String ,email:String ,password:String ,mobileNo : String): String ,
        deleteUser(_id:String): user
    }

    schema{
        query: Query
        mutation: Mutation
    }
`)