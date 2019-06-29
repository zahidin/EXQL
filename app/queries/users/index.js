import {
    GraphQLError,
    GraphQLList,
} from 'graphql'
import UsersType from './types';
import {connect} from '../../connection'


export default {
    type:GraphQLList(UsersType),
    async resolve(){
        try{
            const results = await connect.select().table('users')
            return results
        }catch(err){
            throw new GraphQLError(err)
        }
    }
}