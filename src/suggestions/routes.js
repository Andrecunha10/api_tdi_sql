const {Router} = require('express');
const route = Router();
const sugestionsController = require('./controllers/SuggestionController');
const verifyParamsId = require('../schema/verifyParamsId');
const createSuggestionSchema = require('../schema/createSuggestionSchema');

route.get('/list', sugestionsController.getAll);
route.get('/find/:id', verifyParamsId, sugestionsController.findById);
route.post('/create', createSuggestionSchema ,sugestionsController.createSuggestion);

module.exports = route;