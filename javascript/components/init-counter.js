function runCounter() {
  const bDay = 12;
  const bMonth = 6 // JS starts counting month at 0;
  const component = document.querySelector('#counter > app-block');
  
  function isBirthdayToday() {
    const today = `${new Date().getDate()}/${new Date().getMonth()}`
    return today === `${bDay}/${bMonth}`;
  }

  function isBirthdayAhead() {
    // Is this year's birthday ahead ?
    const currentYear = new Date().getFullYear();
    const time = new Date(currentYear, bMonth, bDay) - new Date();
    return (time > 0);
  }

  function oneYearPeriod(lastY, nextY) {
    return new Date(nextY, bMonth, bDay) - new Date(lastY, bMonth, bDay);
  }

  function getTimeSinceLastBirthday(lastY, nextY) {
    const timeSinceLastBirthday = Date.now() - new Date(lastY, bMonth, bDay);
    const percentage = (timeSinceLastBirthday / oneYearPeriod(lastY, nextY)) * 100;
    return `${percentage}`.substring(0, 10);
  }

  if (isBirthdayToday()) {
    component.setAttribute('text', `Happy Birthday Charly 🎉`);
    return
  }

  if (isBirthdayAhead()) {
    const lastBirthday = new Date().getFullYear() - 1;
    const nextBirthday = new Date().getFullYear();
    component.setAttribute('text', getTimeSinceLastBirthday(lastBirthday, nextBirthday));
    return;
  }

  const lastBirthday = new Date().getFullYear();
  const nextBirthday = new Date().getFullYear() + 1;
  component.setAttribute('text', getTimeSinceLastBirthday(lastBirthday, nextBirthday));
}

export { runCounter };


