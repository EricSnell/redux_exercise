var redux = require( 'redux' );
var createStore = redux.createStore;
// Adding THUNK middleware
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var reducers = require( './reducers' );

// Applying middleware
var store = createStore( reducers.repositoryReducer, applyMiddleware(thunk) );
module.exports = store;
