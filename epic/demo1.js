import Rx from 'rxjs/Rx'
import { createStore, applyMiddleware }  from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { createActions, handleActions, combineActions, createAction } from 'redux-actions'

const PING = 'PING';
const PONG = 'PONG';

window.ping = () => ({type: 'test'});
const actions = createAction("PING", (payload) => payload );
console.log(actions());

const pingEpic = (action$) => {
	return action$.filter((action) => {
		console.log(action);
		action.type === 'test'
	})
		.delay(1000)
		.mapTo({type: 'PONG'});
}


const pingReducer = (state = {isPinging: false}, action) => {
	switch (action.type) {
		case 'PING':
			return {isPinging: true}

		case 'PONG':
			return {isPinging: false}

		case 'test':
			return {isPinging: 'pedding'}

		default:
			return state;
	}
};

const epicMiddleware = createEpicMiddleware(pingEpic);

window.store = createStore(pingReducer, applyMiddleware(epicMiddleware));

const renderApp = () => {
	const { isPinging } = store.getState();

	document.body.innerHTML = `
		<div>
			<h1>is pinging: ${isPinging}</h1>
			<button onclick="(${() => {
				store.dispatch(ping());
			}})()">Start PING</button>
		</div>
	`
}

store.subscribe(renderApp);

renderApp();





















