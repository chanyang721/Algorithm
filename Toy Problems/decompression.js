const decompression = function (image) {
    // 2의 제곱수인 정사각형의 데이터가 모두 같은 수면 그 수로 압축, 아니면 X로 압축
    // 같은 수가 아니면, 정사각형을 4등분하여 재귀적으로 압축한다.
    // 좌측 상단, 우측 상단, 좌측 하단, 우측 하단 순서로 압축한 결과를 문자열로 표시한다.
    //// base ////
    // image.length가 1이면 return;
    //// recur ////
    // 정사각형 범위 내에서 0,0요소를 기준으로 다른 숫자가 있다면 X를 result에 넣고 재귀 시작,
    //   재귀 -> image를 4등분한 값을 decompression(image/좌상) 4개 넣는다.
    // 모두 같은 값이면 0,0요소를 리턴
    let result = "";
    let L = image.length;
    if (L === 1) return result += image[0][0];
  
    // const pass = [ ...new Set(image.flat()) ].length === 1;
    let pass = true;
    let check = image[0][0];
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
          if (image[i][j] !== check) pass = false;
        }
        if(pass === false) break;
    }
  
    if(!pass) {
        result = "X";
        result += decompression(image.slice(0, L / 2).map(el => el.slice(0, el.length / 2))) // 좌상
        result += decompression(image.slice(0, L / 2).map(el => el.slice((el.length / 2)))) // 우상 
        result += decompression(image.slice(L / 2).map(el => el.slice(0, el.length / 2))) // 좌하
        result += decompression(image.slice(L / 2).map(el => el.slice(el.length / 2))) // 우하
    }
    else return result += image[0][0];
  
    return result;
  };
  