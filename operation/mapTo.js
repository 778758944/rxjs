//将每个发出值映射成字符串
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mapTo';
const source = Observable.interval(1000);
const example = source.mapTo("hello world");
example.subscribe((val) => console.log(val));