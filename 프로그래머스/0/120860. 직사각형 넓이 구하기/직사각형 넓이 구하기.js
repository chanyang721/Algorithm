function solution(dots) {
    // nx = math.amx(...a) - math.min(...a)
    // ny = math.amx(...b) - math.min(...b)
    const xValues = dots.map(dot => dot[0]); // x 좌표들
    const yValues = dots.map(dot => dot[1]); // y 좌표들

    const width = Math.max(...xValues) - Math.min(...xValues);
    const height = Math.max(...yValues) - Math.min(...yValues);

    return width * height;
}
