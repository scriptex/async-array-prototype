import { throws } from '../utils';

export const everyAsync = async function(fn, thisArg) {
  throws(this, fn);
  
  const O = Object(this);
  const len = O.length;
  
  let i = 0;
  
  while (i < len) {
    if (i in O) {
      const testResult = await fn.call(thisArg, O[i], i, O);
      
      if (!testResult) {
        return false;
      }
    }
    
    i++;
  }
  
  return true;
};