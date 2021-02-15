// A function to record actual hours slept.
const getSleepHours = day => {
    if (day === 'Monday') {
      return 8;
    } else if (day === 'Tuesday') {
      return 8;
    } else if (day === 'Wednesday') {
      return 8;
    } else if (day === 'Thursday') {
      return 14;
    } else if (day === 'Friday') {
      return 8;
    } else if (day === 'Saturday') {
      return 8;
    } else if (day === 'Sunday') {
      return 9;
    };
  }
  
  //Adds actual sleep hours together
  /* const getActualSleepHours = () => getSleepHours('Monday')
  + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday')
  + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday') */
  
  // concise body function that does the same as above
  const getActualSleepHours = () => 8 + 8 + 8 + 14 + 8 + 8 + 9;
  
  //multiplies ideal sleep hours by 7 to get the weeks total.
  /* const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7
  } */ 
  
  // concise body functioon that does the same as above
  const getIdealSleepHours = idealHours => idealHours * 7
  
  
  // Calculates how much sleep actually lost/gained through the week and returns an answer to the user.
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    let sleepDebt = idealSleepHours - actualSleepHours;
    let sleepSurplus = actualSleepHours - idealSleepHours;
    if (actualSleepHours < idealSleepHours) {
      return `You need ${sleepDebt} more hours of sleep.`
    } else if (actualSleepHours === idealSleepHours) {
      return 'You have slept enough this week.'
    } else if (actualSleepHours > idealSleepHours) {
      return `You have had ${sleepSurplus} more hours sleep than you needed.`
    }
  }
  
  // Prints the results to the console.
  console.log(calculateSleepDebt());