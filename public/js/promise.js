async function init() {
	var date = await getDays();
	console.log(date.getDate());
}

function getDays() {
	var d = new Date();
	return new Promise(function(resolve, reject){
		resolve(d);
	});
}

init();


function getFoo() {
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
			resolve('foo');
		}, 300);
	});
}

async function foo() {
	var result = await getFoo();
	console.log(result);
}

foo();


/*
promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
*/
// expected output: [object Promise]