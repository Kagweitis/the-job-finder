import { createServer } from 'http'
import axios from 'axios'
import { parse } from 'url'
import chalk from 'chalk'
import config from './config.js';
// import { BASE_URL, BASE_PARAMS, APP_ID, API_KEY } from './config.js'

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
}

const decodeParams = searchParams => Array
    .from(searchParams.keys())
    .reduce((acc, key) => ({...acc, [key]: searchParams.get(key)}), {})

const server = createServer((req, res) => {
    const requestURL = parse(req.url)
    console.log(requestURL);
    const decodedParams = decodeParams(new URLSearchParams(requestURL.search))
    const { search, location, country = 'gb' } = decodedParams
    
    const targerURL = `https://api.adzuna.com/v1/api/jobs/${country}/search/40?app_id=465d7faa&app_key=6beab7dfd6b1bfd0b0181a5c7591e61e&what=${search}&where=${location}&content-type=application/json`;

    
if (req.method === 'GET') {
    console.log(chalk.green(`proxying GET request to ${targerURL}`));
    axios.get(targerURL)
        .then((response) => {
            res.writeHead(200, headers)
            res.end(JSON.stringify(response.data))
        })
        .catch((err) => {
            console.log(chalk.red(err));
            res.writeHead(500, headers)
            res.end(JSON.stringify(err))
        })
}
})


server.listen (3000, () => {
    console.log(chalk.green(`proxy server listening on port ${3000}!`))
})