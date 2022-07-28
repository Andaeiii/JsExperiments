let hr12 = 12 * 60;  //return total minutes for 12hrs. 
let hr24 = 24 * 60;  //round the clock. 24hrs

let rdate = null;


function analyzeTime(arr) {
  let tarr = [];
  let t_apm = [];
  let mins = 0;

  arr.forEach(time => {
    let [h, m] = time.split(':');

    if (time.endsWith('pm')) {
      m_value = (parseInt(h) * 60) + hr12 + parseInt(m.substr(0, 2));
      t_apm.push('pm')
    } else {

      mins = (parseInt(h) * 60) + parseInt(m.substr(0, 2));
      m_value = mins;
      t_apm.push('am')
    }
    //tarr.push(isPm ? mins  )
    tarr.push(m_value);
  });
  return [tarr, t_apm];
}


const computeMins = (arr) => {
  let diff = 0;
  let [m1, m2] = arr[0];
  let [t1, t2] = arr[1];

  if (t1 == 'am' && t2 == 'pm' && t2 > t1) {
    diff = t2 - t1;
  }

  return [m1, m2, t1, t2];
}


function StringChallenge(str) {
  let tarr = str.trim().split('-');
  return computeMins(analyzeTime(tarr)); //[720, 640]

}


function testCase() {


  console.log(StringChallenge("12:30pm-12:00am"));
  console.log(StringChallenge("1:23am-1:08am"));
  console.log(StringChallenge("1:05am-1:30am"));
}


testCase();