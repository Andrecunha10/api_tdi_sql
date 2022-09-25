const { Router } = require('express');
const Route = Router();
const ProblemsController = require('./controllers/problemsController');
const verifyParamsId = require('../schema/verifyParamsId');
const createProblemSchema = require('../schema/createProblemSchema');

Route.get('/list', ProblemsController.getAll);
Route.get('/find/:id', verifyParamsId, ProblemsController.findProblemsById);
Route.post('/create', createProblemSchema, ProblemsController.createProblem);

module.exports = Route;
