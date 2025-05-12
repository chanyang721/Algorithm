function solution(bridge_length, weight, truck_weights) {
    // 일차선 정해진 순서대로 건넌다. => Q
    // 모든 트럭이 건너는데 걸리는 시간이 몇 초인지 리턴
    // 다리에 올라갈 수 있는 트럭의 개수 bridge_length
    // 다리가 견디는 무게 weight
    // 트럭 별 무게 truck_weights
    // 초를 측정 할 변수를 선언
    // 다리 길이 만큼의 길이를 가진 Q를 생성한다.
    // 다리에 있는 트럭의 무게 + 대기 트럭의 0번 요소가 weight이하이면 0번 요소를 다리에 올린다. 
    // 다음 초에 무게 트럭의 맨 앞 요소가 0이 아니라면 다리를 지난 트럭에 넣는다.
    //         다리의 트럭 무게의 총 합 + 대기 트럭의 0번 요소가 weight이하이면 0번 요소를 다리에 넣는다
    //         아니라면 0을 다리에 넣는다. 
    let truckNum = truck_weights.length;
    let sec = 0;
    const result = [];
    const Bridge = new Array(bridge_length).fill(0);
    const enBridge = (n) => Bridge.push(n);

    while(result.length !== truckNum) {
        sec++;
        let out = Bridge.shift();
        if (out !== 0) result.push(out);
        
        let truck_weight = truck_weights[0];
        let bridgeWeight = Bridge.reduce((acc, cur) => acc + cur);

        if (bridgeWeight + truck_weight <= weight) enBridge(truck_weights.shift());
        else enBridge(0);

    }
    
    return sec;
}