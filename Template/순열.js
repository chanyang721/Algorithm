const permutation = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let currentArray = arr.slice();
        let element = currentArray.splice(i, 1);
        permutation(currentArray.slice(), m.concat(element));
      }
    }
  };