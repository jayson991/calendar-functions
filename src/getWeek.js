const strategies = {
  slant: date => {
    const DECIMAL = 10
    const dateArr = date.split('/')
    const year = parseInt(dateArr[0], DECIMAL)
    const month = parseInt(dateArr[1], DECIMAL) - 1
    const day = parseInt(dateArr[2], DECIMAL)

    return dateArr.length !== 3 ? '' : new Date(year, month, day).getDay()
  },
  strike: date => {
    const DECIMAL = 10
    const dateArr = date.split('-')
    const year = parseInt(dateArr[0], DECIMAL)
    const month = parseInt(dateArr[1], DECIMAL) - 1
    const day = parseInt(dateArr[2], DECIMAL)

    return dateArr.length !== 3 ? '' : new Date(year, month, day).getDay()
  },
  timestamp: date => {
    const dateFormat = new Date(date)
    const year = dateFormat.getFullYear()
    const month = dateFormat.getMonth()
    const day = dateFormat.getDate()

    return new Date(year, month, day).getDay()
  }
}

const getWeek = date => {
  return typeof date === 'number' ? strategies.timestamp(date) : (date.includes('-') ? strategies.strike(date) : strategies.slant(date))
}

export default getWeek
