function hmsToSeconds(str: string) {
  const p = str.split(':')
  let s = 0
  let m = 1

  while (p.length > 0) {
    s += m * Number(p.pop())
    m *= 60
  }

  return s
}

function secondsToTime(sec: number) {
  var h = Math.floor(sec / 3600)
    .toString()
    .padStart(2, '0'),
    m = Math.floor((sec % 3600) / 60)
      .toString()
      .padStart(2, '0'),
    s = Math.floor(sec % 60)
      .toString()
      .padStart(2, '0')

  return h + ':' + m + ':' + s
}
function currentDate() {
  var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}
const Dates = {
  hmsToSeconds,
  secondsToTime,
  currentDate
}

export default Dates
