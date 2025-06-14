function solution(n) {
    // [...n의 약수].sort()
    // set = new Set
    // for i 0 -> sqrt n
    //      if (n%i === 0) set.add(i), set.add(n / i)
    const set = new Set();
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            set.add(i)
            set.add(n / i)
        }
    }
    var answer = [...set].sort((a, b) => a-b);
    return answer;
}