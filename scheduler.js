/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-13 14:17:50
 * @version $Id$
 */
var Rx = require('rxjs/Rx');
var observable = Rx.Observable.create(function(observer){
	observer.next(1);
	observer.next(2);
	observer.next(3);
	observer.complete();
}).observeOn(Rx.Scheduler.async);

console.log('just before subscribe');

observable.subscribe({
	next:(x) => console.log('got value '+x),
	error:(err) => console.log('something wrong occured: '+err),
	complete:() => console.log('done')
});

console.log('just after subscribe');
