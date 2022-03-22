const axios = require('axios');

const main = async () => {
    try {
        const result = await axios.post(
            'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-subgraph',
            {
                query: `{
                    tokens(first: 10, orderBy: volumeUSD, orderDirection: desc) {
                        name
                        symbol
                        txCount
                        volumeUSD
                        feesUSD
                        totalValueLockedUSD
                    }
                }`
            }
        );
        console.log(result.data.data.tokens);
    } catch (err){
        console.log(err);
    }
}

main();
