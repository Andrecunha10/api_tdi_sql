const {Router} = require('express');
const route = Router();
const SugestionsController = require('./controllers/SuggestionController');
const verifyParamsId = require('../schema/verifyParamsId');
const createSuggestionSchema = require('../schema/createSuggestionSchema');

route.get('/list', SugestionsController.getAll);
route.get('/find/:id', verifyParamsId, SugestionsController.findById);
route.post('/create', createSuggestionSchema, SugestionsController.createSuggestion);
route.delete('/delete/:id', verifyParamsId, SugestionsController.deleteSuggestion);
route.get('/findUserSuggestions/:id', verifyParamsId, SugestionsController.findSuggestionsByUserID);

module.exports = route;