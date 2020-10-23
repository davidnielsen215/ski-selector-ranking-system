const router = require('express').Router()
let Ski = require('../models/ski')

router.route('/').get((req, res) => {
    Ski.find()
    .then(skis => res.json(skis))
    .catch(err => res.status(400).json('Error: ' + err))
})


router.route('/find').post((req, res) => {
    const payload = req.body
    console.log(payload)

const removeEmpty = obj =>
  Object.keys(obj)
    .filter(k => obj[k] != null) // Remove undef. and null.
    .reduce(
      (newObj, k) =>
        typeof obj[k] === "object"
          ? { ...newObj, [k]: removeEmpty(obj[k]) } // Recurse.
          : { ...newObj, [k]: obj[k] }, // Copy value.
      {}
    );
    // let terrVal = Object.values(removeEmpty(payload.terrain))
    //     console.log(terrVal)
    let genVal = Object.values(removeEmpty(payload.gender))
        console.log(genVal)
    let skillVal = Object.values(removeEmpty(payload.skillLevel))
        console.log(skillVal)
    let speedVal = Object.values(removeEmpty(payload.speed))
        console.log(speedVal)
    let turnVal = Object.values(removeEmpty(payload.turnRadius))
        console.log(turnVal)
    let snowVal = Object.values(removeEmpty(payload.snow))
        console.log(snowVal)

    Ski.find(
        {
        // terrain: {$in: terrVal},
        gender: {$in: genVal},
        skillLevel: {$in: skillVal},
        speed: {$in: speedVal},
        turnRadius: {$in: turnVal},
        snow: {$in: snowVal},
        }
        )
        .then(skis => res.json(skis)),
        
        (err, ski) => {
            if (err) return res.status(500).send(err)
            if (!ski) {
                return res.status(403).send({success: false, message: 'No skis match criteria'})
            }
        }

})

router.route('/add').post((req, res) => {
    const name = req.body.name
    const terrain = req.body.terrain
    const gender = req.body.gender
    const skillLevel = req.body.skillLevel
    const speed = req.body.speed
    const turnRadius = req.body.turnRadius
    const snow = req.body.snow

    const newSki = new Ski({
        name, 
        terrain, 
        gender, 
        skillLevel, 
        speed, 
        turnRadius, 
        snow
    })

    newSki.save()
    .then(() => res.json('Ski added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router