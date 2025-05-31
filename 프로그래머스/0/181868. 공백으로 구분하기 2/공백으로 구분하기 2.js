function solution(my_string) {
    // space = " " 1개 이상, 단어만 순서대로 담기
    // 1. split(" ").filter(el => el !== " ")
    // 2. for i = 0 -> my_string.len, word = '', space = ' '
    //      if [i] === space ? continue : word += [i]
    //      else if [i] !== space ? answer.push([i]) word = ''
    // 3. trim()

    let space = ' '
    var answer = my_string.split(space).filter(el => el !== '')
    return answer;
}