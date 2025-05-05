import http from "node:http" // importando o http que vai servir para criar o servidor

const products = [
    {
        id: 1,
        name: "Camiseta",
        price: 100,
    },
    {
        id: 2,
        name: "calça",
        price: 200,
    },
    {
        id: 3,
        name: "tenis",
        price: 300,
    }
]

const app = http.createServer((req, resp)=>{
    if( req.method === "GET" && req.url === "/products"){
        resp.setHeader("Content-Type", "application/json")

        resp.end(JSON.stringify(products))
    }
})

export {app}