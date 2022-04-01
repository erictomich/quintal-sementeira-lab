import config from "./config.js"
import { Controller } from "./controller.js"
//import { logger } from "./util.js"
const {
    location,
    pages: {
        homeHTML
    }
} = config
const controller = new Controller()
async function routes(request, response) {
    const { method, url } = request

    if(method=== 'GET' && url === '/') {
        response.write(' Welcome to about us page'); 
        response.end()
    }
    if(method=== 'GET' && url === '/home') {
        // const { 
        //     stream
        // } = await controller.getFileStream(homeHTML)

        // padrão do response é text/html
        // response.writeHead(200, {
        //    'Content-Type': 'text/html'
        //})
        // return stream.pipe(response)
        response.write('Welcome to our home'); 
        response.end()
    }

    return response.end();
}

export function handler(request, response) {
    return routes(request, response)
    .catch(error => console.log(`Deu ruimmm: ${error.stack}`))
}