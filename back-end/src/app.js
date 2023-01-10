import express from 'express'
import cors from 'cors'

const server = express()
server.use(express.json())
server.use(cors())

const users = [];
const tweets = [];
const avatars = [];



server.post("/sign-up", (req, res) => {
    const user = req.body
    
    users.push(user.username)
    avatars.push(user)

    res.status(201).send("OK")
})

server.post("/tweets", (req, res) => {
    const username = req.body.username
    const tweet = req.body.tweet

    let usersFind = avatars.find(item => item.username === username)

    if (users.includes(username)) {
        
        tweets.unshift({
            username,
            avatar: usersFind.avatar, 
            tweet })
        res.status(201).send("OK")
    } else {
        res.status(401).send('UNAUTHORIZED')
    }
})

server.get("/tweets", (req, res) => {

    res.send(tweets.slice(0, 10))
})


const PORT = 5000

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))