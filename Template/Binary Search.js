function findMinCount(mid) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      count = count + parseInt(mid / arr[i]);
    }
    if (count >= n) {
      return true;
    }
    return false;
  }

let max = Math.max(...menus) * n;
let mid;
let min = 1;

while(min <= max) {
    mid = parseInt((max + min) / 2)
    if (findMinCount(mid)) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }