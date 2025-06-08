function solution(array, height) {
    // for array i = 0 -> len
    //      if array[i] < height ? answer = i
    var answer = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > height) {
            answer++ 
        }
    }
    return answer;
}