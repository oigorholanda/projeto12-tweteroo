import express from 'express'

const server = express()
server.use(express.json())

const users = [];

server.get("/", (req, res) => {
    res.send("Requisição completa desse endpoint")
})

server.post("/sign-up", (req, res) => {
    const dados = req.body
    users.push(dados.username)
    res.send(dados.username)
})


const PORT = 5000

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))