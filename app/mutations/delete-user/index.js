import {
    GraphQLNonNull,
    GraphQLInt,
    GraphQLError
} from 'graphql'

import DeleteUserType from './types'
import {connect} from '../../connection'

export default{
    type:DeleteUserType,
    args:{
        id:{
            type:GraphQLNonNull(GraphQLInt)
        }
    },
    async resolve(parentValue,args){
        try{
            const result = await connect('users').where('id',args.id).del()
            return result
        }catch(err){
            throw new GraphQLError(err)
        }
    }
}