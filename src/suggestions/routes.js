const {Router} = require('express');
const route = Router();
const SugestionsController = require('./controllers/SuggestionController');
const verifyParamsId = require('../schema/verifyParamsId');
const createSuggestionSchema = require('../schema/createSuggestionSchema');
const updatedSuggestionSchema = require('../schema/updateSuggestionSchema');
const authentication = require('../auth/authentication');

route.get('/list', SugestionsController.getAll);
route.get('/find/:id', verifyParamsId, SugestionsController.findById);
route.post('/create',  authentication, createSuggestionSchema, SugestionsController.createSuggestion);
route.delete('/delete/:id',  authentication, verifyParamsId, SugestionsController.deleteSuggestion);
route.get('/findUserSuggestions/:id',  authentication, verifyParamsId, SugestionsController.findSuggestionsByUserID);
route.put('/update/:id',  authentication, updatedSuggestionSchema, SugestionsController.updateSuggestion);

module.exports = route;