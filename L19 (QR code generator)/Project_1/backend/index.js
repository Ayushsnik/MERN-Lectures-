let http = require("http");
let url = require("url");

let server = http.createServer(
    (request, response)=>{
        response.setHeader("Access-Control-Allow-Origin","*")
        let dabba= url.parse(request.url,true);
        if(dabba.pathname ==="/check")
        {
            response.end("mein zinda hu")

        }
        if(dabba.pathname === "/num")
        {
            let str = dabba.query.number;
            let n = parseInt(str);
            if(n<2)
            {
                response.end("negative");
            }
            else
            {
                response.end("negative");
            }
        }
    }
);

server.listen(9000, ()=>console.log("server is ready"));