function setA(value) {
	a = value;
}

function setB(value) {
	b = value;
}

function multiply(x, y) {
	return x * y;
}

function calculate() {
	const result = multiply(Number(a), Number(b));
	output = `${a} x ${b} = ${result}`;
	updateView();
}
