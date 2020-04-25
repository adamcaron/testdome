// Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.

// For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.

function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  const pieces = userDate.split('/')
  const year = pieces.pop()
  pieces.unshift(year)
  if (pieces[1].length === 1) {
    pieces[1] = pieces[1].padStart(2, '0')
  }
  if (pieces[2].length === 1) {
    pieces[2] = pieces[2].padStart(2, '0')
  }
  return pieces.join('')
}

console.log(formatDate("12/31/2014"));
