const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=> res.send('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" /><br /><h1>Aplicación de NodeJs corriendo modificada desde el pipeline</h1>'));

module.exports = router;