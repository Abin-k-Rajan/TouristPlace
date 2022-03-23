const express = require('express')
const router = express.Router()

const answers = [
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Flab1.tcl?alt=media&token=6fd51bb6-0ab6-4b5f-9963-a76fe962c757'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Flab2.tcl?alt=media&token=f3c82a44-d44b-4b92-bd9b-d1e5f71108bc'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Fprog3.tcl?alt=media&token=0b7de584-6a4f-4f83-b538-5444340dbb2b'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Flab4.tcl?alt=media&token=6255b427-7c3c-434b-ab03-a2a45e5dab23'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Fprog5.tcl?alt=media&token=aaa30fd1-6070-44c2-bdbe-f03b850ff32e'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Fprog6.tcl?alt=media&token=4ba6800b-99b3-48cb-bbfc-8e7fb438027d'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2FCRC.java?alt=media&token=819ded86-8732-4814-aba3-3c4c605f18f2'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Fbellmanford.java?alt=media&token=6808e184-e521-4641-a913-6b3dd34cf0fb'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Ftcpserver.java?alt=media&token=c968a4d9-dbaa-44f6-8f64-d2b42855ab75'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Ftcpclient.java?alt=media&token=96c06f73-56a7-47b5-95a0-2ee5ea3be367'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2FUDPServer.java?alt=media&token=60dcfe1f-17c8-417c-8bea-15862930e73c'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2FUDPClient.java?alt=media&token=12f0d3e0-2386-4687-9480-3636ade33887'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Frsal.java?alt=media&token=f9e27962-67f6-4868-b74c-a71c4b1978cf'],
        ['https://firebasestorage.googleapis.com/v0/b/happylearner-3a02f.appspot.com/o/CheatCodes%2Fbucket.java?alt=media&token=6c8ab209-f0ba-4c73-a296-3605281aacc6']
        
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