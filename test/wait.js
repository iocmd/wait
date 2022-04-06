'use strict';

const {test, stub} = require('supertape');
const wait = require('..');

test('wait: setTimeout', async (t) => {
    const {setTimeout} = global;
    const setTimeoutStub = stub((f) => f());
    
    global.setTimeout = setTimeoutStub;
    
    const fn = stub();
    await wait(fn);
    
    global.setTimeout = setTimeout;
    
    t.calledWith(setTimeoutStub, [fn, 0]);
    t.end();
});

test('wait: setTimeout: timeout', async (t) => {
    const {setTimeout} = global;
    const setTimeoutStub = stub((f) => f());
    
    global.setTimeout = setTimeoutStub;
    
    const fn = stub();
    await wait(1, fn);
    
    global.setTimeout = setTimeout;
    
    t.calledWith(setTimeoutStub, [fn, 1]);
    t.end();
});

test('wait: setTimeout: args', async (t) => {
    const fn = stub();
    await wait(1, fn, 'hello');
    
    t.calledWith(fn, ['hello']);
    t.end();
});

test('wait: setTimeout: args: no timeout', async (t) => {
    const fn = stub();
    await wait(fn, 'hello');
    
    t.calledWith(fn, ['hello']);
    t.end();
});

