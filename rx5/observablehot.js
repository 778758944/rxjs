import Rx from 'rxjs/Rx';
//cold observable
let stream$ = Rx.Observable.of(1,2,3,4,5)
.do(value => {
	// console.log('do', value);
})
.filter(value => {
	return value % 2 === 1200;
})


//sub1
stream$.subscribe(
	data => console.log(data),
	err => console.error(err),
	() => console.log('completed')
	)

let person$ = Rx.Observable.ajax({
	url: '/README.md',
	crossDomain: true,
	createXHR: function(){
		return new XMLHttpRequest();
	}
}).map(e => e);

const sub2 = person$.subscribe(res => {
	let element = document.getElementById('content');
	element.innerHTML = res;
	console.log(res);
});

const fetchObservable = Rx.Observable.from(fetch('/README.md'))
.flatMap(res => Rx.Observable.from(res.json()))
.subscribe(fetchRes => {
	console.log('fetch sub', fetchRes);
});


