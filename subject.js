/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-13 10:02:21
 * @version $Id$
 */

 //多播
var Rx = require('rxjs/Rx');
var subject = new Rx.Subject();
subject.subscribe({
	next:(v) => console.log('observerA: '+v)
});

subject.subscribe({
	next:(v) => console.log('observerB: '+v)
});

var observable = Rx.Observable.from([1,2,3]);
var observable2 = Rx.Observable.create(function(observer){
	observer.next(1);
	observer.next(2);
	setTimeout(()=>{
		observer.next(3);
		observer.complete();
	},2000)
})
// observable.subscribe(subject);


var subject2 = new Rx.Subject();
var multicasted = observable2.multicast(subject2);
multicasted.subscribe({
	next:(v) => console.log('observerA: '+v)
});

multicasted.subscribe({
	next:(v) => console.log('observerB: '+v)
});
//connect触发执行
// var subscription = multicasted.connect();
// subscription.unsubscribe();

//behaviour
var behaviourSubject = new Rx.BehaviorSubject(0);
// behaviourSubject.subscribe({
// 	next:(v) => console.log('observableA:'+v)
// });

// behaviourSubject.next(1);
// behaviourSubject.next(2);

// behaviourSubject.subscribe({
// 	next:(v) => console.log('observerB:'+v)
// })

//ReplaySubject
var replaySubject = new Rx.ReplaySubject(4);
// replaySubject.subscribe({
// 	next:(v) => console.log('A:'+v)
// });

// replaySubject.next(1);
// replaySubject.next(2);
// replaySubject.next(3);
// replaySubject.next(4);

// replaySubject.subscribe({
// 	next:(v) => console.log('B:'+v)
// });

// replaySubject.next(5);

var replaySubject2 = new Rx.ReplaySubject(100,500);
// replaySubject2.subscribe({
// 	next:(v) => console.log(v)
// });
// var i = 1;
// var timer = setInterval(()=>{
// 	replaySubject2.next(i);
// 	i++;
// },200)

// setTimeout(()=>{
// 	replaySubject2.subscribe({
// 		next:(v)=>console.log(v)
// 	})
// 	clearInterval(timer);
// },1000);

//AsyncSubject
var asyncSubject = new Rx.AsyncSubject();
asyncSubject.subscribe({
	next:(v) => console.log(v)
});


asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);
asyncSubject.complete();

































