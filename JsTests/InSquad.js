/**
 * 


 An array nums is given. Per one operation you remove one number with a value of k or under k from the array. After each removal k is increased by one.

 Determine the number of the array elements which you can remove.
 
 
 
 //// INPUT -----------------------
 
 1. nums = integer array, 0 < length(nums) <= 10
 2. k = initial value of the number which you can remove from the array.
 
 
 
 //// OUTPUT ----------------------
 
 Integer - number of elements which can be removed.
 
 
 
 //// EXAMPLE ----------------------
 
 k = 1
 getResult(nums, k) = 4
 
 k = 1, nums = [*1*, 2, 3, 4] -> 
 k = 2, nums = [*2*, 3, 4] -> 
 k = 3, nums = [*3*, 4] -> 
 k = 4, nums = [*4*] ->
 k = 5, nums = []```
 
 
 
 * 
 */


//possible solutions to the get result function... 

function drawRating(vote) {
  let stars = 1;
  stars = (vote <= 0) ? 1 : Math.ceil(vote / 20);
  let rating = '';
  for (let j = 1; j <= 5; j++) {
    rating += (j <= stars) ? '-' : '+';
  }
  console.log(rating);
}


//and to the second.... 




function getResult(nums, k) {

  let nums_copy = [...nums];
  let ct = 0;
  let nar = null;

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] <= k) {
      nums_copy.splice(nums_copy.indexOf(nums[i]), 1);
      nar = nums_copy;
      ct++;
      k += 1;
    } else {
      nar = nums_copy.filter(v => v !== k);
      nums_copy = nar;
    }

    //if (nar) {
    //}


    if (k > nums[nums.length - 1]) {
      break;
    }
  }

  return ct;
}




////////////////////////////////////////////////////////////




function getResult(nums, k) {

  let nums_copy = [...nums];
  let ct = 0;
  let nar = null;

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] <= k) {
      nums_copy.splice(nums_copy.indexOf(nums[i]), 1);
      nar = nums_copy;
      ct++;
      k += 1;
    } else {
      nar = nums_copy.filter(v => v !== k);
      nums_copy = nar;
      if (nar.length > nums_copy.length) {
        ct++;
      }
    }

    //if (nar) {
    //}


    if (k > nums[nums.length - 1]) {
      break;
    }
  }

  return ct;
}



////////////////////////////////////////////




function getResult(nums, k) {
  let ct = 0;
  nums.forEach((v, i) => {
    nums.splice(v, 1);



    if (nums.length > 0) {
      ct += 1;
    }

    k++;
    console.log(k, ct);

    console.log('nums', nums);
  });

  return ct;
}


let nums = [1, 2, 3, 4,];
let k = 1;

console.log(getResult(nums, k));