function solution(people, limit) {
    // 최대 2명, 무게제한 limit키로 
    // 최소한의 구명보트로, 최대한의 사람을 구하고 싶다.
    // 몸무게 배열 people,
    // sort 오름차순
    // 가장 가벼운 사람 + 무거운 사람 <= limit인 사람이 있는지 구한다.
    // 만약 자기 앞사람까지 해서 없다면 base의 길이 ++;
    // 있다면 해당 가장 가벼운 사람과 무거운 사람을 제거하고 다음 가벼운 사람으로 넘어간다.
    // return 
    let boat = 0;
    people.sort((a, b) => a - b);
    
    let low = 0;
    let high = people.length - 1;
    
    while ( low <= high ) {
        if ( people[low] + people[high] <= limit ) low++;
        high--;
        boat++;
    }
    
    return boat;
}