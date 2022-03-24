const express = require('express')
const router = express.Router()

const answers = [
    ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2FDBMS%2Fqueriespg1.txt?alt=media&token=c47175fb-2972-4af1-9fb2-54fd6abb8675'],
    ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2FDBMS%2Fqueriespg2.txt?alt=media&token=b4f5ae41-d57b-47c8-a8b8-8265023e7ade'],
    ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2FDBMS%2Fqueriespg3.txt?alt=media&token=0a4024bd-ee4c-4208-89f4-c3e8f13836ba'],
    ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2FDBMS%2Fqueriespg4.txt?alt=media&token=c350ffe1-3bff-412b-9c83-fff64d44b362'],
    ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2FDBMS%2Fqueriespg5.txt?alt=media&token=57a4aafd-4016-4597-8d36-a260734a7f93']
]



router.get('/:id', async(req, res) => {
    try{
        res.redirect(301, answers[req.params.id]);
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})

module.exports = router;