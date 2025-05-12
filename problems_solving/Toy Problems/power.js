function power(base, exponent) {
    // todo: 여기에 코드를 작성합니다.
    if (exponent === 0) {
      return 1;
    }
    const half = parseInt(exponent / 2);
    const halfResult = power(base, half);
    const result = (halfResult * halfResult) % 94906249;
  
    if (exponent % 2 === 1) {
      return (base * result) % 94906249;
    }
    else {
      return result;
    }
  }