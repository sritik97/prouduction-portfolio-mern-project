const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path")

//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());
// static file access
app.use(express.static(path.join(__dirname, './Mern-portfolio/dist')))

//routes
app.use("http://localhost:8080/api/v1/portfolio", require("./Routes/portfolioRoute"));

app.get('/{*any}',function(req,res){
  res.sendFile(path.join(__dirname, './Mern-portfolio/dist/index.html'))
})

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});