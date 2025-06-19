function solution(box, n) {
    const [w, d, h] = box;
    return Math.floor(w / n) * Math.floor(d / n) * Math.floor(h / n);
}