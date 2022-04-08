var today;


function getToday() {
  rdate = new Date('August 19, 1975 10:15:30');
  console.log(rdate)
}

const analyzeTime = (tarr) => {
  let [h, m] = tarr;
  let d = new Date
  d.setHours(h);
  d.setMinutes(parseInt(m.substr(0, 2)));
  return d;
}


function StringChallenge(str) {
  let tarr = str.trim().split('-');
  return analyzeTime(tarr); //[720, 640]

}


function testCase() {
  getToday();
  console.log(StringChallenge("12:30pm-12:00am"));
  console.log(StringChallenge("1:23am-1:08am"));
  console.log(StringChallenge("1:05am-1:30am"));
}


testCase();
