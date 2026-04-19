let express =require("express");
let cors= require("cors");
let mysql2= require("mysql2");
let app = express();
app.use(cors());
app.use(express.json());


let con = mysql2.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "ayushsnik",
        database: "mern"
    }
); 

app.post ("/save",(request, response)=>
{
    let {name, std, roll, marks} = request.body;
    let data = [name, std, roll, marks];
    let sql = "INSERT INTO students (name, std, roll, marks) VALUES (?, ?, ?, ?)";
    con.query(sql, data, (error, result)=>
    {
        if(error)
        {
            response.send(error);
        }
        else
        {
            response.send("Successfull");
        }
    })
});
app.get("/get-students", (req, res) => {
    const sql = "SELECT * FROM students";
    con.query(sql, (error, results) => {
    if (error) {
    return res.status(500).send(error);
    }
    res.json(results);
    });
    });
    
app.delete("/delete/:id", (request, response) => {
    let id = request.params.id;
    let sql = "DELETE FROM students WHERE id = ?";

    con.query(sql, [id], (error, result) => {
        if(error)
        {
            response.send(error);
        }
        else 
        {
            response.send("Deleted successfully");
        }
    })
}) 

app.listen(9000,()=>{console.log("express is ready")});