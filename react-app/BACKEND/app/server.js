const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const db = require("./models");
db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(()=>{
    console.log("connected to db");
}).catch(err => {
    console.log("cannot Connect to the db", err);
    process.exit();
});

app.get("/", (req,res) => {
    res.json({msg: "welcome to my app"});
});

require("./routes/user.routes")(app);
require("./routes/product.routes")(app);
require("./routes/order.routes")(app);

app.listen(5000,()=>{
    console.log(`Server listening on PORT 5000`);
})