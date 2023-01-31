const express = require("express");
const parth = require("path");
const app = express();
const fs = require("fs");
const port = 8000;
//######################################################
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));
const bodyparser = require("body-parser")

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/contactDence');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const contactSchema = new mongoose.Schema({
    name: String,
    phon: String,
    email: String,
    address: String,
    dsic: String,
});
const contact = mongoose.model('contact', contactSchema);






///Defines mongoose shecema################################





//EXPRESS SPECIFIC STUFF
// app.use(express.static('static', options))
//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));//For serving static files
app.use(express.urlencoded({extended: true}));





//PUG SPECIFIC STUFF
app.set('view engine', 'pug');//set the templete engines as pug
app.set('views', parth.join(__dirname, 'views'));//set the view directy




//ENDPOINTS
app.get("/", (req, res) => {
    res.status(200).render('home.pug');
})
app.get("/contact", (req, res) => {
    res.status(200).render('contact.pug');
})
app.post("/contact", (req, res) => {
    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the data base")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the data base")
    });
    // res.status(200).render('contact.pug');
})




///####################################################################
app.listen(port, () => {
    console.log(`The appllcetion stated sucesssfully on part ${port}`

    )
})
