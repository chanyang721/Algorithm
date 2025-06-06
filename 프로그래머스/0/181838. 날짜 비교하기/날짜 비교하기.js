function solution(date1, date2) {
    // 날짜 비교 -> ms 변환
    const one = new Date(date1[0], date1[1], date1[2])
    const two = new Date(date2[0], date2[1], date2[2])
    
    return one < two ? 1 : 0;
}