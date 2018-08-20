import { throws } from '../utils';

export const filterAsync = async function(fn, thisArg) {
  throws(this, fn);
  
  const t = Object(this);
  const len = t.length;
  const res = [];
  
  for (let i = 0; i < len; i++) {
    if (i in t) {
      const val = t[i];
      
      if (await fn.call(thisArg, val, i, t)) {
        res.push(val);
      }
    }
  }
  
  return res;
};