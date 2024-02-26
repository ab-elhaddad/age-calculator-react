/**
 * Validate if the givend date is correct
 * @param {{year: number, month: number, day: number}} date
 * @returns {[string|null, string|null, string|null]}
 */
const validateDate = (date) => {
  const { year, month, day } = date;
  let error = [null, null, null];

  // Check if the date is empty
  if (!year || !month || !day)
    error = [
      !day ? "This field is required" : null,
      !month ? "This field is required" : null,
      !year ? "This field is required" : null,
    ];

  // Check if the date is in the future
  const now = new Date();
  const dob = new Date(year, month - 1, day);
  if (dob > now) error[2] = "Must be in the past";

  // Check if the numbers doesn't make sence
  if (year < 1900 || year > now.getFullYear())
    error[2] = "Must be a valid year";
  if (month < 1 || month > 12) error[1] = "Must be a valid month";
  if (day < 1 || day > 31) error[0] = "Must be a valid day";

  // Check if the date is valid
  // const dobString = `${year}-${month}-${day}`;
  // const dobDate = new Date(dobString);
  // if (dobDate.toString() === "Invalid Date")
  //   return ["Must be a valid date", null, null];

  if (daysInMonth(month - 1, year) < day) error[0] = "Must be a valid date";

  return error;
};

function daysInMonth(month, year) {
  // February has 28 days, 29 days in leap years
  if (month === 1) {
    // February
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  }
  // Months with 31 days: January (0), March (2), May (4), July (6), August (7), October (9), December (11)
  // Months with 30 days: April (3), June (5), September (8), November (10)
  return [0, 2, 4, 6, 7, 9, 11].includes(month) ? 31 : 30;
}

export default validateDate;
