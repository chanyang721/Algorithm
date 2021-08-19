function solution(N, stages) {
    // 실패율을 구하는 코드를 완성한다. 
    // 실패율 = 해당 스테이지를 클리어하지 못한 수 / 스테이지에 도달한 수 
    // 전체 스테이지의 수 N, N은 1이상 500이하 자연수
    // 이용자가 진행중인 스테이지 번호가 담딘 배열 stages, 1이상 200,000이하 자연수
    // 실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담긴 배열을 return 
    // 같은 실패율인 경우 스테이지 번호가 작은 순서가 먼저온다. 
    // 스테이지에 도달한 유저가 없는 스테이지의 실패율은 0이다. 
    // N	stages	                    result
    // 5	[2, 1, 2, 6, 2, 4, 3, 3]    [3,4,2,1,5]
    // 1번 스테이지 실패율 => stages배열에서 요소가 1보다 작거나 같은 수를 A 찾는다
    //                 => stages 배열의 요소중 1보다 크거나 같은 수를 B 찾는다.
    // => 실패율 = A / B이며, 실패율이 높은 스테이지를 내림차순 정렬해야하기 떄문에 스테이지 정보도 필           요하다
    // [[1, 1번실패율], [2, 2번실패율], ... ]
    // idx 정보를 요소 내부에 가지고 있어야 한다. 실패율을 기준으로 sort한 후 map으로 [0]번 요소만          가져온 값을 리턴한다. 
    // 결과를 저장할 배열 result = []; 선언
    // let high, low
    // N + 1 ? 스테이지 순서대로 stages에 도달한 유저를 찾기 때문에 N + 1까지 반복문을 돌린다.
    // for i => 1부터 i <= N + 1까지 1씩 증가
    //     stages 배열에서 i보다 작거나 같은 값들의 수와 크거나 같은 값의 수를 구한다. 
    //     high = stages배열에서 요소가 1보다 작거나 같은 수를 A
    //     low = stages 배열의 요소중 1보다 크거나 같은 수를 B
    //     filelate = A / B;
    //     result.push([i, filelate])
    let result = [];
    let high, low;
    for (let stage = 1; stage < N + 1; stage++) {
        high = stages.filter(el => el === stage).length;
        low = stages.filter(el => el >= stage).length;
        let failLate = high / low;
        
        if(isNaN(failLate)) failLate = 0;
        
        result.push({ stage, failLate });
    }
    
    result = result
        .sort((a, b) => {
        if (a.failLate === b.failLate) return -1;
        if (a.failLate < b.failLate) return -1;
        })
        .map(el => el.stage)
        .reverse()
    
    return result;
}