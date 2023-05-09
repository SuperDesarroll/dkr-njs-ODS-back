//crear codigo server.js escuhando puerto 3000
//importar express
const express = require('express');
//crear servidor
const app = express();
//crear ruta
app.get('/', (req, res) => {
    res.send('Backend #1');
}
);
//escuchar puerto
app.listen(3000, () => {
    console.log('Server on port 3000');
}
);

