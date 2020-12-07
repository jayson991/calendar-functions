const addPrefix = data => {
  return data < 10 ? `0${data}` : `${data}`
}

const deletePrefix = data => {
  const DECIMAL = 10

  return parseInt(data, DECIMAL)
}

const getPeriod = (start, end) => {
  const dateStart = start.split('-')
  const startDate = new Date(dateStart[0], deletePrefix(dateStart[1]) - 1, deletePrefix(dateStart[2]))

  const dateEnd = end.split('-')
  const endDate = new Date(dateEnd[0], deletePrefix(dateEnd[1]) - 1, deletePrefix(dateEnd[2]))

  return {
    startDate,
    endDate
  }
}

const getCalendar = (start, end) => {
  const period = []
  const { startDate, endDate } = getPeriod(start, end)

  while (endDate.getTime() - startDate.getTime() >= 0) {
    const year = startDate.getFullYear() - 0
    const month = startDate.getMonth() - 0
    const day = startDate.getDate() - 0
    const week = startDate.getDay() - 0
    const obj = {
      year,
      month,
      day,
      week
    }

    period.push(obj)

    startDate.setDate(startDate.getDate() + 1)
  }

  return period
}

const getWeek = (date) => {
  const DECIMAL = 10
  let year, month, day

  if (/[-/]/g.test(date) && Object.prototype.toString.call(date) === '[object String]') {
    const dateArr = date.split(/[-/]/)
    year = parseInt(dateArr[0], DECIMAL)
    month = parseInt(dateArr[1], DECIMAL) - 1
    day = parseInt(dateArr[2], DECIMAL)
  }

  if (!/[-/]/g.test(date) && Object.prototype.toString.call(date) === '[object Number]') {
    const dateFormat = new Date(date)
    year = dateFormat.getFullYear()
    month = dateFormat.getMonth()
    day = dateFormat.getDate()
  }

  return (year && month && day && new Date(year, month, day).getDay()) || 'Invalid Date Object!'
}

const getMonthWeek = (year, month, date) => {
  const DECIMAL = 10
  const dateNow = new Date(parseInt(year, DECIMAL), parseInt(month, DECIMAL) - 1, parseInt(date, DECIMAL))
  const week = dateNow.getDay()
  const day = dateNow.getDate()

  return Math.ceil((day + 6 - week) / 7)
}

const getYearWeek = (year, month, date) => {
  const DECIMAL = 10
  const dateFirst = new Date(parseInt(year, DECIMAL), 0, 1)
  const oneDayTime = 24 * 60 * 60 * 1000
  const dateNow = new Date(parseInt(year, DECIMAL), parseInt(month, DECIMAL) - 1, parseInt(date, DECIMAL))
  const dayDifference = Math.round((dateNow.valueOf() - dateFirst.valueOf()) / oneDayTime)

  return Math.ceil((dayDifference + dateFirst.getDay()) / 7)
}

const getDays = (startDate, endDate) => {
  const DECIMAL = 10
  const periodDate = new Date(new Date(endDate) - new Date(startDate))
  const timeDifference = periodDate.getTime()
  const days = timeDifference / (24 * 60 * 60 * 1000)

  return parseInt(days, DECIMAL)
}

const getHours = (startDate, endDate) => {
  const milliseconds = Math.abs(new Date(endDate) - new Date(startDate))
  const hoursLeft = milliseconds % (24 * 3600 * 1000)
  const hours = Math.floor(hoursLeft / (3600 * 1000))

  return hours
}

const getMinutes = (startDate, endDate) => {
  const defaultDate = new Date(0)
  const periodDate = new Date(new Date(endDate) - new Date(startDate))

  return periodDate.getMinutes() - defaultDate.getMinutes()
}

const getSeconds = (startDate, endDate) => {
  const DECIMAL = 10
  const periodDate = new Date(new Date(endDate) - new Date(startDate))
  const timeDifference = periodDate.getTime()
  const days = getDays(startDate, endDate)
  const hours = getHours(startDate, endDate)
  const minutes = getMinutes(startDate, endDate)

  return parseInt(
    timeDifference / 1000 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60,
    DECIMAL
  )
}

export {
  addPrefix,
  deletePrefix,
  getCalendar,
  getMonthWeek,
  getWeek,
  getYearWeek,
  getDays,
  getHours,
  getMinutes,
  getSeconds
}
