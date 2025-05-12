function getDirections(matrix, from, to) {
    const Q = [from]
    const enQ = (n) => Q.push(n);
    const deQ = () => Q.shift();
  
    const isVisited = Array(matrix.length).fill(false);
    isVisited[from] = true;
  
    while(Q.length > 0) {
      const now = deQ()
  
      if (now === to) {
        return true;
      }
      for (let i = 0; i < matrix[now].length; i++) {
        if (matrix[now][i] && !isVisited[i]) {
          enQ(i)
          isVisited[i] = true;
        }
      }
    }
    return false;
  }