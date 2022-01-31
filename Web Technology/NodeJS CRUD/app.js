const express = require('express')
const fs = require('fs')

const app = express()


app.use(express.json())

/* Create user - POST method */
app.post('/api/user/add', (req, res) => {

    const existUsers = getUserData()
    const userData = req.body

    if (userData.id == null || userData.name == null || userData.age == null || userData.gender == null) {
        return res.status(401).send({error: true, msg: 'User data missing'})
    }
 
    const findExist = existUsers.find( user => user.id === userData.id )

    if (findExist) {
        return res.status(409).send({error: true, msg: 'user id already exist'})
    }

    existUsers.push(userData)
    saveUserData(existUsers);
    res.send({success: true, msg: 'User data added successfully'})

})

/* Read all users - GET method */
app.get('/api/user/users', (req, res) => {
    const users = getUserData()
    res.send(users)
})

/* Read by id - GET method */
app.get('/api/user/users/:id',(req,res) => {
    const id = req.body.id;
    const existUsers = getUserData()

    const findExist = existUsers.find( user => user.id === id )
    if (!findExist) {
        return res.status(409).send({error: true, msg: 'user id does not exist'})
    } else {
        res.send(findExist);
    }
})

/* Update user by id- put method */
app.put('/api/user/update/:id', (req, res) => {

    const id = req.params.id
    const userData = req.body
    const existUsers = getUserData()
  
    const findExist = existUsers.find( user => user.id === id )
    if (!findExist) {
        return res.status(409).send({error: true, msg: 'user id does not exist'})
    }

    const updateUser = existUsers.filter( user => user.id !== id )
    updateUser.push(userData)
    saveUserData(updateUser)
    res.send({success: true, msg: 'User data updated successfully'})
})

/* Delete user by id - Delete method */
app.delete('/api/user/delete/:id', (req, res) => {
    const id = req.params.id
    const existUsers = getUserData()

    const filterUser = existUsers.filter( user => user.id !== id )

    if ( existUsers.length === filterUser.length ) {
        return res.status(409).send({error: true, msg: 'user id does not exist'})
    }

    saveUserData(filterUser)
    res.send({success: true, msg: 'User removed successfully'}) 
})


const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('user.json', stringifyData)
}


const getUserData = () => {
    const jsonData = fs.readFileSync('user.json')
    return JSON.parse(jsonData)    
}


app.listen(8080, () => {
    console.log('Server runs on port 8080')
})

