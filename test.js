/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const test = require('tape')

const some = require('.')

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

test('array.some', (assert) => {

  assert
    .deepEqual(
      some(arr, ele => { return ele > 5 }),
      true,
      'should return true'
    )

  assert
    .deepEqual(
      some(arr, ele => { return ele > 10 }),
      false, 'should return false'
    )

  assert.end()
})
