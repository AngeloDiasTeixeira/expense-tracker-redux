const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

let transactions = [
    {id: 1, name: "gas", amount: -100},
    {id: 2, name: "groceries", amount: -50},
    {id: 3, name: "salary", amount: 500}
];

app.use(cors());
app.use(express.json());

app.get("/api/transactions", (req, res) => {
    res.json(transactions);
});

app.post("/api/transactions", (req, res) => {
    transactions.push(req.body);
    res.json(transactions);
});

app.delete("/api/transactions", (req, res) => {
    transactions = transactions.filter(t => t.id !== req.body.id);
    res.json(transactions);
});

// Serve static assets if in production
if(process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(port, () => {
    console.log("SERVER IS RUNNING");
});