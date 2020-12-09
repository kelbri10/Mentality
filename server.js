const express = require('express'); 
const path = require('path'); 
const app  = express(); 
const PORT  = process.env.PORT || 3000; 

//middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.static('public')); 

//HTML routes 
//returns index.html to client-side
app.use(require('./routes/html-routes')); 

//API routes 
app.use(require('./routes/api-routes')); 

//delete request for when user wants to delete specific journal entry 


app.listen(PORT, () => {
    console.log(`app is listening on PORT${PORT}`); 
}); 