import express from 'express'
import { v4 as uuidv4 } from 'uuid';


const router = express.Router()

const users = [
    {
        name: "semo",
        city: "tadla",
        age: "21"
    }
]

//all users starts with /
router.get('/', (req, res)=>{
    res.send(users)
})
router.post('/', (req, res)=>{  
    const user = req.body

    users.push({ ...user, id: uuidv4()})

    res.send(`User with the name ${user.name} added to the users`)
})

router.get('/:id', (req, res)=> {
    const {id } = req.params
    const findUser = users.find((user)=> user.id === id)
    res.send(findUser)
})


export default router;