const express = require('express');
const router = express.Router();

/*GET home page quem somos*/
router.get('/', function(req, res, next) {
    res.render('quem-somos', { title: 'Funcionou!!!!' });
  });

/*GET home page nossos ligantes*/
router.get('/', function(req, res, next) {
  res.render('nossos-ligantes', { title: 'Funcionou!!!!' });
});

/*GET home page olimpiada*/
router.get('/', function(req, res, next) {
  res.render('olimpiada', { title: 'Funcionou!!!!' });
});

/*GET home page neurosciencia no brasil*/
router.get('/', function(req, res, next) {
  res.render('neurosciencia-no-brasil', { title: 'Funcionou!!!!' });
});

module.exports = router; 

