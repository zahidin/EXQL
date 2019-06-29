import {
    GraphQLObjectType,
    GraphQLInt,
} from 'graphql'

const AddUserType = new GraphQLObjectType({
    name:'AddUser',
    fields:{
        success:{
            type:GraphQLInt,
            resolve:parentValue => parentValue.rowCount
        }
    }
})

export default AddUserType