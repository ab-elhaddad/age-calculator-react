/**
 * Calculate age from date of birth and return the age
 * @param {{year: number, month: number, day: number}} date
 * @returns {{year: number, month: number, day: number}}
 */
const calculateAge = (date) => {
  const now = new Date();
  // Month is 0 based
  const dob = new Date(date.year, date.month - 1, date.day);
  const age = now - dob;

  return {
    // Subtract 1970 from the year to get the actual age
    year: new Date(age).getFullYear() - 1970,
    month: new Date(age).getMonth(),
    day: new Date(age).getDate(),
  };
};

export default calculateAge;
