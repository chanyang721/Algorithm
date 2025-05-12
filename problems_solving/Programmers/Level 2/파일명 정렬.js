// 반복문 사용 // -> 에러
function solution(files) {
    
    let base = [];
    for (let i = 0; i < files.length; i++) {
        let head = "", number = "", tail = "";

        for(var j = 0; j < files[i].length; j++) {
            if(files[i][j] == " " || isNaN(Number(files[i][j]))) {
                if(number.length > 0) tail += files[i][j];
                else head += files[i][j];
            }
            else if(tail.length == 0 && number.length < 5) number += files[i][j];
        }
        base.push({ head, number, tail })
    }
    
    base = base.sort((a, b) => {
        let A = a.head.toLowerCase();
        let B = b.head.toLowerCase();
        if (A > B) return 1;
        else if (A < B) return -1
        else {
            if (Number(a.number) < Number(b.number)) return -1;
        }
    })

    let result = base.map(el => el = `${el.head}${el.number}${el.tail}`)

    return result;
}


// 정규식 사용 // 
function solution(files) {
    
    let base = [];
    const reg = /(\d+)/g;
    for (let i = 0; i < files.length; i++) {
        base.push({ value: files[i].split(reg) });
    }
    
    base = base.sort((a, b) => {
        let A = a.value[0].toLowerCase();
        let B = b.value[0].toLowerCase();
        if (A > B) return 1;
        else if (A < B) return -1
        else {
            if (Number(a.value[1]) < Number(b.value[1])) return -1;
        }
    })

    let result = base.map(el => el = el.value.join(""))

    return result;
}