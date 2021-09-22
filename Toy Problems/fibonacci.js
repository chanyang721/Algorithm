function fibonacci(n, memo = [0, 1]) {
    // TODO: 여기에 코드를 작성합니다.
    // 피보나치 수열의 n번째 항의 수를 리턴
    // 재귀함수로 구현 
    // for while 금지
    //// 복잡도 => n //// 
    //// 수도 코드 ////
    /// bare ////
    // n이 1보다 작거나 같은 경우 n을 리턴
    /// recursive ////
    // n이 1보다 큰경우, n-2 + n-1 재귀함수 리턴값을 리턴
    // 초과 => 계산을 줄여야 한다. => 계산한 결과를 담을 배열을 선언하고 넣는다. 
    // 재귀함수 => 한번 계산한 결과를 담는용도 ? => 메모라이즈
    if (memo[n] !== undefined) return memo[n];
    if (n <= 1) return memo[n];
    // n이 1보다 큰경우 => 이전의 두개의 값을 더한 것을 변수에 할당하고 memo에 넣는다.
    let result = fibonacci(n - 2, memo) + fibonacci(n - 1, memo);
    memo[n] = result ;
    return memo[n];
  }
  //// 레퍼런스와의 차이점 //// 
  //재귀함수를 보조함수로 만들어서 메모라이즈 배열을 완성하였다.
  //큰 함수 자체는 1번 돌아가지만, 보조함수에서 피보나치배열을 완성시킨다.
  //큰함수 안에서 보조재귀함수를 사용하여 배열을 만들기 때문에 더 다양한 작업이 가능해질것같다.
  //내가 작성한 코드는 피보나치 수열 하나만 만들 수 있지만, 레퍼런스의 코드는 피보나치 수열을 함수 내부에서 얻어서 다른 작업할 때 재사용이 가능해진다. 
  //저러한 형태의 문제풀이를 연습해야겠다.