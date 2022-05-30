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
    const {description, amount, type} = req.body;

    const {customer}= req;

    const statementOperation ={
        description,
        amount,
        created_at: new Date(),
        type
    }

    customer.statement.push(statementOperation);

    return res.status(201).send();



})

app.post('/withdraw',verifyIfExistsAccountCpf,(req,res)=>{
    const {amount} = req.body;
    const {customer} = req;

    const balance = getBalance(customer.statement);

    if(balance < amount){
        return res.status(400).json({message:"insufficient funds!"})
    }

    const statementOperation={
        amount,
        created_at: new Date(),
        type:'debit'
    }

    customer.statement.push(statementOperation);

    return res.status(201).send();
})


app.patch("/account",verifyIfExistsAccountCpf, (req, res)=>{
    const {name} = req.body;
    const {customer} = req;

    customer.name = name;


    return res.status(200).send();
});

app.delete("/account/", verifyIfExistsAccountCpf,(req, res)=>{
    const {customer} = req;
     customers.splice(customers.indexOf(customer), 1);

    return res.status(200).json(customers);
});

app.get("/account/", verifyIfExistsAccountCpf,(req, res)=>{
    const {customer} = req;
    

    return res.status(201).json(customer);
});


app.get('/statement/date', verifyIfExistsAccountCpf,(req,res)=>{
    const {date} = req.query;
    const {customer} = req;

    const dateFormat = new Date(date + " 00:00");


    const statement = customer.statement.filter(
        statement=> 
         statement.created_at.toDateString() === 
         new Date(dateFormat).toDateString()
    );

    

    return res.json(statement);
})

app.get('/accounts',(req,res)=>{

     return res.json(customers);
})

app.get('/account/', verifyIfExistsAccountCpf,(req,res)=>{

    const {customer} = req;
    
    return res.status(200).json(customer);
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

app.get("/account/balance",verifyIfExistsAccountCpf,(req,res)=>{
    const {customer} = req;

    const balance = getBalance(customer.statement);

    return res.json(balance);
})

function getBalance(statement){
   const balance =  statement.reduce((acc, operation)=>{
        if(operation.type==='credit'){
            return acc + operation.amount;
        }else{
            return acc - operation.amount;
        }
    },0)

    return balance;
}


//route params
app.listen(3001, ()=> console.log('start server on port 3001'));