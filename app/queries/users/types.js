import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLID,
    GraphQLString
} from 'graphql'

const UsersType = new GraphQLObjectType({
    name:'Users',
    fields:{
        id:{
            type:GraphQLID,
        },
        firstName:{
            type:GraphQLString,
            resolve:parentValue => parentValue.first_name 
        },
        lastName:{
            type:GraphQLString,
            resolve:parentValue => parentValue.last_name 
        },
        company:{
            type:GraphQLString,
        },
        image:{
            type:GraphQLString,
            resolve:parentValue => parentValue.image_url
        }
    }
})

export default UsersType