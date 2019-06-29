import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLError
} from 'graphql'

import AddUserType from './types'
import {connect} from '../../connection'

export default{
    type:AddUserType,
    args:{
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
            const results = await connect('users').insert({
                first_name:args.firstName,
                last_name:args.lastName,
                company:args.company,
                image_url:args.image
            })
            return results
        }catch(err){
            throw new GraphQLError(err)
        }
    }
}