process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let result = "";
    for (let i = 0; i < b; i++) {
        let row = "*".repeat(a) + '\n';
        result += row;
    }
    console.log(result)
    return result
});