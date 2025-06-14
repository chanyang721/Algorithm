function solution(array, n) {
    // arr.push(n)
    // arr.sort()
    // idx = arr.indexOf(n)
    // abs(arr[idx-1]-n) abs(arr[idx+1]-n)
    array.push(n)
    array.sort((a,b) => a-b)
    const idx = array.indexOf(n)
    if (idx === 0) return array[1];
    if (idx === array.length - 1) return array[array.length - 2];

    const prevDiff = Math.abs(n - array[idx - 1]);
    const nextDiff = Math.abs(array[idx + 1] - n);

    return prevDiff <= nextDiff ? array[idx - 1] : array[idx + 1];
}