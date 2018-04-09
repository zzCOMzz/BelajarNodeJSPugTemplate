const pug = require("pug")
const url = require("url")
const fs = require("fs")



function readFileCallback(response){ 
  fs.readFile("index.pug", (err, data) => {
    if (err) throw err;
    let compiledIndex = pug.compile(data)
    let result = compiledIndex({
      "pageTitle": "Halaman Index"
    })
    response.end(result)
  })
}






const http = require("http");

let httpServer = http.createServer((req,res)=>{ 
    let parsedUrl = url.parse(req.url)
    switch (parsedUrl.pathname) {
      case "/":
      readFileCallback(res)
      break;
    }
})

httpServer.listen(5000,()=>{ 
  console.log("listening on port 5000")
})



