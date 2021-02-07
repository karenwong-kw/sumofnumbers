const nums = [1, 2, 3, 4, 5];

function sumFor(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

function sumWhile(num) {
  let i = 0;
  let sum = 0;
  while (i < num.length) {
    sum += num[i];
    i++;
  }
  return sum;
}

function sumRecursion(num, size) {
  if (size === 0) {
    return num[size];
  }
  return num[size] + sumRecursion(num, size - 1);
}

function sumTheSimpleWay(num) {
  return _.reduce(num, function (memo, number) { return memo + number; }, 0);
}

console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums, 4));
console.log(sumTheSimpleWay(nums));
