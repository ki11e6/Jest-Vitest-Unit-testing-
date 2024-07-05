import {
  it,
  expect,
  describe,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
} from 'vitest'

import { User } from './hooks'

//Global variables
const testEmail = 'test@test.com'
let user = new User(testEmail)

describe('User Class tests', () => {
  beforeAll(() => {
    console.log('beforeAll')
  })

  beforeEach(() => {
    console.log('beforeEach')
  })

  afterAll(() => {
    console.log('afterAll')
  })

  afterEach(() => {
    user = new User(testEmail)
    console.log('afterEach')
  })

  it('should update the email', () => {
    const newTestEmail = 'test2@test.com'
    user.updateEmail(newTestEmail)
    expect(user.email).toBe(newTestEmail)
  })

  it('should have an email property', () => {
    expect(user).toHaveProperty('email')
  })

  it('should store the provided email value', () => {
    expect(user.email).toBe(testEmail)
  })

  it('should clear the email', () => {
    user.clearEmail()

    expect(user.email).toBe('')
  })

  //To run test CONCURRENTLY we can use "concurrent" annotation to "describe" or every single "it".

  it.concurrent(
    'should still have an email property after clearing the email',
    () => {
      user.clearEmail()

      expect(user).toHaveProperty('email')
    }
  )
})
