function solution(n) {
    // 점프 => K칸 앞으로 점프 // 건전지 사용시 K만큼 용량 사용
    // 순간이동 => (이동거리) * 2의 위치만큼 앞으로 순간이동 // 건전지 사용x
    // N의 거리로 이동할 때, 사용해야하는 건전지 사용 최소값을 리턴
    let result = n.toString(2).split("").filter(el => el === "1").length
    return result
}