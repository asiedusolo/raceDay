let raceNumber = Math.floor(Math.random() * 1000);
const runnerRegisteredEarly = true;
const runnerAge = 18;

if (runnerAge > 18 && runnerRegisteredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && runnerRegisteredEarly) {
  console.log(`Runner with race number ${raceNumber} will race at 9:30 am`);
} else if (runnerAge > 18 && !runnerRegisteredEarly) {
  console.log(`Runner with race number ${raceNumber} will race at 11:00 am`);
} else if (runnerAge < 18) {
  console.log(`Runner with race number ${raceNumber} will race at 12:30 pm`);
} else {
  console.log("Go and see the registration desk");
}
