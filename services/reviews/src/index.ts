import { resolve } from 'path';
import { readFileSync } from 'fs';
import { gql, ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

const typeDefs = gql(readFileSync(resolve(__dirname, "./schema.graphql"), { encoding: "utf8" }));
const server = new ApolloServer({
    schema: buildFederatedSchema([{ typeDefs }]),
    mocks: true,
    mockEntireSchema: false,
    engine: false,
    });
    
const port = process.env.PORT || 4001;
server.listen({ port }).then(({ url }) => {
    console.log(`🚀 reviews service ready at ${url}`);
});