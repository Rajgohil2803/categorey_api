var express = require('express');
var router = express.Router();
var categorey_schema = require("../model/categorey");
var bodyparser = require('body-parser');
const categorey = require('../model/categorey');

router.use(bodyparser.urlencoded({ extended: false }));

/* create categorey router api. */
router.post('/get_categorey',function(req, res, next) {
  var data = categorey_schema.create(req.body);
  console.log(data);
});

// display all data in postman routing
router.get("/viewall",(req,res)=>{

  categorey.find((err,val)=>{
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.json(val);
    }
  });

});


// display only one data
router.get("/search/",async function(req,res,next){

  try {
    console.log(req.query);
    const data3 = await categorey.find(req.query);
    res.status(200).json({
      status:'success',
      data3,
    })
  } catch (error) {
    res.json({
      error,
    })
  }

});

// paging schema for skip page 

router.get("/pagination/",async function(req,res,next){
  const {page = 1,limit = 10} = req.query;    
  try {
    console.log(req.body);
    const data = await categorey.find(req.query).limit(limit * 1).skip((page - 1)*limit).exec();
    const data1 = req.query;
    res.status(200).json({
      status:"success",
      data,
      data1
    })
  } catch (error) {
    console.log(error);
  }

});


module.exports = router;
