import { describe, it, expect } from '@jest/globals'

const detectTriangle = (sideA, sideB, sideC) => {
  [sideA, sideB, sideC].forEach((side) => {
    if (!Number.isInteger(side)) {
      throw new Error('Sides have to be Integer')
    }
    if (side < 1) {
      throw new Error('Strange Triangle')
    }
    if (sideA === sideB && sideA === sideC) {
      return 'Equilateral Triangle'
    }
  })
}

describe('Detect the triangle', () => {
  it('Should fail if the sides are less than 1', () => {
    expect(() => detectTriangle(-1, 2, 2)).toThrowError('Strange Triangle')
    expect(() => detectTriangle(1, -2, 2)).toThrowError('Strange Triangle')
    expect(() => detectTriangle(1, 2, -2)).toThrowError('Strange Triangle')
  })
  it('Should fail if the sides are not integer', () => {
    expect(() => detectTriangle('a', 2, 2)).toThrowError('Sides have to be Integer')
    expect(() => detectTriangle(1, 'a', 2)).toThrowError('Sides have to be Integer')
    expect(() => detectTriangle(1, 2, 'a')).toThrowError('Sides have to be Integer')

    expect(() => detectTriangle(' ', 2, 2)).toThrowError('Sides have to be Integer')
  })
  it('Should detect Equilateral Triangle if all sides are equal', () => {
    expect(detectTriangle(1, 1, 1)).toEqual('Equilateral Triangle')
  })
})
