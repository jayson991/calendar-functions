const calendar = require('../lib')

describe('Test addPrefix Function', () => {
  test('It should be return 01 when parameter is 1', () => {
    expect(calendar.addPrefix(1)).toEqual('01')
  })
  test('It should be return 10 when parameter is 10', () => {
    expect(calendar.addPrefix(10)).toEqual('10')
  })
})

describe('Test deletePrefix Function', () => {
  test('It should be return 1 when parameter is 01', () => {
    expect(calendar.deletePrefix('01')).toEqual(1)
  })

  test('It should be return 10 when parameter is 10', () => {
    expect(calendar.deletePrefix('10')).toEqual(10)
  })
})

describe('Test getCalendar Function', () => {
  test('It should return an array that contains 3 items', () => {
    expect(calendar.getCalendar('2020-02-01', '2020-02-03')).toEqual([
      { year: 2020, month: 1, day: 1, week: 6 },
      { year: 2020, month: 1, day: 2, week: 0 },
      { year: 2020, month: 1, day: 3, week: 1 }
    ])
  })

  test('It should return an array that contains 2 items', () => {
    expect(calendar.getCalendar('2020-02-29', '2020-03-01')).toEqual([
      { year: 2020, month: 1, day: 29, week: 6 },
      { year: 2020, month: 2, day: 1, week: 0 }
    ])
  })
})

describe('Test getMonthWeek Function', () => {
  test('It should be return 2 when parameter are [2020, 2, 7]', () => {
    expect(calendar.getMonthWeek(2020, 2, 7)).toEqual(2)
  })

  test('It should be return 3 when parameter are [2020, 2, 9]', () => {
    expect(calendar.getMonthWeek(2020, 2, 9)).toEqual(3)
  })
})

describe('Test getWeek Function', () => {
  test('It should be return 6 when parameter is 2020-02-01', () => {
    expect(calendar.getWeek('2020-02-01')).toEqual(6)
  })

  test('It should be return 6 when parameter is 2020/02/01', () => {
    expect(calendar.getWeek('2020/02/01')).toEqual(6)
  })

  test('It should be return 6 when parameter is 1580515200000', () => {
    expect(calendar.getWeek(1580515200000)).toEqual(6)
  })
})

describe('Test getYearWeek Function', () => {
  test('It should be return 5 when parameter are [2020, 2, 1]', () => {
    expect(calendar.getYearWeek(2020, 2, 1)).toEqual(5)
  })

  test('It should be return 7 when parameter are [2020, 2, 10]', () => {
    expect(calendar.getYearWeek(2020, 2, 10)).toEqual(7)
  })
})

describe('Test getDays Function', () => {
  test('It should be return 2 when parameter are "2020-02-01T10:45:20+0000" && "2020-02-03T12:15:50+0000"', () => {
    expect(calendar.getDays('2020-02-01T10:45:20+0000', '2020-02-03T12:15:50+0000')).toEqual(2)
  })

  test('It should be return 2 when parameter are "2020-02-01T10:45:20" && "2020-02-03T12:15:50"', () => {
    expect(calendar.getDays('2020-02-01T10:45:20', '2020-02-03T12:15:50')).toEqual(2)
  })

  test('It should be return 2 when parameter are "2020-02-01T10:45" && "2020-02-03T12:15"', () => {
    expect(calendar.getDays('2020-02-01T10:45', '2020-02-03T12:15')).toEqual(2)
  })

  test('It should be return 2 when parameter are "2020-02-01" && "2020-02-03"', () => {
    expect(calendar.getDays('2020-02-01', '2020-02-03')).toEqual(2)
  })
})

describe('Test getHours Function', () => {
  test('It should be return 1 when parameter are "2020-02-01T10:45:20+0000" && "2020-02-03T12:15:50+0000"', () => {
    expect(calendar.getHours('2020-02-01T10:45:20+0000', '2020-02-03T12:15:50+0000')).toEqual(1)
  })

  test('It should be return 1 when parameter are "2020-02-01T10:45:20" && "2020-02-03T12:15:50"', () => {
    expect(calendar.getHours('2020-02-01T10:45:20', '2020-02-03T12:15:50')).toEqual(1)
  })

  test('It should be return 1 when parameter are "2020-02-01T10:45" && "2020-02-03T12:15"', () => {
    expect(calendar.getHours('2020-02-01T10:45', '2020-02-03T12:15')).toEqual(1)
  })

  test('It should be return 0 when parameter are "2020-02-01" && "2020-02-03"', () => {
    expect(calendar.getHours('2020-02-01', '2020-02-03')).toEqual(0)
  })
})

describe('Test getMinutes Function', () => {
  test('It should be return 30 when parameter are "2020-02-01T10:45:20+0000" && "2020-02-03T12:15:50+0000"', () => {
    expect(calendar.getMinutes('2020-02-01T10:45:20+0000', '2020-02-03T12:15:50+0000')).toEqual(30)
  })

  test('It should be return 30 when parameter are "2020-02-01T10:45:20" && "2020-02-03T12:15:50"', () => {
    expect(calendar.getMinutes('2020-02-01T10:45:20', '2020-02-03T12:15:50')).toEqual(30)
  })

  test('It should be return 30 when parameter are "2020-02-01T10:45" && "2020-02-03T12:15"', () => {
    expect(calendar.getMinutes('2020-02-01T10:45', '2020-02-03T12:15')).toEqual(30)
  })

  test('It should be return 0 when parameter are "2020-02-01" && "2020-02-03"', () => {
    expect(calendar.getMinutes('2020-02-01', '2020-02-03')).toEqual(0)
  })
})

describe('Test getSeconds Function', () => {
  test('It should be return 30 when parameter are "2020-02-01T10:45:10+0000" && "2020-02-03T12:15:20+0000"', () => {
    expect(calendar.getSeconds('2020-02-01T10:45:20+0000', '2020-02-03T12:15:50+0000')).toEqual(30)
  })

  test('It should be return 30 when parameter are "2020-02-01T10:45:20" && "2020-02-03T12:15:50"', () => {
    expect(calendar.getSeconds('2020-02-01T10:45:20', '2020-02-03T12:15:50')).toEqual(30)
  })

  test('It should be return 0 when parameter are "2020-02-01T10:45" && "2020-02-03T12:15"', () => {
    expect(calendar.getSeconds('2020-02-01T10:45', '2020-02-03T12:15')).toEqual(0)
  })

  test('It should be return 0 when parameter are "2020-02-01" && "2020-02-03"', () => {
    expect(calendar.getSeconds('2020-02-01', '2020-02-03')).toEqual(0)
  })
})

