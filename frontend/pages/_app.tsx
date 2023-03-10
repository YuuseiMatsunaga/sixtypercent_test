import '../styles/globals.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const cache = new InMemoryCache();
const client = new ApolloClient({
    uri: `http://localhost/graphql`,
    cache,
});

function MyApp({ Component, pageProps }: any) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;