//对源 observable 的每个值应用投射函数。
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/from';
import 'rxjs/add/operator/map';

const source = Observable.from([1, 2, 3, 4, 5]);
const example = source.map((val) => val + 1);
example.subscribe(val => console.log(val));

