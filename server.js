var express = require("express");
var path = require("path");
var fs = require('fs')
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/" + "style.css");
});
app.get('/logic.js', function (req, res) {
    res.sendFile(__dirname + "/" + "logic.js");
});
app.get('/api/input', (req, res) => {
    res.sendFile(path.join(__dirname, 'db.json'))
})

app.post('/api/input', (req, res) => {
    var newData = req.body;
    console.log(newData);
    newData.itemName = newData.item.replace(/\s+/g, "").toLowerCase()
    fs.readFile('db.json', 'utf-8', (err, data) => {
        var item = JSON.parse(data);
        item.push(newData);
        fs.writeFile('db.json', JSON.stringify(item), err => {
            if (err) {
                throw err
            }
            res.json(newData)
        })
    })
})



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
