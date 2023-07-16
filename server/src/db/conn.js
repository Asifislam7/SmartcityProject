const mongoose= require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/smartcity", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("connection successfull")
})
  .catch((error) => {
    console.log(error)
  });
