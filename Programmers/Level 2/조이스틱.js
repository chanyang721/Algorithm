function solution(name) {
    // 알파벳 순환, 첫 위치는 A, A로만 이루어진 문자열로 대문자 이름을 완성
    // 이름을 완성하는 최소한의 조작 횟수를 리턴
    // name의 길이만큼 반복되는 A 문자열 베이스를 선언
    // 이동하는 경우 앞 뒤,
    // 변경하는 경우 위 아래,
    // 알파벳을 만들기 위한 방법 => 반으로 나눠서 가까운 쪽으로 누른다.
    // 변경할 알파벳이 있는 위치가 앞으로 이동했을때와 뒤로 이동했을때의 횟수 중 작은 값으로 이동한다.

    const alphaBase = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12, N: 13, O: 12, P: 11, Q: 10, R: 9, S: 8, T: 7, U: 6, V: 5, W: 4, X: 3, Y: 2, Z: 1 };
    const L = name.length;
    name = name.split("");
    const nameBase = new Array(L).fill("A");

    let count = 0;
    let letter = 0
    while(nameBase.join("") !== name.join("")) {
        // 해당 알파벳 설정
        if (nameBase[letter] !== name[letter]) {
            count += alphaBase[name[letter]]
            nameBase[letter] = name[letter];
        }
        
        // 다음 알파벳의 index 찾기, 같으면 오른쪽으로
        let nextLetters = name.slice(letter + 1);
        let front = nextLetters.findIndex(el => el !== "A") + 1;
        let back = nextLetters.reverse().findIndex(el => el !== "A") + letter + 1;
        let moves = front >= back ? back : front;
        
        let nextLetterIdx = letter + front;
        count += moves;
        letter = nextLetterIdx
    }
    
    return count;
}