let express = require("express");
let cors = require("cors");
let { Pool } = require("pg");

let app = express();

app.use(cors());
app.use(express.json());

let pool = new Pool({
  user: "myuser",
  host: "localhost",
  database: "mydb",
  password: "mypass",
  port: 5432,
});

app.get("/courses",(req,res)=> {
    let command = "select * from courses";
    pool.query(command)
    .then ((result)=> res.send(result.rows))
    .catch((err) => res.send(err));
});

app.post("/courses",(req,res)=> {
    let command = "insert into courses (name, description, duration) values($1, $2, $3) ";
    let data = [req.body.name, req.body.description, req.body.duration];
    pool.query(command,data)
    .then ((result)=> res.send(result.rows))
    .catch((err) => res.send(err));
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
