let dfs = function (node) {
    // TODO: 여기에 코드를 작성합니다.
    // 노드객체를 입력받아, 해당 노드를 root로 dfs를 한다. 
    // 탐색 순서대로 노드의 value가 저장된 배열을 리턴
    //// 수도 코드 ////  
    // 왼쪽 끝까지 간다.
    // 값을 담고 재귀로 이전으로 돌아와 오른쪽노드으로 가서 다시 재귀(왼쪽)으로 간다. 
    //// bare ////
    // 결과 배열 선언하고 node.value를 기본값으로 넣는다. 
    // node.children.length === 0이면, 리턴;
    //// recursive //// 
    // node.children.length !== 0이면,
    //    for -> 0부터 length까지, 
    //      node.children[i]를 재귀함수의 node로 넣는다.
    let result = [];
  
    const recursive = (treeNode, memo) => {
      memo.push(treeNode.value);
      // if (treeNode.children.length === 0) {
      //   return; 
      // }
      // else {
        for (let i = 0; i < treeNode.children.length; i += 1) {
          recursive(treeNode.children[i], memo)
        }
      // }
      return memo;
    }
  
    recursive(node, result)
    return result;
  };
  
  // 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
  let Node = function (value) {
    this.value = value;
    this.children = [];
  };
  
  // 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
  // membership check(중복 확인)를 따로 하지 않습니다.
  Node.prototype.addChild = function (child) {
    this.children.push(child);
    return child;
  };
  
  // 값을 넣기만 하면 되는 문제였기 때문에 
  // concat으로 children 배열의 값만 가져오면 됐다.