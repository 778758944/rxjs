import Rx from 'rxjs/Rx';

const { Observable } = Rx;

const speechRecognition$ = new Observable(observer => {
	const speech = new webkitSpeechRecognition();

	speech.onresult = (event) => {
		observer.next(event);
		observer.complete();
	} 

	speech.start();

	return () => {
		speech.stop();
	}
});

const say = (text) => new Observable(Observer => {
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.onend = (e) => {
		observer.next(e);
		observer.complete();
	};
	speechSynthesis.speak(utterance);
});

const button = document.querySelector('button');
const heyClick$ = Observable.fromEvent(button, 'click');

heyClick$
	.switchMap(e => speechRecognition$)
	.map(e => e.result[0][0].transcript)
	.map(text => {
		switch(text) {
			case 'I want':
				return 'candy';
			default: `I do not understand: "${text}"`;
		}
	}).concatMap(say).subscribe(e => console.log(e));



























