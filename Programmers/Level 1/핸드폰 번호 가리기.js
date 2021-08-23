function solution(phone_number) {
    // 뒷 4자리를 제외한 나머지를 *로 변경한 문자열을 리턴하는 함수
    // slice(0, -4)로 나머지 뒷자리를 뺸다.
    // 앞에 숫자의 갯수를 구한다.
    // 앞에 *을 갯수만큼 붙인다. 
    // 리턴
    let L = phone_number.length;
    let result = "*".repeat(L - 4) + phone_number.slice(-4)
    return result;
}