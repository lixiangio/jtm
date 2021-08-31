/// <reference path="../types/index.d.ts" />

import test from 'jtm';

test.before('test.before', async t => {

   t.ok(true);

})

test('deepEqual', t => {

   t.deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 });

})


test('equal', async t => {

   // t.equal(12121, 12121);

})

test('hello', async t => {

   await t.sleep(3000);

   t.ok(true);

})


test('test.default', t => {

   t.ok(!false, '值必须为true');

})

test.skip('t1.skip', t => {

   t.ok(true);

})

test.after('test.after', t => {

   t.ok(true);

})