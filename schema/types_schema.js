const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLNonNull
} = graphql

// Create Person Type
const Person = new GraphQLObjectType({
    name: 'Person',
    description: 'Represent a person',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        age: {type: GraphQLInt},
        isMarried: {type: GraphQLBoolean},
        gpa: {type: GraphQLFloat}
    })
})

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description: 'Description',
    fields: {
        person:{
            type: Person,
            resolve(parent,args){
                let personObj = {
                    name: null,
                    age: 34
                };
                return personObj;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
})