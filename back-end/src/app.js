import express from 'express'

const server = express()

server.get("/", (req, res) => {
    res.send("Requisição completa desse endpoint")
})


const PORT = 5000

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))