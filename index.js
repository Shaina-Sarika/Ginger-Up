const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb+srv://admin-shaina:Test123@cluster0.va63jkc.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"));

app.post("/sign_up", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phno = req.body.phno;
    const password = req.body.password;

    const data = {
        "name": name,
        "email": email,
        "phno": phno,
        "password": password
    }

    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            console.error("Error inserting record:", err);
            return res.status(500).send("Error inserting record");
        }
        console.log("Record Inserted Successfully");

        // Return the "Signup Successful" message directly as a response
        return res.send("<h1>Signup Successful</h1>");
    });
});

app.get("/", (req, res) => {
    return res.redirect('/inbox.html');
});

app.listen(3000, () => {
    console.log("Listening on PORT 3000");
});
