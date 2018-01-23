/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-13 10:40:31
 * @version $Id$
 */
var Rx = require('rxjs/Rx'),
	source = Rx.Observable.interval(500),
	subject = new Rx.Subject(),
	multicasted = source.multicast(subject),
	refCounted = multicasted.refCount(),
	subscription1,subscription2,subscriptionConnect;
/*
subscription1 = multicasted.subscribe({
	next:(v) => console.log('observerA: '+v)
})

subscriptionConnect = multicasted.connect();

setTimeout(() => {
	subscription2 = multicasted.subscribe({
		next:(v) => console.log('observerB: '+v)
	})
},600);

setTimeout(()=>subscription1.unsubscribe(),1200);
setTimeout(()=>{
	subscription2.unsubscribe();
	subscriptionConnect.unsubscribe();
},2000);*/

console.log('A subscribe');

subscription1 = refCounted.subscribe({
	next:(v)=>console.log('A: '+v)
});

setTimeout(()=>{
	console.log('B subscribe');
	subscription2 = refCounted.subscribe({
		next:(v) => console.log('B: '+v)
	})
},600)

setTimeout(()=>{
	console.log('a unsubscribe');
	subscription1.unsubscribe();
},1200);

setTimeout(()=>{
	console.log('b unsubscribe');
	subscription2.unsubscribe();
},2000)




































