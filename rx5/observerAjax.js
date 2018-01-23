import Rx from 'rxjs/Rx'
let stream = Rx.Observable.create((observer) => {
	let request = new XMLHttpRequest();
	request.open("GET", "/README.md");
	request.onload = () => {
		if(request.status === 200){
			observer.next(request.response);
			observer.complete();
		} else {
			observer.error('error happened');
		}
	}

	request.onerror = () => {
		observer.error('error happened');
	}

	request.send();
});


stream.subscribe(data => console.log(data),err => console.log(err),() => console.log('complete'));
