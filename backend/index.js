const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));
//This line of code is used to parse incoming requests with URL-encoded payloads (like form data submitted via POST requests) in Express.js.
//When the form is submitted, the POST request to /submit will include the form data (username and email) in the body of the request. With express.urlencoded({ extended: true }), Express will parse this data and make it accessible in req.body.

app.use(express.json());
//express.json() is a built-in middleware in Express.js that parses incoming requests with a Content-Type of application/json.
// It converts the incoming JSON string in the request body into a JavaScript object, making it accessible via req.body.

app.get("/register", (req, res) => {// http://localhost:8080/register?user=nnn&password=123
    // fill same data in html web page and submit it
    let { user, password } = req.query;
    res.send(`standard GET request. welcome ${user}!`);
});
app.post("/register", (req, res) => {// also same as above but in post method
    let { user, password } = req.body;
    res.send(` standard POST request.welcome ${user}!`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})