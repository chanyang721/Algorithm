function solution(x, n) {
    // 정수 x and 자연수 n을 입력
    // x씩 증가하는 숫자를 n개 지니는 리스트릴 리턴
    // n개의 요소가 필요하고, idx * x를 요소로 한다. 
    let baseArr = new Array(n).fill(x);
    let result = baseArr.map((el, idx) => el + (el * idx));
    return result;
}