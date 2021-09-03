function solution(A,B) {
    // 길이가 같고 요소가 자연수로 이루어진 두 배열 A, B
    // 각 배열에서 한개의 숫자를 빼서 곱하는 과정을 길이만큼 하고 더한다. 
    // 최종적으로 누적된 값이 최소가 되는 수를 리턴
    // A에서의 최소값과, B에서의 최대값을 순서대로 곱하여 더한 값을 리턴
    let a = A.sort((a, b) => a - b);
    let b = B.sort((a, b) => b - a);
    let result = 0;
    
    for (let i = 0; i < A.length; i++) {
        result += A[i] * B[i];
    } 
    
    return result;
}