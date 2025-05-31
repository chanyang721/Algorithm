function solution(my_string) {
    // 1. split(" ")
    // 2. let space = " ", word = ''
    //      for i = 0 -> my_string.len
    //          if my_string[i] !== space
    //              word += my_string[i]
    //          eles if (my_string[i] === space)
    //              answer.push(word)
    //              word = ''
    //  
    
    // 1. var answer = my_string.split(" ");
    
    // 2. 
    var answer = [];
    let space = ' ', word = ''
    my_string += space
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] !== space) {
            word += my_string[i]
        } else if (my_string[i] === space) {
            answer.push(word)
            word = ''
        }
    }
    return answer;
}