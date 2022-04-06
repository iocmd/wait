'use strict';

const {run} = require('madrun');

module.exports = {
    'test': () => 'tape test/*.js',
    'coverage': () => 'c8 npm test',
    'lint': () => 'putout .',
    'fix:lint': () => run('lint', '--fix'),
    'report': () => 'c8 report --reporter=lcov',
    'watcher': () => 'nodemon -w test -w lib --exec',
    'watch:tape': () => 'nodemon -w test -w lib --exec tape',
    'watch:test': async () => await run('watcher', await run('test')),
    'watch:lint': async () => await run('watcher', await run('lint')),
};

