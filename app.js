const express = require('express');
const app = express();

console.log("hello world");

app.get('/',(req, res) => {
    console.log('user hit root');
    res.status(200).send('root');
})
// 404 Error
app.all('*', (req, res) => {
    res.status(404).send('404 Error: Resource not found');
})

app.listen(5000, () => {
    console.log('App listening on port 5000');
})