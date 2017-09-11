let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
 
  res.render('content/index', { 
    title: 'Home' ,
    name:'SISI LI'
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {  
  res.render('content/about', 
  { title: 'About',
  });
});


/* GET nodejs page. */
router.get('/nodejs', (req, res, next) => {

  res.render('content/nodejs', {
    title: 'Node.js',
   });
});


/* GET javaee page. */
router.get('/javaee', (req, res, next) => {

  res.render('content/javaee', {
    title: 'JavaEE',
   });
});

/* GET android page. */
router.get('/android', (req, res, next) => {

  res.render('content/android', {
    title: 'Android',
   });
});


/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', {
    title: 'Contact',
  
   });
});


module.exports = router;
