import {
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString,
    GraphQLError
} from 'graphql'

import UpdateUserType from './types'
import {connect} from '../../connection'

export default{
    type:UpdateUserType,
    args:{
        id:{
            type:GraphQLNonNull(GraphQLInt)
        },
        firstName:{
            type:GraphQLNonNull(GraphQLString)
        },
        lastName:{
            type:GraphQLNonNull(GraphQLString)
        },
        company:{
            type:GraphQLNonNull(GraphQLString)
        },
        image:{
            type:GraphQLNonNull(GraphQLString)
        },
    },
    async resolve(parentValue,args){
        try{
            const result = await connect('users').where('id',args.id).update({
                first_name : args.firstName,
                last_name  : args.lastName,    
                company    : args.company,
                image_url  : args.image,
            })
            return result
        }catch(err){
            throw GraphQLError(err)
        }
    }
}