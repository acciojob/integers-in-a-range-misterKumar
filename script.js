// write your code here
function range(start, end) {
  if (start > end) {
    return [];
  } else if (start === end) {
    return [start];
  }

  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

let start = parseInt(prompt("Enter Start of the Range."));
let end = parseInt(prompt("Enter End Of the Range."));
alert(range(start, end));
