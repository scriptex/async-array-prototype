import { throws } from '../utils';

export const forEachAsync = async function(fn, thisArg) {
	throws(this, fn);

	const O = Object(this);
	const len = O.length;

	let i = 0;

	while (i < len) {
		if (i in O) {
			await fn.call(thisArg, O[i], i, O);
		}

		i++;
	}
};
