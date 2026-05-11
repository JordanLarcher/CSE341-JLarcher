const routes = require('express').Router();
const lesson1 = require('../controllers/lesson1');

routes.get('/lesson1', lesson1.getLesson1);
routes.get('/lesson2', lesson1.getLesson2);



module.exports = routes;