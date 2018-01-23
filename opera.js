/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-13 14:00:02
 * @version $Id$
 */

 //操作符
var Rx = require('rxjs/Rx');
// var fs = require('fs');

// function multiplyByTen(input){
// 	var output = Rx.Observable.create(function(observer){
// 		input.subscribe({
// 			next:(v) => observer.next(10*v),
// 			error:(err) => observer.error(err),
// 			complete:() => observer.complete()
// 		})
// 	});

// 	return output
// }

// var input = Rx.Observable.from([1,2,3,4]);
// var output = multiplyByTen(input);

// output.subscribe({
// 	next:(v) => console.log(v)
// });





//bindNodeCallBack传入node call,生成可以产生observable的函数
// var readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
// var result = readFileAsObservable('tes.js','utf8');
// result.subscribe({
// 	next:(v) => console.log(v),
// 	error:err => {
// 		console.log('error');
// 		console.log(err);
// 	}
// });


//combineLatest

// var weight = Rx.Observable.of(70,72,76,79,75);
// var height = Rx.Observable.of(1.76,1.77,1.78);
// var bmi = Rx.Observable.combineLatest(weight,height,(w,h) => w/(h*h));
// bmi.subscribe((x) => console.log('BMI is '+x));

//concat 安observal顺序发射每个值
// var timer = Rx.Observable.interval(1000).take(4);
// var sequence = Rx.Observable.range(1,10);
// var result = Rx.Observable.concat(timer,sequence);

// result.subscribe(x => console.log(x));


//deffer 

// var clicksOrInterval = Rx.Observable.defer(function(){
// 	if(Math.random() > 0.5){
// 		return Rx.Observable.fromEvent(document,'click');
// 	} else {
// 		return Rx.Observable.interval(1000);
// 	}
// });

// clicksOrInterval.subscribe((x)=>console.log(x));

//empty
var result = Rx.Observable.empty();
result.subscribe({
	complete:() => console.log('done')
});










































