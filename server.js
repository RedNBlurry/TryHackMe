const express = require('express');
const app = express();
const port = 3000;



// Serve static files from the 'public' directory
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/Home.html');
});

app.post('/submit-data', (req, res) => {
    // Access POST values here
    var searchData = req.body.dataField;

    // Check if the input is empty
    if (!searchData.trim()) {
        // Show an alert if the input is empty
        res.send('<script>alert("Please enter something"); window.location.href="/";</script>');
        return;
    }

    // Check if the input contains the "<script>" tag
    if (searchData.includes("<script>")) {
        // Redirect to the malicious page if the input contains a script tag
        res.redirect('/malicious.html');
    } else {
        // Redirect to the external URL
        res.redirect('https://asoftmurmur.com/');
    }
});





app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
