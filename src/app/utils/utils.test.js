import { calculateTimeLeft } from './utils'

describe('calculateTimeDifference', () => {
  test('should return correct time difference when olympicsDate is in the future', () => {
    const result = calculateTimeLeft()

    expect(result.days).toBeGreaterThan(0)
  })

  test('should throw an error when olympicsDate is in the past', () => {
    jest
      .spyOn(global.Date, 'now')
      .mockImplementationOnce(() => new Date('2025-12-01T00:00:00Z').getTime())

    expect(() => calculateTimeLeft()).toThrow(
      'Olympics date must be in the future'
    )
  })
})
