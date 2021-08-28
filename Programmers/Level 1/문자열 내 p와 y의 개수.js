function solution(s){
    // 대소문자 s에서 "p"의 개수와 "y"의 개수를 비교해 같으면 true 다르면 false 리턴
    // 모두 하나도 없는 경우는 항상 true;
    // 비교시 대소문자 비교 x
    // 소문자로 변경 
    // split("")
    // filter.length => p
    // filter.length => y
    // 둘 다 0인 경우 true;
    let strS = s.toLowerCase().split("");
    let countP = strS.filter(el => el === "p").length;
    let countY = strS.filter(el => el === "y").length;
    if (countP === 0 && countY === 0) {
        return true;
    }
    
    return countP === countY ? true : false;
}