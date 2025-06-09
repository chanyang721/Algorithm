function solution(arr) {
    // if row < col ? row === col -> row.push(0)
    // else if row > col ? row === col -> col.push(0)
    const row = arr[0].length;
    const col = arr.length;
    if (row < col) {
        const diff = col - row;
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].concat(Array(diff).fill(0))
        }
    } else if (row > col) {
        const diff = row - col;
        for (let i = 0; i < diff; i++) {
            arr.push(Array(row).fill(0))
        }
    }

    return arr;
}