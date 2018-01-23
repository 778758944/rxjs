import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/take'
import 'rxjs/add/observable/of'
const source = Observable.of(1,2,3,4,5);
const example = source.take(3);
const subscribe = example.subscribe(val => console.log(val));