const express = require('express'); 
const path = require('path'); 
const app  = express(); 
const PORT  = process.env.PORT || 3000; 

//middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.static('public')); 

//returns index.html to client-side
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});

//returns to client-side
app.get('/journal', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'journal.html')); 
})

app.listen(PORT, () => {
    console.log(`app is listening on PORT${PORT}`); 
}); 