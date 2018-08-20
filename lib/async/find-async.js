import { throws } from '../utils';

export const findAsync = async function(fn, thisArg) {
  throws(this, fn);
  
  const list = Object(this);
  const len = list.length;
  
  for (let i = 0; i < len; i++) {
    const val = list[i];
    
    if (await fn.call(thisArg, val, i, list)) {
      return val;
    }
  }
  
  return undefined;
};