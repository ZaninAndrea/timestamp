// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
app.get('/*', function (req, res) {
  var response={"unix":null,"natural":null};
  var d;
  var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  try {
    d = new Date(Date.parse(req.url.replace(/%20/g," ").substring(1)));
    if(d.getTime()>0){
      response={"natural":months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear(),"unix":+ d};
    }
  }  catch(err) {  }
  try {
    if (parseInt(req.url.substring(1))){
      var time=parseInt(req.url.substring(1));
      d = new Date(time*1000);
      response={"natural":months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear(),"unix":+ d};
    }
  }  catch(err) {  }
  
  res.send(JSON.stringify(response));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})