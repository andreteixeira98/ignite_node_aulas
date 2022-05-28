const express = require('express');
const {v4: uuidv4} = require('uuid');

const app = express();

app.use(express.json());
//app.use(verifyIfExistsAccountCpf);


const customers = [
    
];

app.post('/account',(request, response)=>{
    const {cpf, name} = request.body;

    const customerAlreadyExists = customers.some( 
        (customer)=> customer.cpf === cpf
    );

    if(customerAlreadyExists){
        return response.status(400).json({error:'Customer Already Exists!'});
    }
    
    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement:[]
    })

    console.log(customers);


    return response.status(201).send();
});

app.post("/deposit",verifyIfExistsAccountCpf,(req,res)=>{
    const {description, amount} = req.body;

    const {customer}= req;

    const statementOperation ={
        description,
        amount,
        created_at: new Date(),
        type:'credit'
    }

    customer.statement.push(statementOperation);

    return res.status(201).send();



})

app.get('/statement/:cpf',(req,res)=>{
    const {cpf} = req.params;

    const customer = customers.find((customer)=> customer.cpf === cpf);

    if(!customer){
        return res.status(400).json({error:"Customer Not Found"})
    }
    return res.json(customer.statement);
})

app.get('/account',(req,res)=>{

    
    return res.json(customers);
})

//middleware
function verifyIfExistsAccountCpf(req, res, next){
    const {cpf} = req.headers;

    const customer = customers.find((customer)=> customer.cpf === cpf);

    if(!customer){
        return res.status(404).json({error:"Customer Not Found md"})
    } 
    req.customer = customer;

    return next();
}

app.get('/statement/',verifyIfExistsAccountCpf, (req,res)=>{
    return res.json(req.customer);
})


//route params
app.listen(3001, ()=> console.log('start server on port 3001'));