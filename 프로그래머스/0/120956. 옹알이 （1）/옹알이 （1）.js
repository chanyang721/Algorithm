function solution(babbling) {
    const canSay = ["aya", "ye", "woo", "ma"];
    let answer = 0;

    for (let word of babbling) {
        let valid = true;

        // 각 발음이 최대 한 번 등장하는지 확인
        for (let sound of canSay) {
            const count = word.split(sound).length - 1;
            if (count > 1) {
                valid = false;
                break;
            }
        }

        if (!valid) continue; // 중복 발음 발견 시 넘어감

        // 발음들을 모두 제거
        for (let sound of canSay) {
            word = word.replace(sound, " ");
        }

        // 발음 외의 문자가 남아있으면 불가
        if (word.trim() === "") {
            answer++;
        }
    }

    return answer;
}