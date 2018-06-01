var express = require('express');
var router = express.Router();
var db = require("../config/db").connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query("SELECT * FROM album", (err, result)=>{
    if(err){
      console.log(err);
    }
    res.render('index', 
    { 
      title: 'Express',
      data: result 
    });
  });
});

module.exports = router;