import { throws } from '../utils';

export const someAsync = async function(fn, thisArg) {
	throws(this, fn);

	const t = Object(this);
	const len = t.length;

	for (let i = 0; i < len; i++) {
		if (i in t && (await fn.call(thisArg, t[i], i, t))) {
			return true;
		}
	}

	return false;
};
