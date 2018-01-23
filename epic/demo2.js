import Rx from 'rxjs/Rx'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import {combineEpics, createEpicMiddleware} from 'redux-observable'

const { ajax } = Rx.Observable;

const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

window.fetchUser = (username) => ({type: FETCH_USER, payload: username});
const fetchUserFulfilled = (payload) => ({type: FETCH_USER_FULFILLED, payload});

const fetchUserEpic = (action$) => {
	return action$.ofType(FETCH_USER)
				.mergeMap(action => {
					return ajax.getJSON(`https://api.github.com/users/${action.payload}`)
							   .map(response => fetchUserFulfilled(response));
				});
}


const users = (state = {}, action) => {
	switch (action.type) {
		case FETCH_USER_FULFILLED:
			return Object.assign(state,{
				[action.payload.login]: action.payload
			})

		default:
			return state;
	}
}

const rootReducer = combineReducers({ users });
const rootEpic = combineEpics(fetchUserEpic);

const epicMiddleware = createEpicMiddleware(rootEpic);

window.store = createStore(rootReducer, applyMiddleware(epicMiddleware));

const renderApp = () => {
	const { users } = store.getState();
	const user = users['redux-observable'] || '';

	document.body.innerHTML = `
		<div>
			<h1>Fetch user demo</h1>
			<button onclick="(${() => {
				store.dispatch(fetchUser('redux-observable'));
			}})();">
				fetch user info
			</button>
			<div>
				${user && `<textarea>${JSON.stringify(user, null, 2)}</textarea>`}
			</div>
		</div>
	`;
};

store.subscribe(renderApp);
renderApp();


































