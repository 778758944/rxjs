import Rx from 'rxjs/Rx'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

const INCREMENT = 'INCREMENT';
const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';

window.increment = () => ({type: INCREMENT});
window.increment_if_odd = () => ({type: INCREMENT_IF_ODD});

const counterEpic = (action$, store) => {
	return action$.ofType(INCREMENT_IF_ODD)
		.filter(() => store.getState().counter % 2  === 0)
		.mapTo({type: INCREMENT});
}

const counter = (state = {counter: 0}, action) => {
	switch(action.type) {
		case INCREMENT:
			return {
				counter: state.counter+1
			}

		default: 
			return state;
	}
}


const counterEpicMiddle = createEpicMiddleware(counterEpic);
window.store = createStore(counter, applyMiddleware(counterEpicMiddle));


const renderApp = () => {
	let { counter } = store.getState();

	document.body.innerHTML = `
		<div>
			<h1>Counter is ${counter}</h1>
			<button onclick="(${() => {store.dispatch(increment())}})()">increment</button>
			<button onclick="(${() => {store.dispatch(increment_if_odd())}})()">increment_if_odd</button>
		</div>
	`
}

store.subscribe(renderApp)
renderApp();









































