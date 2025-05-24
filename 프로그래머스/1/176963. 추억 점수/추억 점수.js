function solution(name, yearning, photo) {
    
    // sum 사진 속 그리움 점수 = 추억 점수
    // 인물의 그리움 점수 없으면 0점
    // map.set(name -> yearning)
    var answer = [];
    const map = new Map();
    for (let i = 0; i < name.length; i++) {
        map.set(name[i], yearning[i])
    }
    
    for (let i = 0; i < photo.length; i++) {
        const names = photo[i]
        let result = 0;
        for (let j = 0; j < names.length; j++) {
            if (map.get(names[j])) {
                result += map.get(names[j])
            }
        }
        
        answer.push(result)
    }

    return answer;
}