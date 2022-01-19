const http=require("http");
const fs=require("fs");
const port=process.env.PORT;

const homefile=fs.readFileSync("home.html","utf-8");
const replaceVal=(tempVal,orgVal)=>{
     var temperature=tempVal.replace("{%tempval%}", orgVal.main.temp)
     temperature=temperature.replace("{%tempmin%}", orgVal.main.temp_min)
     temperature=temperature.replace("{%tempmax%}", orgVal.main.temp_max)
     temperature=temperature.replace("{%location%}", orgVal.name)
     temperature=temperature.replace("{%country%}", orgVal.sys.country)
     temperature=temperature.replace("{%tempstatus%}", orgVal.weather.main)
     
     return temperature;
}
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        requests('http://api.openweathermap.org/data/2.5/weather?q=kanpur&units=metric&appid=166efe5fbbc66c1059854d689e96ce27')
            .on('data', (chunk)=> {
                const objdata=JSON.parse(chunk);
                const arrdata=[objdata];
                const realtimedata=arrdata.map((val)=>
                    replaceVal(homefile,val)).join("");
                res.write(realtimedata);
                
            })
            .on('end',  (err) =>{
                if (err) return console.log('connection closed due to errors', err);
                 res.end();
               
            });
    }
})

server.listen(port);

