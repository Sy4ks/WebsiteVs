const express = require("express");

const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) =>{
    res.sendFile(__dirname + "/TechnicalTest.html");
});

app.post('/add', (req, res) => {
    const {num1, num2} = req.body;
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({result});
})

app.post('/subtract', (req, res) => {
    const {num1, num2} = req.body;
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({result});
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});