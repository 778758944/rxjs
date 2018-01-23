import Rx from 'rxjs/Rx'
let stream$ = Rx.Observable.create((observer) => {
	observer.next(1);
	observer.error('error message');
	observer.complete('complete');
});

stream$.subscribe(
	data => console.log("data", data),
	error => console.log(error),
	msg => alert("complete")
);

let stream2$ = new Rx.Observable.create((observer) => {
	let i = 0;
	let id = setInterval(() => {
		observer.next(i++);
	},1000)


	//unsubscribe会执行return函数
	return function(){
		clearInterval(id);
	}
});

let subscribe = stream2$.subscribe((value) => {
	console.log("Value", value)
});

setTimeout(() => {
	subscribe.unsubscribe();
}, 3000);

