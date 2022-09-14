import express from 'express';
import { categoriesRoutes } from './routes/categories';

const app = express();
app.use(express.json());
app.use("/categories",categoriesRoutes);


app.listen(3333,()=>{
    console.log("server is running on port 3333!");
});

export default app;

