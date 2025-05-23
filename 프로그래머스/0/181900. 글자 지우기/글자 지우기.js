function solution(my_string, indices) {
    // for indices i = 0 -> len: my_string.split("").splice(i, 1, "")
    const strs = my_string.split("")
    for (let i = 0; i < indices.length; i++) {
        strs.splice(indices[i], 1, "")
    }
    var answer = strs.join("");
    return answer;
}