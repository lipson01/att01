const express = require ('express');
const { listenerCount } = require('process');
const app = express();
const port = 3000

app.listen (port, () => {
 console.log(`meu servidor esta rodando na porta ${port}`)

})