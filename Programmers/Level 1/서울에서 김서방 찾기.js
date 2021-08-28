function solution(seoul) {
    // str요소를 갖는 배열 seoul의 el === "Kim"의 인덱스를 찾아 `김서방은 ${idx}에 있다`를 리턴
    // Kim은 하나만 있으며 다른 값이 나타나지 않는다. 
    const KimIdx = seoul.findIndex(el => el === "Kim")
    return `김서방은 ${KimIdx}에 있다`;
}