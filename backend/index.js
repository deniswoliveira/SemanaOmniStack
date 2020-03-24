const express = require('express')

const app = express()

app.get('/', (request, response) => {
    return response.json({
        msg: "Semana Omnistack 11.0",
        aluno: "Dênis"
    })
})

app.listen(3333)

