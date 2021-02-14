import express from 'express';
import cors from 'cors';
import compression from 'compression';
import { createServer } from 'http';

import environment from './config/environments';
//configuracion de variables de entorno (lectura)
if(process.env.NODE_ENV !== 'production'){
    const env = environment;
    console.log(env);
}


async function init (){
    const app = express();

    app.use(cors());
    app.use(compression());
    
    app.get('/',(_,res)=>{
        res.send("API ONLINE");
    });
    
    const httpServer = createServer(app);
    const PORT =process.env.PORT || 3000;
    httpServer.listen(
        {
            port:PORT
        },
        ()=>console.log(`http://localhost:${PORT} API ONLINE SHOP RUNNING`)
    ) 
}

init();

