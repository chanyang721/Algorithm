function solution(rsp) {
    // 가위 2
    // 바위 0
    // 보 5
    // rsp.el 을 모두 이기는 경우를 순서대로 나열
    // map -> 2: 0, 0: 5, 5: 2
    const map = {"2": 0, "0": 5, "5": 2}
    var answer = rsp.split("").map(el => map[el]).join("");
    return answer;
}