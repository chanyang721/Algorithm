function solution(id_list, report, k) {
    // 서로 다른 유저에게 k번 이상 신고 당한 유저에게 이메일 전송 기능
    // 각 유저가 결과 메일을 받는 횟수를 담은 배열을 리턴
    const answer = new Array(id_list.length).fill(0);
    
    const reportMatrix = [];
    for (let i = 0; i < id_list.length; i++) {
         reportMatrix.push(new Array(id_list.length).fill(false))
    };
    
    const finder = {};
    for (let i = 0; i < id_list.length; i++) {
        finder[id_list[i]] = { 
            idx: i, 
            report: [],
            reported: 0
        };
    }
    
    for (let i = 0; i < report.length; i++) {
        let [ reporter, reported ] = report[i].split(" ");
        let row = finder[reporter].idx;
        let col = finder[reported].idx;
        
        if (reportMatrix[row][col] === false) {
            finder[reporter]["report"].push(reported);
            finder[reported]["reported"]++;
            
            reportMatrix[row][col] = true;
        }
    }

    const block_list = [];
    for (let id in finder) {
        if (finder[id]["reported"] >= k) block_list.push(id);
    }
    
    for (const id in finder) {
        let { idx, report } = finder[id]
        for (let i = 0; i < report.length; i++) {
            for (let j = 0; j < block_list.length; j++) {
                if (block_list[j] === report[i]) {
                    answer[idx]++;
                }
            }
        }
    }
    
    return answer;
}