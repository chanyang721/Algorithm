function solution(table, languages, preference) {
    // 언어 선호도
    // 직업군 언어 점수표
    // 표에 없는 언어는 0점 처리 
    // table
    // languages
    // preference
    // table을 기반으로 점수표를 만든다.
    // languages에 입력된 언어의 점수를 찾는다. 
    // perference를 점수표와 곱해서 얻은 합산들을 구한다. 
    // 제일 높은 점수의 직업군을 사전식 정렬 후 제일 앞에 하나만 리턴한다.
    // table.map(el => el = el.split(" ")); // 점수별로 나눈 값
    // 점수별로 나뉜 요소배열에서 languages로 받은 언어가 있는지 확인하고 있다면
    // perference 의 점수와 확인한 인덱스값을 곱한 값을 sum 변수에 넣고
    // 없다면 무시한다.
    // result 객체에 [ { job: 직업군 , socre: sum }, ] 형식으로 넣는다.
    const result = [];
    let baseTable = table.map(el => el = el.split(" ").reverse());
    let scoreTable = {}
    for (let i = 0; i < languages.length; i++) {
        scoreTable[languages[i]] = preference[i];
    }
    
    // baseTable의 요소를 하나씩 집고, 
    // 집은 요소배열의 요소를 하나씩 집는다. 
    // 만약 집은 언어가 languages에 있다면, sum += scoreTable[집은언어] * (i + 1);
    // result.push({ job: el[5], score: sum })
    for (let job = 0; job < baseTable.length; job++) {
        let sum = 0;
        for (let language = 0; language < baseTable[job].length - 1; language++) {
            if (languages.includes(baseTable[job][language])) {
                let pickedLanguage = baseTable[job][language];
                let score = language + 1;
                sum += scoreTable[pickedLanguage] * (score)
            }
        }
        result.push({ job: baseTable[job][5], score: sum })
    }
    
    let answer = result.sort((a, b) => {
        if (a.score > b.score) return -1;
        if (a.score === b.score) {
            if (a.job < b.job) return -1;    
        }
    })

    return answer[0].job;
}