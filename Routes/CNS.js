const express = require('express')
const router = express.Router()

const answers = [
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Flab1.tcl?alt=media&token=6fd51bb6-0ab6-4b5f-9963-a76fe962c757'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Flab2.tcl?alt=media&token=f3c82a44-d44b-4b92-bd9b-d1e5f71108bc'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Fprog3.tcl?alt=media&token=0b7de584-6a4f-4f83-b538-5444340dbb2b'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Flab4.tcl?alt=media&token=6255b427-7c3c-434b-ab03-a2a45e5dab23'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Fprog5.tcl?alt=media&token=aaa30fd1-6070-44c2-bdbe-f03b850ff32e'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Fprog6.tcl?alt=media&token=4ba6800b-99b3-48cb-bbfc-8e7fb438027d']
]


router.get('/:id', async (req, res) => {
    try{
        res.redirect(301, answers[req.params.id]);
    }
    catch(err)
    {
        res.sendStatus(404)
    }
})

module.exports = router;