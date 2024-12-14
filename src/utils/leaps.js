import dayjs from 'dayjs'

const leapWeeks = [
  {
    number: 1,
    start: 4.5,
    end: 5.5,
  },
  {
    number: 2,
    start: 7.5,
    end: 9.5,
  },
  {
    number: 3,
    start: 11.5,
    end: 12.5,
  },
  {
    number: 4,
    start: 14.5,
    end: 19.5,
  },
  {
    number: 5,
    start: 22.5,
    end: 26.5,
  },
  {
    start: 28.5,
    end: 30.5,
    special: true,
  },
  {
    number: 6,
    start: 33.5,
    end: 37.5,
  },
  {
    number: 7,
    start: 41.5,
    end: 46.5,
  },
  {
    number: 8,
    start: 50.5,
    end: 54.5,
  },
  {
    number: 9,
    start: 59.5,
    end: 64.5,
  },
  {
    number: 10,
    start: 70.5,
    end: 75.5,
  },
]

const calculateLeaps = (birthdate) => {
  return leapWeeks.map((week) => {
    const start = dayjs(birthdate).add(week.start, 'week').subtract(1, 'day')
    const end = dayjs(birthdate).add(week.end, 'week')
    return {
      start,
      end,
      special: week.special,
      daysLeft: dayjs(start).diff(dayjs(), 'days'),
      info: week.info,
      number: week.number,
    }
  })
}

export default calculateLeaps
