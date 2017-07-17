"use strict";

var Dispatcher = require('../dispatcher/appDispatcher')
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var InitiliazeActions = {
    initApp: function(){
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        });
    }
};

module.exports = InitiliazeActions;
