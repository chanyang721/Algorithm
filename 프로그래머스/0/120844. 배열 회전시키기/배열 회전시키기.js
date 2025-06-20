function solution(numbers, direction) {
    // r => pop -> unshift
    // l => shift -> push
    if (direction === 'right') {
        const last = numbers.pop()
        numbers.unshift(last)
    } else if (direction === 'left') {
        const first = numbers.shift()
        numbers.push(first)
    }
    return numbers;
}