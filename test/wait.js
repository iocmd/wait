'use strict';

const stub = require('@cloudcmd/stub');
const test = require('supertape');

const wait = require('..');

test('wait: setTimeout', async (t) => {
    const {setTimeout} = global;
    const setTimeoutStub = stub((f) => f());
    global.setTimeout = setTimeoutStub;
    
    const fn = stub();
    await wait(fn);
    
    global.setTimeout = setTimeout;
    
    t.ok(setTimeoutStub.calledWith(fn, 0));
    t.end();
});

test('wait: setTimeout: timeout', async (t) => {
    const {setTimeout} = global;
    const setTimeoutStub = stub((f) => f());
    global.setTimeout = setTimeoutStub;
    
    const fn = stub();
    await wait(1, fn);
    
    global.setTimeout = setTimeout;
    
    t.ok(setTimeoutStub.calledWith(fn, 1));
    t.end();
});

test('wait: setTimeout: args', async (t) => {
    const fn = stub();
    await wait(1, fn, 'hello');
    
    t.ok(fn.calledWith('hello'));
    t.end();
});

test('wait: setTimeout: args: no timeout', async (t) => {
    const fn = stub();
    await wait(fn, 'hello');
    
    t.ok(fn.calledWith('hello'));
    t.end();
});

