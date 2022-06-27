import express from 'express'

const router = express.Router()

//all users starts with /
router.get('/', (req, res)=>{
    res.send('all the users')
})

export default router;