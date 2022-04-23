const express = require('express');
const app = express();

app.get('/users/:id/:postId?', (req,res) => { //? o alanın zorunlu olmadığını gösteriyor.
    res.send(req.params); //req.params.id deersek yalnızca id 'yi döndürüyor.
});

app.listen(6000, () => {
    console.log("Express Server Çalıştı!");
});
