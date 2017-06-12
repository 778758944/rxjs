var Rx = require('rxjs/Rx');

var botton = document.querySelector('button');
Rx.Observable.fromEvent(botton,'click')
.throttleTime(1000)//控制事件流入时间间隔
.map(event => event.clientX)//通过可观察对象转化值
// .scan(count => count+1,0)//传给回调函数的值，函数返回值即为传给函数的参数
.subscribe(count => console.log('clicked '+count+' times'));


