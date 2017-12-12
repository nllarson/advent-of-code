const sum = require('../solution')

describe('Day 1', () => {
  describe('Problem 1', () => {
    test('1122 produces a sum of 3', () => {
      const sum = sum(1122)
      expect(sum).toBe(3)
    })

    test('1111 produces a sum of 4', () => {
      const sum = sum(1111)
      expect(sum).toBe(4)
    })

    test('1234 produces a sum of 0', () => {
      const sum = sum(1234)
      expect(sum).toBe(0)
    })

    test('91212129 produces a sum of 9', () => {
      const sum = sum(91212129)
      expect(sum).toBe(9)
    })
  })
})
