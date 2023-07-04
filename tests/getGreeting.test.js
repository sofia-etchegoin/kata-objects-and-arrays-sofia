import { test, expect } from 'vitest'
import * as kata from './kata.js'

test('getGreeting returns "Hello <name>"', () => {
  const expected = 'Hello Aardvark'
  const actual = kata.getGreeting('Aardvark')
  expect(actual).toBe(expected)
})
