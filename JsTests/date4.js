var regTime = ['1:30am', '5:00am'];

let time_array = [];

regTime.forEach(t => {
  let ms = 0;
  let [h, m] = t.split(':');
  ms = (parseInt(h) * 60) + parseInt(m.substr(0, 2));
  t = (m.endsWith('pm') ? 'pm' : 'am');
  time_array.push([ms, t])
});

console.log(time_array)