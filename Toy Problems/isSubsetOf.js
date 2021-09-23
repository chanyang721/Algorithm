const isSubsetOf = function (base, sample) {
    // TODO: 여기에 코드를 작성합니다.
    // 샘플 배열을 복사하여 새로운 변수에 할당한 뒤 베이스원소들과 합친다. 
    // sort로 숫자 정렬
    // reduce 앞 뒤가 같은 숫자인 요소만 담은 새로운 배열에 담고 join('')으로 합친다. 
    // 샘플.join('')과 같다면 true, 다르면 false;
    let newArr = [...base, ...sample]
    let index = 0;
    let strSample = sample.sort((a, b) => a - b).join('');
  
    let srtingNewArr = newArr
    .sort((a, b) => a - b)
    .reduce((acc, cur) => {
      index++
      if (cur === newArr[index]) {
        acc.push(cur)
      }
      return acc;
    }, [])
    .join('')
  
    return srtingNewArr === strSample
  };