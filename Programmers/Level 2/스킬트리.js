function solution(skill, skill_trees) {
    // 선행 스킬 순서 skill, 유저가 만든 스킬트리 skill_trees 
    // 가능한 스킬 트리의 개수를 리턴
    // skill에 있는 문자면 el에 더한다.
    // 문자열을 전부 돌아서 나온 새로운 문자열이 skill에 포함되는지 확인하고 count++
    let count = 0; 

    for (let i = 0; i < skill_trees.length; i++) {
        let el = "";
        for (let j = 0; j < skill_trees[i].length; j++) {
            let base = skill_trees[i]
            if (skill.includes(base[j])) el += base[j];
        }
        console.log(el)
        if (el === "") count++;
        
        for (let i = 0; i < el.length; i++) {
            if (el[i] !== skill[i]) break;
            else if (i === el.length - 1) count++;
        }
    }

    return count;
}