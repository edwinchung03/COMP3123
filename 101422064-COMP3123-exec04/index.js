const express = require('express');
const app = express();

const port = process.env.port || 3030;
// let data = '<h3>COMP3123: Hello from my app!</h3>';

// app.get('/', (req, res) => {
//     res.send(data)
// });
// app.listen(port, () =>{
//     console.log(`Server listening on port ${port}`)
//     console.log("http://127.0.0.1.3000/")
// });

// app.get('/userID/:id', (req, res) =>{
//     const userId = req.params.id;
//     res.send(`User with id: ${userId}`)
// })
// app.get('/userName/:name', (req, res) =>{
//     const userName = req.params.name;
//     res.json(`User with name: ${userName}`)
// })

app.get('/hello', (req, res) => {
    let data = 'Hello Express JS';
    res.send(data)
});

app.get('/user', (req, res) =>{
    const firstname = req.query.firstname !== undefined ?
        req.query.firstname : 'Pritesh';
    const lastname = req.query.lastname !== undefined ?
        req.query.lastname : 'Patel';

    res.json({ firstname, lastname });
});

app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    
    res.json({ firstname, lastname });
});

app.listen(port, ()=>{
    console.log(`Server listing on port ${port}`);
    console.log("http:/localhost:3030")
});


