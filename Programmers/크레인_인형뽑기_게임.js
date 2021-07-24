function solution(board, moves) {
  // 바구니에 하나씩 인형을 담는다.
  // 크레인이 집은 인형과, 바구니의 제일 앞에 있는 인형이 같다면 두개의 인형이 사라지는 게임
  // 크레인은 한번 작동 시 반드시 하나의 인형을 집지만, 만약 인형이 없는 곳이라면 아무일도 일어나지 않는다.
  // 입력값 => 인형 정보가 있는 2차원 배열인 board, 집는 순서가 담긴 moves 1치원 배열이
  // 30 x 1000 x 30 => 시간복잡도 On^3
  // [1,5,3,5,1,2,1,4] => 4
  // 1 => [ 분 ]
  // 5 => [ 분, 초 ]
  // 3 => [ 분, 초, 보 ]
  // 5 => [ 분, 초, 보, 보 ] => + 2
  // 1 => [ 분, 초, 초 ] => + 2
  // 2 => [ 분, 노 ]
  // 1 => [ 분, 노 ] => 아무일도 일어나지 않는다.
  // 4 => [ 분, 노, 분 ]
  // 터진 인형의 갯수 count
  // 인형을 담기 위한 basket;
  // row, col 변수 선언
  // 크레인지 집은 수 picked;
  let count = 0;
  let basket = [];
  for (let i = 0; i < moves.length; i++) {
    let row, col;
    let picked = 0;
    col = moves[i] - 1;
    row = board.map((el) => el[col]).findIndex((el) => el !== 0);

    if (row === -1) continue;

    picked = board[row][col];

    if (picked === basket[0]) {
      basket.shift();
      count += 2;
    } else {
      basket.unshift(picked);
    }
    board[row][col] = 0;
  }

  return count;
}
