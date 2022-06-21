import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4omq4k60jpi01xl83mi1scj/master',
    cache: new InMemoryCache()
})