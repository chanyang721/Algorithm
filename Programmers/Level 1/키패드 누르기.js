function solution(numbers, hand) {
    // 왼손 => "*", 오른손 => "#" 시작
    // 상하좌우로만 1칸씩 이동 가능
    // 왼손 L => 1, 4, 7
    // 오른손 R => 3, 6, 9
    // 중앙 L or R=> 2, 5, 8, 0은 두 손가락 중 가까운 손가락을 사용
    //     => 거리가 같다면 오른손잡이는 오른손, 왼손잡이는 왼손으로 사용
    // 순서대로 누를 번호가 담긴 배열 numbers
    // 손잡이를 나타낸 문자열 hand
    // 각 번호를 누른손가락이 왼쪽, 오른쪽인지를 나타내는 연속된 문자열을 리턴
    // 중앙이 아닌 수가 나오면 각 손을 문자열에 넣고, 손가락의 위치를 변경
    // 중앙에 있는 수가 나오면 각 손의 위치와 누를 수 사이의 거리를 계산하여 가까운 손으로 누르고 위치를 변경
    // 거리가 같다면 hand를 문자열에 넣고 해당 손의 위치를 변경
    // 거리 계산하는 함수 만들기
    // 4 -> 5: row가 같다면 거리는 Math.abs(출발El의 col - 목표El의 col)
    // 3 -> 5: row가 다르다면 거리는 Math.abs(출발El의 col - 목표El의 col) + Math.abs(출발El의 row - 목표El의 row)
    
    const calculateDistance = (target, left, right, hand) => {
    // target이 2, 5, 8, 0이면, 현재 손들의 위치를 넣고 각 위치를 계산하여 가까운 손을 리턴
        let database = { 
            1: { row: 0, col: 0}, 
            2: { row: 0, col: 1}, 
            3: { row: 0, col: 2}, 
            4: { row: 1, col: 0}, 
            5: { row: 1, col: 1}, 
            6: { row: 1, col: 2}, 
            7: { row: 2, col: 0}, 
            8: { row: 2, col: 1}, 
            9: { row: 2, col: 2}, 
            0: { row: 3, col: 1}, 
            "*": { row: 3, col: 0}, 
            "#": { row: 3, col: 2} 
        }
        // 눌러야 할 숫자 target을 arr에서 찾는다.
        // 현재 손들의 위치를 받는다.
        // 각 거리를 구한다.
        // 만약 거리가 같다면 hand를 리턴
        // return 가까운 손
        let { row: targetRow, col: targetCol } = database[target];
        let { row: leftRow, col: leftCol } = database[left];
        let { row: rightRow, col: rightCol } = database[right];
        
        let leftDistance = Math.abs(targetCol - leftCol) + Math.abs(targetRow - leftRow);
        let rightDistance = Math.abs(targetCol - rightCol) + Math.abs(targetRow - rightRow);
        
        if (leftDistance === rightDistance) closeHand = hand;
        else closeHand = leftDistance < rightDistance ? "left" : "right";
        
        return closeHand;
    }
    
    const moveHands = (target, result) => {
        // 이동 목표와 이동할 손을 넣는다.
        // target이 1, 3, 7 이면 왼손의 위치 이동 및 결과에 += "L";
        // target이 3, 6, 9 이면 오른손 위치 이동 및 결과에 += "R";
        // return result
        if (target === "1" || target === "4" || target === "7") { 
            result += "L";
            leftHand = target;
        }
        else {
            result += "R"
            rightHand = target;
        }
        return result;
    }
    
    // 각 손의 현재 위치를 저장할 변수 leftHand = "*", rightHand = "#" 선언
    // 결과를 저장할 변수 result = "" 선언
    // for => 0부터 numbers.length까지 ++ 
    //   if => target이 중앙값이 아니라면,
    //      result = moveHands(target, 해당손, result);
    //   else => target이 중앙값이라면,
    //      let closeHand = calculateDistance(numbers[i], leftHand, rightHand)
    //      result = moveHands(target, closeHand, result);
    //   return result;
    let leftHand = "*";
    let rightHand = "#";
    let closeHand;
    let result = "";
    numbers = numbers.map(el => el = String(el));

    for (let i = 0; i < numbers.length; i++) {
        let target = numbers[i];
        if (target === "2" || target === "5" || target === "8" || target === "0") { // 중앙값이면,
            let closeHand = calculateDistance(target, leftHand, rightHand, hand);
            if (closeHand === "left") {
                result += "L";
                leftHand = target;
            }
            else {
                result += "R";
                rightHand = target;
            }
        }
        else {
            result = moveHands(target, result);
        }
    }
    
    return result;
}