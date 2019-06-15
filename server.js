const express =require ('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName:'Doe'},
        {id: 2, firstName: 'Adam', lastName:'Svensson'},
        {id: 3, firstName: 'George', lastName:'Ballantine'}
    ];

    res.json(customers);
});

const port =5000;

app.listen(port, ()=> console.log (`Server stared on port ${port}`));