function solution(land) {
    // land는 총 N행(row) 4열(col)로 이루어짐
    // 1행부터 한 행씩 내려올 때, 각 행의 4칸 중 한칸만 밟으면서 내려온다. 
    // 하지만, 다음 행으로 내려갈 때 같은 열을 밟을 수 없다.
    // 얻을 수 있는 점수의 최대값을 리턴
    // 메모라이즈를 이용하여 얻을 수 있는 최대값을 기록한다.
    // 마지막까지 내려간다.
    // 마지막 행, 열에서 가장 큰 수를 리턴
    const L = land.length;

    for (let j = 1; j < land.length; j++) {
        land[j][0] = Math.max(land[j - 1][1], land[j - 1][2], land[j - 1][3]) + land[j][0];
        land[j][1] = Math.max(land[j - 1][0], land[j - 1][2], land[j - 1][3]) + land[j][1];
        land[j][2] = Math.max(land[j - 1][0], land[j - 1][1], land[j - 1][3]) + land[j][2];
        land[j][3] = Math.max(land[j - 1][0], land[j - 1][1], land[j - 1][2]) + land[j][3];
    }
    
    const result = Math.max(...land[L - 1]);
    
    return result;
}