function solution(a, b) {
    // 2016 a월 b일은 무슨 요일인지 리턴
    // 요일 이름 => [ SUN, MON, TUE, WED, THU, FRI, SAT ];
    // 윤년 => 2월 29일까지
    // 30일인 월 4 6 9 11 
    // 31일인 월 1 3 5 7 8 10 12
    // 29일인 월 2
    // a의 인덱스까지의 값을 더한다.
    // b를 더한다. 
    // 7로 나눈다.
    // 마지막 값을 인덱스로하는 요소인 요일을 리턴
    let month = [ 0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    let days = b
    let week = [ "FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU" ];
    
    let countDays = month.slice(0, a).reduce((acc, cur) => acc + cur);
    let day = (countDays + days) % 7 - 1
    if (day === -1) day = 6;
        
    return week[day];
}