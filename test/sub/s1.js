﻿import test from 'jtm';

test.before('s1.before', async t => {

   t.ok(true);

})


test('hello', t => {

   t.ok(!false, '值必须为true');

})


test.skip('s1', t => {

   t.ok(true);

});

test.skip('s2', t => {

   t.ok(true);

});