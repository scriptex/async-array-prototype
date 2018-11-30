/**
 * Save a reference to Array's prototype
 */
const arrayProto = Array.prototype;

/**
 * Check if arguments match requirements
 * and if not, throw errors
 *
 * @param {Object|undefined} thisArg
 * @param {Function} fn
 *
 * @returns {Void}
 */
export const throws = (thisArg, fn) => {
	if (thisArg === null) {
		throw new TypeError('`this` is null or not defined');
	}

	if (typeof fn !== 'function') {
		throw new TypeError(fn + ' is not a function');
	}
};

/**
 * Extend a prototype. By default extends
 * the Array prototype
 *
 * @param {Function} fn
 * @param {Object} proto
 *
 * @returns {Void}
 */
export const extend = (fn, proto = arrayProto) => {
	const { name } = fn;

	if (proto[name]) {
		return;
	}

	proto[name] = fn;
};
