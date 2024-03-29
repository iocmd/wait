'use strict';

const noop = () => {};

const {promisify} = require('util');

const isFn = (a) => typeof a === 'function';

const timeout = promisify((time, fn) => {
    setTimeout(fn, time);
});

module.exports = async (time, fn = noop, ...args) => {
    if (isFn(time)) {
        args.unshift(fn);
        fn = time;
        time = 0;
    }
    
    await timeout(time);
    
    fn(...args);
};

