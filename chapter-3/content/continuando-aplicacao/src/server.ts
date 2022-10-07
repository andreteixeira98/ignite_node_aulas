import 'reflect-metadata';
import express from 'express';

import swagerUI from 'swagger-ui-express';

import swaggerDocument from './swagger.json';

import { router } from './routes';   

const app = express();
app.use(express.json());
app.use('/api-docs',swagerUI.serve, swagerUI.setup(swaggerDocument));
app.use(router);


app.listen(3333,()=>{
    console.log("server is running on port 3333!");
});

export default app;

