function solution(str_list, ex) {
    // sum str_list & excludues(ex)
    // return str ?
    // str_list.map(el => el.includes(ex) ? "" : el).join("")
    var answer = str_list.map(el => el.includes(ex) ? "" : el).join("")
    return answer;
}