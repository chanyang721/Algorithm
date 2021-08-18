const swap = function (idx1, idx2, arr) {
    // 두 변수를 바꾸는 방법 //
    // 1) 임시 변수를 활용한 방법 // 
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  
    // 2) Destructuring assignment를 활용한 방법 // 
    // arr이 reference type이라 가능
    // [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  
    // 3) XOR 연산을 활용한 방법 // 
    // arr이 reference type이라 가능
    // arr[idx1] ^= arr[idx2];
    // arr[idx2] ^= arr[idx1];
    // arr[idx1] ^= arr[idx2];
  };
  
  let bubbleSort = function (arr) {
    let N = arr.length;
  
    for (let i = 0; i < N; i++) {
      let swaps = 0;
      for (let j = 0; j < N - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          swaps++;
          swap(j, j + 1, arr);
        }
      }
      if (swaps === 0) {
        break;
      }
    }
  
    return arr;
  };