let express= require("express");
let cors= require("cors");
let {MongoClient, ObjectId}= require("mongodb");

let multer= require("multer");
let path= require("path");
let fs= require("fs");
let app= express();
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
const url = "mongodb://0.0.0.0:27017";
app.listen(3000, ()=>{console.log("Express is Ready")});

let storage = multer.diskStorage(
    {
        destination: (req,file, cb)=> cb(null, "uploads/"),
        filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
    }
);
let dalal = multer({storage});
app.post("/upload", dalal.single("file"), (req, res)=>{



let client = new MongoClient(url);
client.connect();
let db = client.db("insta");
let collec= db.collection("files");
let obj = {

    username: req.body.username,
    caption : req.body.caption,
    file_name: req.file.filename,
    file_url: `http://localhost:3000/uploads/${req.file.filename}`,
};

collec.insertOne(obj)
.then((result)=> res.send(result))
.catch((error)=> res.send(error));
});


app.get("/files", (req, res) => {
    const client = new MongoClient(url);
    client.connect()
  
        const db = client.db("insta");
        const fileCollection = db.collection("files");
  
        let username= req.query.username;

        let command = username ? { username} : {};
        
        return fileCollection.find(command).toArray()
      .then((files) => res.json(files))
      .catch((err) => {
        res.send(err);
      })
  });
  
  app.delete("/delete/:id", (req, res) => {
    let id = req.params.id;
    let client = new MongoClient(url);
    client.connect();
    let db = client.db("insta");
    let collec = db.collection("files");
    let _id = new ObjectId(id);
    collec.findOne({_id})
    .then ((obj)=>{fs.promises.unlink(`uploads/${obj.file_name}`)
    return collec.deleteOne({_id})
    })
    .then ((result)=> res.send(result))
    .catch((error)=>res.send(error));
  })