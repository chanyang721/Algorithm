const Q = [];
const enQ = (n) => Q.push(n);
const deQ = () => Q.shift();

const isVisited = new Array(matrix.length).fill(false);

for (let i = 0; i < maxNum + 1; i++) {
	  matrix.push(new Array(maxNum + 1).fill(0));
	}