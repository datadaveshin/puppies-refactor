var express = require('express');
var router = express.Router();
var models = require("../models/puppy")

console.log("models", models)
console.log("HEY ######!!!!!!!!!!!!!!!!!!");

router.get('/new', function(req, res) {
    console.log("puppies new!")
    res.render('puppies/new');
});


/**
Get the stuff back
*/

router.post('/', function(req, res) {
    var age = Number(req.body.age);
    var name = req.body.name;
    var newPup = new models.Puppy(name, age);
    models.pupArray.push(newPup)
    console.log('pupArray', models.pupArray)
    // puppies.push({'name': name, 'age': age, 'id': id})
    res.redirect('/')
    // res.send(models.pupArray)
});

router.get('/:id', function(req, res) {
    // console.log(req.params.id)
    let inputID = Number(req.params.id)
    let pupOfInterest = puppies.filter(function(pupObj) {
        return (inputID === pupObj.id);
    });
    pupOfInterest = pupOfInterest[0];
    console.log('pupOfInterest', pupOfInterest)
    res.send(pupOfInterest.name)
});

module.exports = {
    router: router,
    puppies: models
}
// module.exports = router;
