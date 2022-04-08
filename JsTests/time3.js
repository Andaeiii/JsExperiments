

var hr12 = 12 * 60;  //720  0100 to 1200
let hr24 = 24 * 60;  //1440 




const analyzeTime = (arr) => {

  let t = null;
  let t_arr = []

  arr.forEach(t => {
    let ms = 0;
    let [h, m] = t.split(':');
    ms = (parseInt(h) * 60) + parseInt(m.substr(0, 2));
    t = (m.endsWith('pm') ? 'pm' : 'am');
    t_arr.push([ms, t])
  });

  return treatStr(t_arr);

}

const treatStr = tarr => {
  let diff = 0;
  let [t1, p1] = tarr[0];
  let [t2, p2] = tarr[1];

  //if ()

  if (p1 == 'pm' && p2 == 'am') {

  }


  return tarr;



}


function StringChallenge(str) {
  return analyzeTime(str.trim().split('-'));
}



console.log(StringChallenge("12:30pm-12:00am"));
// console.log(StringChallenge("1:23am-1:08am"));
// console.log(StringChallenge("1:05am-1a:30m"));
