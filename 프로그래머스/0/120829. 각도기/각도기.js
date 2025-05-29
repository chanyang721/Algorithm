function solution(angle) {
    // 예각: 0 ~ 89, 직각: 90, 둔각: 91 ~ 179, 평각: 180
    if (angle > 0 && angle < 90) {
        return 1; // 예각
    } else if (angle === 90) {
        return 2; // 직각
    } else if (angle > 90 && angle < 180) {
        return 3; // 둔각
    } else if (angle === 180) {
        return 4; // 평각
    }
}