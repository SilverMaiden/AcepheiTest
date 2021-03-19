import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const isProd = process.env.NODE_ENV === "production";
if(!isProd)require('dotenv').config();

const gateway = new ApolloGateway({debug: !isProd});
const server = new ApolloServer({
    gateway,
    subscriptions: false
});
    
const port = process.env.PORT || 4000;
server.listen({ port }).then(({ url }) => {
    //console.log(`🚀 Gateway ready at ${url}`);
});