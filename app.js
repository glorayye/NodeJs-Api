const express = require("express");

const app = express();
app.use(express.json());

const port = 3000;     //using nodemon in package.json to update on changes
const PORT = process.env.PORT || port;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
})
    // .catch((err) => {
    //     console.error("Sequelize Initialisation threw an error:", err);
    // });

//could be GET, POST, PUT, and DELETE
app.get("/status", (request, response) => {    //status is the path, must be updated in localhost to work if changed 
    const status = {
        "Status": "Running"
    };
    const test = {
        "test1": "this is a test of the system",
        "testCode": 52
    };
    response.send(test);  /* response methods:  res.send(), res.json(), and res.render(). */
}
);


