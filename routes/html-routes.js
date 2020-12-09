const path = require('path'); 
const router = require('express').Router(); 
//HTML routes 
//returns index.html to client-side
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});

//returns to client-side
router.get('/journal', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'journal.html')); 
}); 

module.exports = router; 