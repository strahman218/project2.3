/**
 * Created by saraf on 11/10/2014.
*/
var express = require('express');
var jade  = require('jade');
var router = express.Router();


/* GET data for table and render it inside of a table  using jade file table.jade*/
router.get('/data', function(req, res) {

    var tData =
        [
        /* create 2D array for Lexington population history*/
            [[1850, 1892, 0],[1860, 2329, "+23.0%"], [1870, 2277, "-2.2%"],[1880, 2460, "+8.0%"],[1890, 3197, "+30.0%"]],
            [[1900, 3831, "+19.8%"],[1910, 4918, "+28.4%"],[1920, 6350, "+29.1%"],[1930, 9467, "+49.1%"],[1940, 13187, "+39.3%"]],
            [[1950, 17335, "+31.5%"],[1960, 27691, "+59.7%"],[1970, 17335, "+15.1%"],[1980, 17335, "-7.5%"],[1990, 17335, "-1.7%"]],
            [[2000, 30355, "+4.8%"],[2010, 31394, "+3.4%"]]];

    var table1 = tData[Math.floor(Math.random()*tData.length)];

    // render table
    res.render('table', { table: table1});
});

/* GET new text from jade file*/
router.get('/textContent/:name', function(req, res) {
    var dir = __dirname.split("/").slice(0,-1).join("/");
    res.render(req.param("news"), {});
});

/* GET headline text path to be displayed from client */
router.get('/:file', function(req, res) {

    var dir = __dirname.split("/").slice(0,-1).join("/");
    console.log(dir+"/text/"+req.param("file"));
    res.sendFile(dir+"/text/"+req.param("file"));

});

module.exports = router;