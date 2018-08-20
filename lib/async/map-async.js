import { throws } from '../utils';

export const mapAsync = async function(fn, thisArg) {
  throws(this, fn);
  
  const O = Object(this);
  const len = O.length;
  const A = new Array(len);
  
  let i = 0;
  
  while (i < len) {
    if (i in O) {
      A[i] = await fn.call(thisArg, O[i], i, O);
    }
    
    i++;
  }
  
  return A;
};