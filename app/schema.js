import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql'

import * as queries from './queries'
import * as mutations from './mutations'

const Schema = new GraphQLSchema({
    query:new GraphQLObjectType({
        name:'RootQuery',
        fields:queries
    }),
    mutation:new GraphQLObjectType({
        name:'Mutation',
        fields:mutations
    })
})

export default Schema