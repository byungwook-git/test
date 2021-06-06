const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//몽구스로 몽고디비 쉽게 사용
const mongoose = require("mongoose");
mongoose
  .connect(
    //몽고디비 접속 
  ,
    //오류 예방
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  //연결확인
  .then(() => console.log("MongoDB Connected.."))
  //오류시
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!!!!!@@@@@@!!!!!!"));

app.get("/api/hello", (req, res) => res.send("안녕~!!!!!!!!!!!!!!!!!!!"));

//router
app.use("/api/sales", require("./routes/salesCode"));
app.use("/api/product", require("./routes/productCode"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
