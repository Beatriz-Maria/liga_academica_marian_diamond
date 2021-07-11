const express = require('express');
const router = express.Router();

/*GET home page nossos projetos*/
router.get('/', function(req, res, next) {
    res.render('nossos-projetos', { title: 'Funcionou!!!!' });
  });

module.exports = router;
