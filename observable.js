var Rx = require('rxjs/Rx');

var observable = Rx.Observable.create(function(observer){
	observer.next(1);
	observer.next(2);
	observer.next(3);
	setTimeout(()=>{
		observer.next(4);
		observer.complete();
	},1000);
})

// console.log('before subscribe');
// observable.subscribe({
// 	next:x => console.log('got value :'+x),
// 	error:err => console.error('error:'+err),
// 	complete:() => console.log('done')
// });

// console.log('after subscribe');

var observable2 = Rx.Observable.create(function(observer){
	try{
		observer.next(1);
		throw new Error({code:400,msg:'error'});
	} catch(err){
		observer.error(err);
		observer.complete();
	}
});

// observable2.subscribe({
// 	next:x => console.log(x),
// 	error:err => console.log(err),
// 	complete:() => console.log('done')
// });


// var observable3 = Rx.Observable.create(function(observer){
// 	var id = setInterval(() => {
// 		observer.next('hi');
// 	},1000);

// 	return function unsubscribe(){
// 		clearInterval(id);
// 	}
// })

// var unsubscribe = observable3.subscribe({
// 	next:x => console.log(x)	
// });

// unsubscribe();


//订阅对象的取消
var observable1 = Rx.Observable.interval(400);
var observable2 = Rx.Observable.interval(300);

var subscription = observable1.subscribe(x => console.log('first: '+x));
var childSubscription = observable2.subscribe(x => console.log('second: '+x));

subscription.add(childSubscription);

setInterval(function(){
	subscription.unsubscribe();
},1000);











