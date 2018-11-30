import { extend } from './utils';
import { forEachAsync } from './async/foreach-async';
import { everyAsync } from './async/every-async';
import { someAsync } from './async/some-async';
import { filterAsync } from './async/filter-async';
import { findAsync } from './async/find-async';
import { findIndexAsync } from './async/find-index-async';
import { mapAsync } from './async/map-async';
import { reduceAsync } from './async/reduce-async';

extend(forEachAsync);
extend(everyAsync);
extend(someAsync);
extend(filterAsync);
extend(findAsync);
extend(findIndexAsync);
extend(mapAsync);
extend(reduceAsync);
