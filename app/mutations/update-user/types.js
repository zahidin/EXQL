import {
    GraphQLInt,
    GraphQLObjectType
} from 'graphql'

const UpdateUserType = new GraphQLObjectType({
    name:'updateUser',
    fields:{
        success:{
            type:GraphQLInt,
            resolve:parentValue => parentValue
        }
    }
})

export default UpdateUserType