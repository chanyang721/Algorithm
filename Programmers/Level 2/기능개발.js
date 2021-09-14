// 시간복잡도 O(N^2) // 테스트 최대 0.17ms // 
function solution(progresses, speeds) {
    // 기능의 진도가 100%인 경우 반영 가능 
    // 개발 속도는 모두 다르지만, 앞에 있는 기능이 100%가 되는 순간 배포가 가능하다. 
    // 각 배포마나 몇개의 기능이 배포되는지를 담은 배열을 리턴
    // [93, 30, 55] // [1, 30, 5]
    // 배열 progresses의 요소가 100이 되는 순간에 100 이상의 수를 필터된 수만큼 push
    // progresses - 100한 뒤 speeds의 i번째 요소 100을 초과할때까지 더한다.
    let result = [];
    progresses = progresses.map(el => el = el - 100);
    
    while (progresses.length > 0) {
        let head = progresses[0];
        let speed = speeds[0];
        let count = Math.ceil(Math.abs(head) / speed);
        
        progresses = progresses.map((el, idx)=> el = el + speeds[idx] * count);
        let nextHeadIdx = progresses.findIndex(el => el < 0);
        
        if (nextHeadIdx === -1) {
            result.push(progresses.length);
            progresses = [];
        }
        else {
            result.push(nextHeadIdx)
            progresses = progresses.slice(nextHeadIdx);
            speeds = speeds.slice(nextHeadIdx);
        }
    }

    return result;
}