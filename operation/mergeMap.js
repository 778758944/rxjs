//映射成 observable 并将其打平
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/take'
/*
const myPromise = (val) => new Promise((resolve, reject) => {
	resolve(`${val} World from promise`);
})

const source = Observable.of('hello');
// const example = source.mergeMap((val) => {
// 	return Observable.of(`${val} world`);
// })
const example = source.mergeMap((val) => {
	return myPromise(val);
}, (valueFromSource, valueFromPromise) => {
	return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`;
});

example.subscribe(val => console.log(val));
*/

const source = Observable.interval(1000);
const example = source.mergeMap(
	(val) => Observable.interval(5000),
	(oVal, iVal) => [oVal, iVal],
	2
);

example.subscribe(val => console.log(val));