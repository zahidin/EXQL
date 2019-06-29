import {
    GraphQLObjectType,
    GraphQLInt
} from 'graphql'

const DeleteUserType = new GraphQLObjectType({
    name:'deleteUser',
    fields:{
        success:{
            type:GraphQLInt,
            resolve:parentValue => parentValue
        }
    }
})

export default DeleteUserType