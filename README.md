# calendar-functions

> A Project To Create Javascript Utils For Calendar Operations

# Usage

## Installation

```bash
$ npm i -S calendar-functions
```

## Use In CommonJS(Like Node.js)

```javascript
const calendarFuncs = require('calendar-functions')

console.log(JSON.stringify(calendarFuncs.getCalendar('2020-02-01', '2020-02-03')))

console.log(calendarFuncs.getWeek('2020-02-01'))
console.log(calendarFuncs.getWeek('2020/02/01'))
console.log(calendarFuncs.getWeek(1580515200000))
```

### getCalendar Output

```json
[
  { "year": 2020, "month": 1, "day": 1, "week": 6 },
  { "year": 2020, "month": 1, "day": 2, "week": 0 },
  { "year": 2020, "month": 1, "day": 3, "week": 1 }
]
```

### getWeek Output

```javascript
6 // console.log(getWeek('2020-02-01'))
6 // console.log(getWeek('2020/02/01'))
6 // console.log(getWeek(1580515200000))
```

## Use In ES6 Module(Like Vue | React | Angular Projects)

```javascript
import { getCalendar, getWeek } from 'calendar-functions'

console.log(JSON.stringify(getCalendar('2020-02-01', '2020-02-03')))

console.log(getWeek('2020-02-01'))
console.log(getWeek('2020/02/01'))
console.log(getWeek(1580515200000))
```

### getCalendar Output

```json
[
  { "year": 2020, "month": 1, "day": 1, "week": 6 },
  { "year": 2020, "month": 1, "day": 2, "week": 0 },
  { "year": 2020, "month": 1, "day": 3, "week": 1 }
]
```

### getWeek Output

```javascript
6 // console.log(getWeek('2020-02-01'))
6 // console.log(getWeek('2020/02/01'))
6 // console.log(getWeek(1580515200000))
```

# Explanation

| field |                 formation                  |
| :---: | :----------------------------------------: |
| month | 0 -> January, 1 -> February, 2 -> March... |
| week  | 0 -> Sunday, 1 -> Monday, 2 -> Tuesday...  |

# All Functions

> Please see more examples in [test](https://github.com/jayson991/calendar-functions/tree/master/test) folder, for it is not just like the below provided.

> Including getCalendar & getWeek. getDays is for the day difference of two dates, getHours is for the hour difference of two dates, getMinutes is for the minute difference of two dates, getSeconds is for the second difference of two dates, these four functions can be combined together to get the difference of two dates. 

|     Name     |                         Output Result                          |
| :----------: | :------------------------------------------------------------: |
|  addPrefix   |                      addPrefix(1) -> '01'                      |
| deletePrefix |                    deletePrefix('01') -> 1                     |
| getMonthWeek |                 getMonthWeek(2020, 2, 7) -> 2                  |
| getYearWeek  |                 getYearWeek(2020, 2, 10) -> 7                  |
|   getDays    |            getDays('2020-02-01', '2020-02-03') -> 2            |
|   getHours   |     getHours('2020-02-01T10:45', '2020-02-03T12:15') -> 1      |
|  getMinutes  |    getMinutes('2020-02-01T10:45', '2020-02-03T12:15') -> 30    |
|  getSeconds  | getSeconds('2020-02-01T10:45:20', '2020-02-03T12:15:50') -> 30 |
