const express = require('express');
const app = express();

console.log("hello world");

/**
 *  ROUTES
 */

// Root
app.get('/',(req, res) => {
    console.log('user hit root');
    res.status(200).send('root');
})
// Spotify Authorization
app.get('/auth/spotify', (req, res) => {

});
// Spotify Authorization Callback
app.get('/auth/spotify/callback', (req, res) => {

})
// 404 Error
app.all('*', (req, res) => {
    res.status(404).send('404 Error: Resource not found');
})

app.listen(5000, () => {
    console.log('App listening on port 5000');
})