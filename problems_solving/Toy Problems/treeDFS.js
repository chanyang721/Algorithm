let dfs = function (node) {
    // TODO: 여기에 코드를 작성합니다.
    let result = [];
  
    // const recursive = (treeNode, memo) => {
    //   memo.push(treeNode.value);
    //   for (let i = 0; i < treeNode.children.length; i += 1) {
    //       recursive(treeNode.children[i], memo)
    //   }
    //   return memo;
    // }
  
    // recursive(node, result)
    // return result;
    
    //////////// 리팩토링 ///////////////
    let result = [node.value];

    node.children.forEach(el => {
      result = result.concat(dfs(el));
    })
  
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