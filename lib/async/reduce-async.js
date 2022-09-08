import { throws } from '../utils';

export const reduceAsync = async function (fn, accumulator, thisArg) {
	throws(this, fn);

	const O = Object(this);

	let result = accumulator;

	for (const value of O) {
		result = await fn.call(thisArg, accumulator, value);
	}

	return result;
};
