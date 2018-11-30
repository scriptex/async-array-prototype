import { throws } from '../utils';

export const findIndexAsync = async function(fn, thisArg) {
	throws(this, fn);

	const list = Object(this);
	const len = list.length;

	for (let i = 0; i < len; i++) {
		if (await fn.call(thisArg, list[i], i, list)) {
			return i;
		}
	}

	return -1;
};
