import express from 'express'
import cors from 'cors'

const server = express()
server.use(express.json())
server.use(cors())

const users = [];
const tweets = [];
const avatars = [];

server.get("/tweets", (req, res) => {
    res.send(tweets)
})

server.post("/sign-up", (req, res) => {
    const username = req.body.username
    const avatar = req.body.avatar
    users.push(username)
    avatars.push({username, avatar})
    res.status(201).send("OK")
})

server.post("/tweets", (req, res) => {
    const dados = req.body

    if (users.includes(dados.username)) {
        console.log("Usuário Cadastrado")
        tweets.push(dados)
        res.status(201).send("OK")
    } else {
        res.status(401).send('UNAUTHORIZED')
    }
})


const PORT = 5000

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))