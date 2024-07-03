import { it, expect } from 'vitest'
import { add } from './math'
it('should summarize all numbers in an array', () => {
  //Arrange
  const numbers = [1, 2, 3, 4]
  const expectedResult = numbers.reduce((acc, cur) => acc + cur, 0)
  //Act
  const result = add(numbers)
  //Assert
  expect(result).toBe(expectedResult)
})

it('should yield NaN if a least one invalid numbers is provided', () => {
  const input = ['a', 'b', 1]
  const result = add(input)
  expect(result).toBeNaN()
})

it('should yield a correct sum if an array of numeric string value is provided', () => {
  const input = ['1', '2']
  const expectedResult = input.reduce((acc, cur) => +acc + +cur, 0)
  const result = add(input)
  expect(result).toBe(expectedResult)
})

it('should yield 0 if an empty array is provided', () => {
  const numbers = []
  const result = add(numbers)
  expect(result).toBe(0)
})

//this is to read error
it('should throw an error if an empty array is provided', () => {
  const resulFn = () => {
    add()
  }
  expect(resulFn).toThrow()
  // try {
  //   const result = add()
  // } catch (error) {
  //   expect(error).toBeDefined()
  // }
})
