import express from 'express'

const server = express()
server.use(express.json())

const users = [];
const tweets = [];

server.get("/tweets", (req, res) => {
    res.send("Requisição completa desse endpoint")
})

server.post("/sign-up", (req, res) => {
    const dados = req.body
    users.push(dados.username)
    res.status(201).send("OK")
})

server.post("/tweets", (req, res) => {
    const dados = req.body

    if (users.includes(dados.username)) {
        console.log("validado")
        tweets.push(dados.tweet)
        res.status(201).send("OK")
    } else {
        res.status(401).send('UNAUTHORIZED')
    }
})


const PORT = 5000

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))