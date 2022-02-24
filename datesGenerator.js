function getDates (startDate, endDate) {
  const dates = []
  let currentDate = startDate
  const addDays = function (days) {
    const date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
  }
  while (currentDate <= endDate) {
    dates.push(currentDate)
    currentDate = addDays.call(currentDate, 1)
  }
  return dates
}

// Usage
const dates = getDates(new Date(2022, 04, 04), new Date(2022, 07, 04))
dates.forEach(function (date) {
  // console.log(date.toString().split('')[0][0])
    if (date.toString().split('')[0][0] === 'T') {
      console.log(date.toString().split(' ')[0] +" "+date.toString().split(' ')[1]+"  "+date.toString().split(' ')[2]+" "+date.toString().split(' ')[3])
    }
      
  
})