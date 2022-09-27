const { Router } = require('express');
const Route = Router();
const ProblemsController = require('./controllers/problemsController');
const verifyParamsId = require('../schema/verifyParamsId');
const createProblemSchema = require('../schema/createProblemSchema');
const updateProblemSchema = require('../schema/updateProblemSchema');
const authentication = require('../auth/authentication');
const verifyUserType = require('../auth/verifyUserType');

Route.get('/list', ProblemsController.getAll);
Route.get('/find/:id', verifyParamsId, ProblemsController.findProblemsById);
Route.post('/create', authentication, verifyUserType, createProblemSchema, ProblemsController.createProblem);
Route.delete('/delete/:id', authentication, verifyUserType, verifyParamsId, ProblemsController.deleteProblem);
Route.put('/update/:id', authentication, verifyUserType, updateProblemSchema, ProblemsController.updateProblem);
Route.get('/problemandsuggestions/:id', verifyParamsId, ProblemsController.problemAndSuggestionsByProblemId);

module.exports = Route;
