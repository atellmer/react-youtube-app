import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './containers/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const root = document.querySelector('#root');
	
render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App/>
	</Provider>, 
	root);